import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: "Your Name",
  firstName: "YOUR",
  lastName: "NAME",
  initials: "YN",
  title: "Software Engineer & Creative Developer",
  tagline: "Building resilient distributed architectures and avant-garde interactive web experiences.",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata",
  email: "your.email@example.com",
  phone: "+91 98765 43210",
  availability: "Available for Summer 2025/2026 Internships & New Grad Roles",
  isOpenToWork: true,
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    instagram: "https://instagram.com/your-handle",
    twitter: "https://twitter.com/your-handle",
  },
  aboutStatement: "I craft digital products where rigorous computer science engineering converges with award-winning editorial aesthetic. I transform abstract complexity into high-impact, blazing-fast interfaces that elevate brands and empower users worldwide.",
  aboutHighlights: ["rigorous computer science", "award-winning editorial aesthetic", "blazing-fast interfaces", "empower users"],
  introParagraphs: [
    "I am an undergraduate Computer Science and Engineering scholar with a deep fascination for distributed architectures, user-centric human-computer interaction, and full-stack system scalability.",
    "Over the past three years of rigorous academic coursework and self-directed building, I have architected production-grade web systems, led collegiate tech initiatives, and developed high-performance applications used by thousands of students.",
    "When I'm not profiling database queries or refining micro-interactions in Framer Motion, you'll find me analyzing design systems, competing in collegiate hackathons, or contributing to modern TypeScript open-source tooling."
  ],
  quickFacts: [
    { label: "Degree Program", value: "B.Tech Computer Science & Eng.", icon: "GraduationCap" },
    { label: "Academic Standing", value: "CGPA 9.2 / 10.0 (Top 5%)", icon: "Award" },
    { label: "Algorithmic Practice", value: "350+ LeetCode & Codeforces", icon: "Code" },
    { label: "Work Preference", value: "Hybrid / On-site / Remote", icon: "Compass" }
  ],
  stats: {
    projects: 15,
    cgpa: 9.2,
    certificates: 12,
    hackathons: 6,
  },
  marqueeRolesTop: [
    "FULL STACK ARCHITECT",
    "DISTRIBUTED SYSTEMS",
    "CREATIVE DEVELOPER",
    "CLOUD & DEVOPS",
    "UI/UX CRAFTSMAN",
    "OPEN SOURCE ENTHUSIAST"
  ],
  marqueeRolesBottom: [
    "REACT • TYPESCRIPT",
    "NODE.JS • FASTIFY",
    "POSTGRESQL • REDIS",
    "DOCKER • KUBERNETES",
    "TAILWIND • FRAMER MOTION",
    "PYTHON • MACHINE LEARNING"
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ESNext)", level: "Advanced" },
        { name: "Python", level: "Proficient" },
        { name: "C++", level: "Proficient" },
        { name: "Java", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
        { name: "HTML5 / Modern CSS", level: "Expert" }
      ]
    },
    {
      category: "Frontend Architecture",
      items: [
        { name: "React 19", level: "Advanced" },
        { name: "Next.js 15", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "Redux Toolkit / Zustand", level: "Advanced" },
        { name: "Vite / Webpack", level: "Proficient" },
        { name: "Web Accessibility (WCAG)", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "WebSockets & WebRTC", level: "Intermediate" },
        { name: "Prisma ORM", level: "Proficient" },
        { name: "Microservices", level: "Proficient" }
      ]
    },
    {
      category: "Data & Cloud Infrastructure",
      items: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB Atlas", level: "Advanced" },
        { name: "Redis", level: "Proficient" },
        { name: "Docker", level: "Proficient" },
        { name: "AWS (S3, EC2, Lambda)", level: "Intermediate" },
        { name: "Vercel / Cloudflare", level: "Advanced" },
        { name: "CI/CD (GitHub Actions)", level: "Proficient" }
      ]
    },
    {
      category: "Developer Tools & Methodologies",
      items: [
        { name: "Git & Git Flow", level: "Advanced" },
        { name: "Linux / Zsh", level: "Advanced" },
        { name: "Postman & Insomnia", level: "Advanced" },
        { name: "Vitest & Jest", level: "Proficient" },
        { name: "Figma (UI Prototyping)", level: "Proficient" },
        { name: "Agile / Scrum", level: "Proficient" }
      ]
    }
  ]
};
