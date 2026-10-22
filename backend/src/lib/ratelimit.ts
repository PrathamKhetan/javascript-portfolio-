import { hashIp } from './hash.js';

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
}

// In-memory sliding window fallback for local testing or when Upstash Redis is not configured
const inMemoryStore = new Map<string, { count: number; expiresAt: number }>();

const MAX_REQUESTS_PER_HOUR = 5;
const WINDOW_SECONDS = 3600;

export async function checkRateLimit(clientIp: string | undefined): Promise<RateLimitResult> {
  const hashed = hashIp(clientIp);
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // If Upstash credentials are provided, use Upstash Redis REST API
  if (upstashUrl && upstashToken) {
    try {
      const key = `rate_limit:${hashed}`;
      // Execute pipeline: INCR and EXPIRE
      const response = await fetch(`${upstashUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', key],
          ['EXPIRE', key, WINDOW_SECONDS],
        ]),
      });

      if (response.ok) {
        const data = (await response.json()) as any;
        const currentCount = Number(data[0]?.result || 1);
        const allowed = currentCount <= MAX_REQUESTS_PER_HOUR;
        return {
          allowed,
          remaining: Math.max(0, MAX_REQUESTS_PER_HOUR - currentCount),
          resetSeconds: WINDOW_SECONDS,
        };
      }
    } catch (err) {
      console.warn('Upstash Redis check failed, falling back to in-memory rate limiter:', err);
    }
  }

  // In-Memory Fallback
  const now = Date.now();
  const entry = inMemoryStore.get(hashed);

  if (!entry || entry.expiresAt <= now) {
    inMemoryStore.set(hashed, {
      count: 1,
      expiresAt: now + WINDOW_SECONDS * 1000,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_HOUR - 1,
      resetSeconds: WINDOW_SECONDS,
    };
  }

  if (entry.count >= MAX_REQUESTS_PER_HOUR) {
    const resetSeconds = Math.max(0, Math.ceil((entry.expiresAt - now) / 1000));
    return {
      allowed: false,
      remaining: 0,
      resetSeconds,
    };
  }

  entry.count += 1;
  const resetSeconds = Math.max(0, Math.ceil((entry.expiresAt - now) / 1000));
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_HOUR - entry.count,
    resetSeconds,
  };
}
