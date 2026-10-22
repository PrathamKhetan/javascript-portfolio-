import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  return res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'production',
    service: 'portfolio-serverless-api',
  });
}
