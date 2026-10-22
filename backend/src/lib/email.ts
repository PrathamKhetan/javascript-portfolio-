export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendNotificationEmail(payload: EmailPayload): Promise<{ sent: boolean; messageId?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'your.email@example.com';

  if (!apiKey) {
    console.log('[Email Simulation] RESEND_API_KEY not configured. Simulated notification dispatch:');
    console.log(`[Email] To: ${toEmail} | From: ${payload.name} <${payload.email}> | Message: ${payload.message}`);
    return { sent: true, messageId: 'simulated-resend-id' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        subject: `[Portfolio Inquiry] New message from ${payload.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0b0b0f; margin-top: 0;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f8fafc; padding: 12px 16px; border-left: 4px solid #c6ff3d; margin: 0;">
              ${payload.message.replace(/\n/g, '<br />')}
            </blockquote>
            <p style="font-size: 12px; color: #64748b; margin-top: 24px;">Sent from your portfolio contact API.</p>
          </div>
        `,
      }),
    });

    if (response.ok) {
      const data = (await response.json()) as any;
      return { sent: true, messageId: data.id };
    } else {
      const errorText = await response.text();
      console.error('[Resend Error]', errorText);
      return { sent: false };
    }
  } catch (err) {
    console.error('[Resend Exception]', err);
    return { sent: false };
  }
}
