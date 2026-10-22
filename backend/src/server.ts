import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables
dotenv.config();

// Import serverless handlers
import contactHandler from '../api/contact.js';
import profileHandler from '../api/profile.js';
import projectsHandler from '../api/projects.js';
import certificatesHandler from '../api/certificates.js';
import visitHandler from '../api/visit.js';
import statsHandler from '../api/stats.js';
import resumeHandler from '../api/resume.js';
import healthHandler from '../api/health.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server banner
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Personal Portfolio API is operational',
    endpoints: [
      'GET /api/health',
      'GET /api/profile',
      'GET /api/projects',
      'GET /api/certificates',
      'POST /api/contact',
      'POST /api/visit',
      'GET /api/stats',
      'GET /api/resume',
    ],
  });
});

// Mount Vercel Serverless Handlers
app.all('/api/contact', (req: Request, res: Response) => contactHandler(req, res));
app.all('/api/profile', (req: Request, res: Response) => profileHandler(req, res));
app.all('/api/projects', (req: Request, res: Response) => projectsHandler(req, res));
app.all('/api/certificates', (req: Request, res: Response) => certificatesHandler(req, res));
app.all('/api/visit', (req: Request, res: Response) => visitHandler(req, res));
app.all('/api/stats', (req: Request, res: Response) => statsHandler(req, res));
app.all('/api/resume', (req: Request, res: Response) => resumeHandler(req, res));
app.all('/api/health', (req: Request, res: Response) => healthHandler(req, res));

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  });
});

// Central Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[Unhandled Server Error]', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// Start listening if run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`\n⚡ Backend API server is running locally at: http://localhost:${PORT}`);
    console.log(`🌐 Ready for frontend connections from: ${process.env.FRONTEND_URL || 'http://localhost:5173'}\n`);
  });
}

export default app;
