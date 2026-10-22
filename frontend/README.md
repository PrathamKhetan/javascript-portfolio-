# Portfolio Frontend (React + Vite + TypeScript)

An award-winning editorial personal portfolio website engineered with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

---

## 🚀 Key Features

- **Editorial Avant-Garde Design**: Dual aesthetic with Dark Mode (`#0b0b0f` near-black background + `#c6ff3d` acid-lime accent) and Light Mode (`#f0f4f1` mint background + `#5a3dff` violet accent), remembered across browser sessions.
- **Micro-Interactions**:
  - Fullscreen 0–100% preloader curtain reveal.
  - Fluid custom cursor with outer lagging ring & responsive hover scaling (automatically disabled on touch devices).
  - Magnetic interactive buttons tracking mouse springs.
  - Circular clip-path animated fullscreen navigation menu.
  - Colored wipe page transitions.
  - Real-time IST availability pill & clock.
  - Numbered count-up stats on viewport entry.
- **Pages**:
  - `Home`: Hero with filled/outlined split typography, mouse-parallax arch portrait, rotating badge, dual-direction marquees, about statement, stats, featured projects, and giant CTA.
  - `About`: Editorial introduction, quick-fact cards, and 5 technical skill categories with tiltable chip clouds.
  - `Education`: Vertical timeline (B.Tech, XII, X) and semester GPA cards with animated fill progress bars.
  - `Work`: Numbered row projects with category filters, leading to deep case studies at `/work/:slug`.
  - `Credentials`: Honors grid, filtered certificates (Course, Internship, Hackathon), and quick-view modal.
  - `Journey`: Career aspirations, what learning now, what looking for, and experience timeline.
  - `Gallery`: Masonry image grid with fullscreen keyboard-navigated lightbox (← / → / Esc).
  - `Contact`: Click-to-copy email with toast, direct links, and a validated contact form with bot honeypot.
- **Editable Content Architecture**: All content is separated into `src/data/` files (`profile.ts`, `projects.ts`, `certificates.ts`, `education.ts`, `journey.ts`, `gallery.ts`).
- **Resilient Fallback**: Fetches live data from the serverless backend (`/api/profile`, `/api/projects`, `/api/certificates`) and smoothly falls back to local data if the API is offline.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion 12
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Routing**: React Router DOM 7

---

## 📦 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   By default:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Production Build & Verification**:
   ```bash
   npm run build
   ```

---

## 📁 File Structure

```
frontend/
├── public/                 # Static assets (favicon.svg, robots.txt, sitemap.xml, PDFs)
├── src/
│   ├── components/
│   │   ├── common/         # Navbar, FullscreenMenu, Preloader, CustomCursor, ScrollProgress, Footer, etc.
│   │   └── home/           # Hero, AboutStatement, FeaturedProjects, GiantCTA
│   ├── context/            # ThemeContext (dark/light) & DataContext
│   ├── data/               # ⚡ EDIT YOUR DETAILS HERE (profile, projects, education, etc.)
│   ├── hooks/              # useTime, useLenis
│   ├── pages/              # Home, About, Education, Work, CaseStudy, Credentials, Journey, Gallery, Contact
│   ├── services/           # api.ts (backend client with timeout and local fallback)
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # Root router and transition layout
│   ├── index.css           # Global tokens, outlines, fonts, arch mask
│   └── main.tsx            # Application entrypoint
├── .env.example
├── vercel.json             # SPA rewrites & security headers
├── tailwind.config.js
└── vite.config.ts
```

---

## ☁️ Deploying to Vercel

1. Create a new GitHub repository for `frontend/` (or deploy from a subfolder).
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Set the **Framework Preset** to `Vite`.
4. Add the environment variable:
   - `VITE_API_URL`: Your deployed backend URL (e.g. `https://your-backend.vercel.app/api`).
5. Click **Deploy**. Vercel will build using `npm run build` and serve with SPA rewrites via `vercel.json`.
