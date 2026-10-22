import { Request, Response } from 'express';

export function handleCors(req: Request, res: Response): boolean {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ];

  if (process.env.FRONTEND_URL) {
    allowedOrigins.push(process.env.FRONTEND_URL.trim().replace(/\/$/, ''));
  }

  const origin = req.headers.origin;

  if (origin && (allowedOrigins.includes(origin) || allowedOrigins.includes('*'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    // Non-browser or server-to-server request
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else {
    // If specific origin not listed, allow frontend URL by default
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true; // handled
  }

  return false;
}
