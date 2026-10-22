import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.resolve(__dirname, '../src/data/certificates.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);

    // Cache headers: cached by Vercel Edge for 1 hour (3600s), stale-while-revalidate for 1 day
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

    return res.status(200).json({
      success: true,
      certificates: data.certificates || [],
      achievements: data.achievements || [],
    });
  } catch (error: any) {
    console.error('[Certificates API Error]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to load certificates data',
    });
  }
}
