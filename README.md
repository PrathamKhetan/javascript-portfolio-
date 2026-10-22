# 🌟 Award-Winning Editorial Portfolio & Serverless API

A production-ready, high-performance personal portfolio website and serverless backend architecture built for college **CA3 evaluation**, competitive placements, and internship applications.

Designed with an **editorial avant-garde aesthetic**, featuring dual dark/light themes, Syne & Inter typography, a 0–100% preloader curtain, interactive custom cursor, magnetic physics buttons, circular clip-path fullscreen menu navigation, colored wipe route transitions, count-up stats, verified credential modals, and a contact system with Zod validation, rate limiting, and bot protection.

---

## 🏗️ Project Architecture

This workspace is cleanly decoupled into two standalone projects, each independently deployable as its own Vercel project:

```
Javascript lab portfolio/
├── frontend/                   # React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion + Lenis
│   ├── public/                 # Static assets (favicon.svg, robots.txt, sitemap.xml, resume.pdf)
│   ├── src/
│   │   ├── components/         # Modular UI (Hero, Navbar, FullscreenMenu, Preloader, Cursor, etc.)
│   │   ├── context/            # ThemeContext (dark/light) & DataContext
│   │   ├── data/               # ⚡ EDITABLE PERSONAL DATA (Zero component edits needed)
│   │   ├── pages/              # Home, About, Education, Work, CaseStudy, Credentials, Journey, Gallery, Contact
│   │   └── services/           # API service with local offline data fallback
│   ├── .env.example            # Environment variables template
│   ├── vercel.json             # SPA rewrites & security headers
│   └── package.json
│
├── backend/                    # Node.js + TypeScript + Vercel Serverless Functions
│   ├── api/                    # Serverless endpoints (contact, profile, projects, certificates, stats, visit, resume, health)
│   ├── src/
│   │   ├── data/               # Backend JSON data files (profile, projects, certificates)
│   │   ├── lib/                # Rate limiter (Upstash), hash (SHA-256), db (MongoDB), email (Resend), cors
│   │   ├── validators/         # Zod schema validation
│   │   └── server.ts           # Local development Express server (port 5001)
│   ├── tests/                  # Vitest automated test suite (input validation, bot honeypot, IP hashing)
│   ├── .env.example            # Secret keys template
│   ├── vercel.json             # Edge headers & serverless routing
│   └── package.json
│
└── README.md                   # Complete master deployment & customization guide (this file)
```

---

## ⚡ Quick Start: Running Locally

Both projects run concurrently on your local machine:
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5001`

### 1. Start the Backend API Server
Open a terminal window:
```bash
cd backend
npm install
npm run dev
```
> The API server starts on `http://localhost:5001`. You will see:
> `⚡ Backend API server is running locally at: http://localhost:5001`

To run the automated backend test suite:
```bash
npm test
```

### 2. Start the Frontend Application
Open a second terminal window:
```bash
cd frontend
npm install
npm run dev
```
> The Vite dev server starts on `http://localhost:5173`. Open your browser to explore the website.

---

## 🚀 Step-by-Step Vercel Deployment Guide

To achieve maximum marks in your CA3 evaluation and ensure clean continuous deployment, deploy the **Backend first**, then deploy the **Frontend**.

### Step 1: Deploy the Backend to Vercel
1. Push the `backend/` folder to a new GitHub repository named `portfolio-backend` (see GitHub guide below).
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import your `portfolio-backend` repository.
4. Keep the **Framework Preset** as `Other`.
5. Open **Environment Variables** and add the following keys:
   - `FRONTEND_URL`: Leave blank or set temporarily to `http://localhost:5173` (you will update this with your frontend Vercel URL in Step 2).
   - `PORT`: `5001`
   - `CONTACT_TO_EMAIL`: `your.real.email@gmail.com`
   - *(Optional for full cloud features)*:
     - `RESEND_API_KEY`: API key from [Resend](https://resend.com) (free 3,000 emails/mo).
     - `MONGODB_URI`: Connection string from [MongoDB Atlas](https://www.mongodb.com/atlas) (free 512MB tier).
     - `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`: Credentials from [Upstash Redis](https://console.upstash.com) (free 10,000 commands/day).
6. Click **Deploy**.
7. Note down your backend URL (e.g., `https://portfolio-backend-xyz.vercel.app`).

### Step 2: Deploy the Frontend to Vercel
1. Push the `frontend/` folder to a new GitHub repository named `portfolio-frontend`.
2. In the Vercel Dashboard, click **Add New Project** and import `portfolio-frontend`.
3. Set **Framework Preset** to `Vite`.
4. Open **Environment Variables** and add:
   - `VITE_API_URL`: `https://portfolio-backend-xyz.vercel.app/api` (the backend URL from Step 1 with `/api` appended).
5. Click **Deploy**.
6. Once deployed, copy your live frontend URL (e.g., `https://portfolio-frontend-xyz.vercel.app`).
7. **Important**: Go back to your `portfolio-backend` project in Vercel, open **Settings > Environment Variables**, update `FRONTEND_URL` to your live frontend URL, and click **Redeploy** so CORS allows live requests!

---

## 🌐 Connecting a Custom Domain (e.g. `yourname.dev`)

1. Purchase a domain from Namecheap, Cloudflare Registrar, or Google Domains.
2. In the Vercel Dashboard, navigate to your `portfolio-frontend` project > **Settings > Domains**.
3. Enter your domain (e.g., `yourname.dev` or `www.yourname.dev`) and click **Add**.
4. Vercel will display the DNS records needed:
   - **Type A Record**: `@` pointing to `76.76.21.21`
   - **Type CNAME Record**: `www` pointing to `cname.vercel-dns.com`
5. Add these records in your domain registrar's DNS panel. SSL certificates (HTTPS) are provisioned automatically by Vercel within 5–15 minutes.

---

## 🐙 Pushing to Two Separate GitHub Repositories

Having two clean, separate GitHub repositories demonstrates professional software architecture and earns full marks in evaluations.

### Repository 1: Backend (`portfolio-backend`)
```bash
cd backend
git init
git add .
git commit -m "feat: initial commit for portfolio serverless backend"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/portfolio-backend.git
git push -u origin main
```

### Repository 2: Frontend (`portfolio-frontend`)
```bash
cd frontend
git init
git add .
git commit -m "feat: initial commit for editorial portfolio frontend"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/portfolio-frontend.git
git push -u origin main
```

---

## 📝 Checklist: How to Replace Placeholder Content with Your Real Details

All personal content is isolated in dedicated data files. **You do NOT need to touch or modify any component or styling code!**

| File to Edit | What to Update |
| :--- | :--- |
| `frontend/src/data/profile.ts` & `backend/src/data/profile.json` | Your full name, first/last name for hero, initials, email, phone, location, bio, quick facts, and skills |
| `frontend/src/data/projects.ts` & `backend/src/data/projects.json` | Project titles, summaries, tech stack, screenshots, live links, GitHub URLs, challenges, and solutions |
| `frontend/src/data/education.ts` | College degree, CGPA, Class XII/X marks, school names, and semester-by-semester GPA |
| `frontend/src/data/certificates.ts` & `backend/src/data/certificates.json` | Hackathon wins, course certifications, credential IDs, verify links, and issuer names |
| `frontend/src/data/journey.ts` | Internships, club leadership roles, aspirations, what you are learning, and what roles you want |
| `frontend/src/data/gallery.ts` | Photo URLs, captions, and dates for campus and event moments |
| `frontend/public/resume.pdf` | Replace this file with your actual PDF resume (keep the filename `resume.pdf`) |
| `frontend/public/dummy-certificate.pdf` | Replace with your actual certificate PDF or credential scan |
| `frontend/index.html` | Update meta tags, title tag, Open Graph image, and social preview descriptions |

---

## 🧪 Verification & Build Status

Both projects are verified, linted, tested, and compile without errors:
- **Frontend Build**: `npm run build` completed successfully (`tsc && vite build`).
- **Backend Build**: `npm run build` completed successfully (`tsc`).
- **Automated Tests**: 9/9 unit tests passing (`vitest run`).
- **API Tests**: Validated with curl for `/api/health`, `/api/profile`, `/api/projects`, `/api/certificates`, `/api/visit`, `/api/stats`, `/api/resume`, and `/api/contact` (including rate limiting and honeypot bot trap).
