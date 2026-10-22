import type { VercelRequest, VercelResponse } from '@vercel/node';
import { validateContactInput } from '../src/validators/contactValidator.js';
import { checkRateLimit } from '../src/lib/ratelimit.js';
import { saveMessage } from '../src/lib/db.js';
import { sendNotificationEmail } from '../src/lib/email.js';
import { handleCors } from '../src/lib/cors.js';

export default async function handler(req: VercelRequest | any, res: VercelResponse | any) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Use POST.',
    });
  }

  try {
    // 1. Extract client IP
    const clientIp = (
      req.headers['x-forwarded-for'] ||
      req.socket?.remoteAddress ||
      '127.0.0.1'
    ).toString().split(',')[0].trim();

    // 2. Rate Limiting Check (5 requests per hour)
    const rateCheck = await checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        success: false,
        error: `Too many inquiries from this IP address. Please wait ${Math.ceil(rateCheck.resetSeconds / 60)} minutes before trying again.`,
        remaining: rateCheck.remaining,
      });
    }

    // 3. Zod Validation & Honeypot Check
    const validation = validateContactInput(req.body);
    if (!validation.success || !validation.data) {
      return res.status(400).json({
        success: false,
        error: validation.error || 'Validation error',
        errors: validation.errors,
      });
    }

    const { name, email, message } = validation.data;

    // 4. Save to Database
    const dbRecord = await saveMessage({ name, email, message, clientIp });

    // 5. Send Email via Resend
    await sendNotificationEmail({ name, email, message });

    // 6. Return consistent JSON response
    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been successfully transmitted and logged.',
      data: {
        id: dbRecord.id,
        name,
        email,
        timestamp: new Date().toISOString(),
      },
      rateLimit: {
        remaining: rateCheck.remaining,
      },
    });
  } catch (error: any) {
    console.error('[API Contact Error]', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error while processing contact inquiry.',
    });
  }
}
