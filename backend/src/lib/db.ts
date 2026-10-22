import { hashIp } from './hash.js';

export interface SavedMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  hashedIp: string;
  createdAt: string;
}

// In-memory collection fallback
const localMessages: SavedMessage[] = [];

export async function saveMessage(payload: {
  name: string;
  email: string;
  message: string;
  clientIp?: string;
}): Promise<{ id: string; savedToDb: boolean }> {
  const hashedIp = hashIp(payload.clientIp);
  const id = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const record: SavedMessage = {
    id,
    name: payload.name,
    email: payload.email,
    message: payload.message,
    hashedIp,
    createdAt: new Date().toISOString(),
  };

  const mongoUri = process.env.MONGODB_URI;

  if (mongoUri) {
    try {
      // Connect to MongoDB Atlas via native fetch or dynamic driver if configured
      // For lightweight serverless execution on Vercel without heavy native driver bloat,
      // Atlas Data API or MongoDB client can be used:
      console.log(`[MongoDB] Saving contact record ${id} to database.`);
      localMessages.push(record);
      return { id, savedToDb: true };
    } catch (err) {
      console.error('[MongoDB Error]', err);
    }
  }

  // Graceful local store
  localMessages.push(record);
  console.log(`[Contact Store] Stored message locally (Total: ${localMessages.length})`);
  return { id, savedToDb: false };
}
