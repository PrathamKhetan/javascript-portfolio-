import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(80, { message: 'Name must not exceed 80 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Please provide a valid email address' })
    .max(120, { message: 'Email must not exceed 120 characters' }),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(2000, { message: 'Message must not exceed 2000 characters' }),
  honeypot: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function validateContactInput(data: unknown): {
  success: boolean;
  data?: ContactInput;
  error?: string;
  errors?: Record<string, string>;
} {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    const formattedErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join('.');
      if (!formattedErrors[path]) {
        formattedErrors[path] = issue.message;
      }
    }
    return {
      success: false,
      error: result.error.issues[0]?.message || 'Invalid input submission',
      errors: formattedErrors,
    };
  }

  // Check honeypot bot trap
  if (result.data.honeypot && result.data.honeypot.trim().length > 0) {
    return {
      success: false,
      error: 'Bot submission rejected',
    };
  }

  return {
    success: true,
    data: result.data,
  };
}
