import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  const targetUrl = process.env.RESUME_URL || '/resume.pdf';

  // 302 Found redirect
  return res.redirect(302, targetUrl);
}
