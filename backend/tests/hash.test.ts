import { describe, it, expect } from 'vitest';
import { hashIp } from '../src/lib/hash.js';

describe('Privacy-Preserving IP Hasher', () => {
  it('should generate a 64-character SHA-256 hex string', () => {
    const hash = hashIp('192.168.1.100');
    expect(hash).toHaveLength(64);
    expect(/^[a-f0-9]{64}$/.test(hash)).toBe(true);
  });

  it('should be deterministic for the same input IP', () => {
    const hash1 = hashIp('10.0.0.1');
    const hash2 = hashIp('10.0.0.1');
    expect(hash1).toBe(hash2);
  });

  it('should produce different hashes for different IPs', () => {
    const hash1 = hashIp('10.0.0.1');
    const hash2 = hashIp('10.0.0.2');
    expect(hash1).not.toBe(hash2);
  });

  it('should not expose raw IP within the generated hash', () => {
    const ip = '203.0.113.195';
    const hash = hashIp(ip);
    expect(hash).not.toContain(ip);
  });
});
