import crypto from 'node:crypto';

const SALT = process.env.IP_SALT || 'portfolio-secure-ip-salt-v1';

/**
 * Hashes an IP address using SHA-256 for privacy compliance.
 * Never stores raw IP addresses in the database or analytics.
 */
export function hashIp(ip: string | undefined): string {
  const cleanIp = (ip || '127.0.0.1').trim().toLowerCase();
  return crypto.createHash('sha256').update(`${cleanIp}:${SALT}`).digest('hex');
}
