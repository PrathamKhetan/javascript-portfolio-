import { hashIp } from './hash.js';

// In-memory analytics store for serverless instance / local dev
const uniqueHashedIps = new Set<string>();
let totalVisitsCount = 0;

export async function recordVisitor(clientIp: string | undefined): Promise<{ unique: boolean; total: number }> {
  const hashed = hashIp(clientIp);
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  totalVisitsCount += 1;
  const isUnique = !uniqueHashedIps.has(hashed);
  uniqueHashedIps.add(hashed);

  if (upstashUrl && upstashToken) {
    try {
      await fetch(`${upstashUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['SADD', 'analytics:unique_visitors', hashed],
          ['INCR', 'analytics:total_visits'],
        ]),
      });
    } catch (err) {
      console.warn('Analytics Upstash update error:', err);
    }
  }

  return {
    unique: isUnique,
    total: totalVisitsCount,
  };
}

export async function getAnalyticsStats(): Promise<{ uniqueVisitors: number; totalVisits: number }> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (upstashUrl && upstashToken) {
    try {
      const response = await fetch(`${upstashUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['SCARD', 'analytics:unique_visitors'],
          ['GET', 'analytics:total_visits'],
        ]),
      });

      if (response.ok) {
        const data = (await response.json()) as any;
        const unique = Number(data[0]?.result || uniqueHashedIps.size);
        const total = Number(data[1]?.result || totalVisitsCount);
        return {
          uniqueVisitors: Math.max(unique, uniqueHashedIps.size),
          totalVisits: Math.max(total, totalVisitsCount),
        };
      }
    } catch (err) {
      console.warn('Analytics Upstash query error:', err);
    }
  }

  return {
    uniqueVisitors: Math.max(uniqueHashedIps.size, 1),
    totalVisits: Math.max(totalVisitsCount, 1),
  };
}
