import { describe, it, expect } from 'vitest';
import { validateContactInput } from '../src/validators/contactValidator.js';

describe('Contact Form Input Validator', () => {
  it('should accept valid contact submissions', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello, I would like to discuss an engineering role with your team!',
    };

    const result = validateContactInput(input);
    expect(result.success).toBe(true);
    expect(result.data?.name).toBe('Jane Doe');
    expect(result.data?.email).toBe('jane@example.com');
  });

  it('should reject names shorter than 2 characters', () => {
    const input = {
      name: 'J',
      email: 'jane@example.com',
      message: 'Hello, this is a test inquiry message.',
    };

    const result = validateContactInput(input);
    expect(result.success).toBe(false);
    expect(result.error).toContain('Name must be at least 2 characters');
  });

  it('should reject invalid email formats', () => {
    const input = {
      name: 'Jane Doe',
      email: 'not-an-email',
      message: 'Hello, this is a test inquiry message.',
    };

    const result = validateContactInput(input);
    expect(result.success).toBe(false);
    expect(result.error).toContain('valid email');
  });

  it('should reject messages shorter than 10 characters', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hi there',
    };

    const result = validateContactInput(input);
    expect(result.success).toBe(false);
    expect(result.error).toContain('Message must be at least 10 characters');
  });

  it('should trap and reject automated bot submissions via honeypot field', () => {
    const botInput = {
      name: 'Spam Bot 3000',
      email: 'bot@spamnetwork.com',
      message: 'Buy cryptocurrency right now with this automated link!',
      honeypot: 'filled_by_bot_script',
    };

    const result = validateContactInput(botInput);
    expect(result.success).toBe(false);
    expect(result.error).toBe('Bot submission rejected');
  });
});
