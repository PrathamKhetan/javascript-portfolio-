# Portfolio Backend (Node.js + TypeScript + Vercel Serverless)

A high-performance, security-hardened serverless backend powering the personal portfolio. Engineered with Node.js, TypeScript, Zod input validation, privacy-preserving SHA-256 IP hashing, Upstash Redis rate limiting, MongoDB Atlas persistence, and Resend email notifications.

---

## 🛠️ Architecture & Features

- **Serverless API**: Deployed as individual Vercel serverless functions in the `/api` directory.
- **Strict Validation**: Zod schema ensuring:
  - Name: 2 to 80 characters.
  - Email: RFC-compliant valid email.
  - Message: 10 to 2000 characters.
  - Honeypot: Rejects automated spam crawlers.
- **Rate Limiting**: Restricts submissions to 5 per hour per IP using Upstash Redis with a sliding window (and graceful in-memory fallback for local dev).
- **Privacy-Preserving Visitor Analytics**: `POST /api/visit` and `GET /api/stats` track unique visitors using SHA-256 salted hashes. **No raw IP addresses are ever stored.**
- **Edge Caching**: `GET /api/profile`, `GET /api/projects`, and `GET /api/certificates` send cache headers (`public, s-maxage=3600, stale-while-revalidate=86400`) enabling instant 1-hour Vercel Edge caching.
- **Central Error Handling & CORS**: Safe CORS origin headers restricted to `FRONTEND_URL` and `http://localhost:5173`.

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

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Server will boot on `http://localhost:5000` with hot-reload via `tsx`.

4. **Run Automated Test Suite**:
   ```bash
   npm test
   ```

5. **Typecheck & Compile**:
   ```bash
   npm run build
   ```

---

## 🔌 API Endpoints & `curl` Examples

### 1. Health Monitoring
```bash
curl -X GET http://localhost:5000/api/health
```
**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-02-22T22:30:00.000Z",
  "uptime": 12.4,
  "environment": "development",
  "service": "portfolio-serverless-api"
}
```

---

### 2. Transmit Contact Message (`POST /api/contact`)
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane.smith@techcorp.com",
    "message": "We would like to interview you for our upcoming Summer 2025 Software Engineering Internship."
  }'
```
**Response**:
```json
{
  "success": true,
  "message": "Your inquiry has been successfully transmitted and logged.",
  "data": {
    "id": "msg_1740000000_abc123",
    "name": "Jane Smith",
    "email": "jane.smith@techcorp.com",
    "timestamp": "2025-02-22T22:30:00.000Z"
  },
  "rateLimit": {
    "remaining": 4
  }
}
```

#### Bot Honeypot Rejection Example:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Spam Bot",
    "email": "bot@spam.com",
    "message": "Automated spam message here.",
    "honeypot": "iamabot"
  }'
```
**Response**: `HTTP 400`
```json
{
  "success": false,
  "error": "Bot submission rejected"
}
```

---

### 3. Fetch Profile Data (`GET /api/profile`)
```bash
curl -X GET http://localhost:5000/api/profile
```

---

### 4. Fetch Projects Catalog (`GET /api/projects`)
```bash
curl -X GET http://localhost:5000/api/projects
```

---

### 5. Fetch Certificates & Achievements (`GET /api/certificates`)
```bash
curl -X GET http://localhost:5000/api/certificates
```

---

### 6. Record Visit & Get Stats (`POST /api/visit` & `GET /api/stats`)
```bash
# Record page visit
curl -X POST http://localhost:5000/api/visit

# Get aggregate stats
curl -X GET http://localhost:5000/api/stats
```
**Response**:
```json
{
  "success": true,
  "uniqueVisitors": 1,
  "totalVisits": 1
}
```

---

### 7. Resume Redirect (`GET /api/resume`)
```bash
curl -I http://localhost:5000/api/resume
```
**Response**: `HTTP/1.1 302 Found` with `Location: /resume.pdf`.

---

## ☁️ Deploying to Vercel

1. Create a dedicated GitHub repository for `backend/`.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Set the **Framework Preset** to `Other`.
4. Configure the environment variables in **Project Settings > Environment Variables**:
   - `FRONTEND_URL`: `https://your-frontend-project.vercel.app`
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `RESEND_API_KEY`: Your Resend API key (`re_...`).
   - `CONTACT_TO_EMAIL`: Your inbox where notifications will be delivered.
   - `UPSTASH_REDIS_REST_URL`: Upstash Redis REST URL.
   - `UPSTASH_REDIS_REST_TOKEN`: Upstash Redis token.
5. Deploy. Vercel will automatically discover the functions in `/api`.
