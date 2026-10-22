import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getAnalyticsStats } from '../src/lib/analytics.js';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const stats = await getAnalyticsStats();
    return res.status(200).json({
      success: true,
      ...stats,
    });
  } catch (error: any) {
    console.error('[Stats API Error]', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch analytics stats' });
  }
}
