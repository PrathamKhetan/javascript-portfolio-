import type { VercelRequest, VercelResponse } from '@vercel/node';
import { recordVisitor } from '../src/lib/analytics.js';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const clientIp = (
      req.headers['x-forwarded-for'] ||
      req.socket?.remoteAddress ||
      '127.0.0.1'
    ).toString().split(',')[0].trim();

    const stats = await recordVisitor(clientIp);

    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error: any) {
    console.error('[Visit API Error]', error);
    return res.status(500).json({ success: false, error: 'Failed to record visit' });
  }
}
