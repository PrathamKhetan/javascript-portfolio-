import { ProjectItem } from '../types';

export const initialProjectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "ai-assisted-url-vulnerability-scanner",
    number: "01",
    title: "AI-Assisted URL Vulnerability Scanner",
    category: "Cybersecurity & Web Application Security",
    year: "2026",
    summary: "A URL-based vulnerability scanner and forensic report generator focused on OWASP Top 10 web security, automated threat detection, and header analysis.",
    role: "Lead Cybersecurity Developer",
    techStack: ["Python", "OWASP Top 10", "Requests", "BeautifulSoup", "Regular Expressions", "Security Auditing"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan",
    githubUrl: "https://github.com/PrathamKhetan",
    thumbnail: "/gallery/photo-page-16.jpeg",
    heroImage: "/gallery/photo-page-16.jpeg",
    screenshots: [
      "/gallery/photo-page-16.jpeg",
      "/gallery/photo-page-24.jpeg",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Developed a comprehensive URL-based vulnerability scanner and security analyzer designed to probe web targets for security misconfigurations, missing HTTP security headers, injection surfaces, and cross-site scripting vectors. Generates structured forensic reports highlighting critical OWASP Top 10 vulnerabilities.",
    challenge: "Parsing complex web response headers, avoiding false positives during heuristic vulnerability scanning, and generating readable, prioritized vulnerability remediations.",
    solution: "Designed modular scanning engines in Python that execute asynchronous HTTP requests, examine response status codes and TLS configurations, test for missing HSTS, CSP, and X-Content-Type-Options headers, and compile actionable forensic remediation checklists.",
    keyFeatures: [
      "Automated inspection of OWASP Top 10 web vulnerabilities and security headers",
      "Detection of cross-site scripting (XSS), SQL injection vectors, and clickjacking risks",
      "Evaluation of TLS certificate validity, HSTS policies, and Content Security Policies",
      "Structured forensic export format (JSON & formatted Markdown vulnerability summaries)",
      "Lightweight CLI workflow with customizable scan intensity and target scopes"
    ]
  },
  {
    id: "proj-2",
    slug: "univsafenet-student-database-management-system",
    number: "02",
    title: "UnivSafeNet – Student Database Management System",
    category: "Secure Systems & Database Engineering",
    year: "2025",
    summary: "A secure database management application engineered for storing, updating, and retrieving university student records with parameterized queries and access control.",
    role: "Database & Backend Developer",
    techStack: ["Python", "SQL", "Relational DBMS", "Role-Based Access Control", "Data Integrity"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan/DBMS-LAB",
    githubUrl: "https://github.com/PrathamKhetan/DBMS-LAB",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "UnivSafeNet is a robust student database management platform built to centralize student academic profiles, course registrations, and attendance metrics while maintaining strict data consistency and role-based permissions.",
    challenge: "Preventing SQL injection vulnerabilities and race conditions during bulk grade and attendance record updates across concurrent user sessions.",
    solution: "Implemented normalized 3NF relational schemas with strict foreign key constraints and fully parameterized SQL execution, backed by transactional rollback mechanisms ensuring zero data corruption.",
    keyFeatures: [
      "Normalized relational database schemas with primary/foreign key referential integrity",
      "Parameterized SQL query design completely immunizing the system against SQL injection",
      "Granular role-based access control (Student, Faculty, Administrative Staff)",
      "Instant transcript retrieval and cumulative GPA computation engine",
      "Audit trail logs recording mutations to academic scores and attendance records"
    ]
  },
  {
    id: "proj-3",
    slug: "data-structures-and-algorithms-suite",
    number: "03",
    title: "Algorithmic Foundations & Data Structures Suite",
    category: "Core Computer Science & Optimization",
    year: "2024 — 2026",
    summary: "Comprehensive open-source repository of advanced data structures, algorithmic paradigms, memory-managed pointers, and complexity benchmarks.",
    role: "Sole Author & Contributor",
    techStack: ["C", "Python", "Data Structures", "Dynamic Programming", "Graph Algorithms"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan/Data-Structure-Algorithm",
    githubUrl: "https://github.com/PrathamKhetan/Data-Structure-Algorithm",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A structured engineering repository containing idiomatic C and Python implementations of foundational algorithms and data structures, including self-balancing trees, graphs, sorting mechanisms, and dynamic programming.",
    challenge: "Optimizing memory footprints and pointer safety in manual C memory allocations while demonstrating theoretical asymptotic time complexities.",
    solution: "Engineered clean, memory-leak-free C modules with Valgrind verification, paired with Python benchmarking scripts comparing empirical runtimes against theoretical Big-O curves.",
    keyFeatures: [
      "Pointer-safe implementations of linked lists, binary search trees, and heap structures in C",
      "Dynamic programming solutions covering knapsack, LCS, and shortest-path topologies",
      "Comparative runtime profiling across quicksort, mergesort, and radix sort",
      "Modular code architecture suitable for collegiate academic laboratories and reference"
    ]
  },
  {
    id: "proj-4",
    slug: "production-fullstack-portfolio-platform",
    number: "04",
    title: "Award-Winning Editorial Portfolio Platform",
    category: "Full-Stack Web Engineering & UI/UX Design",
    year: "2026",
    summary: "A production-grade, twin-architecture portfolio web app featuring React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis smooth scrolling, and Express/PostgreSQL backend.",
    role: "Full-Stack Architect",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Node.js", "Express", "PostgreSQL"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan/javascript-portfolio-",
    githubUrl: "https://github.com/PrathamKhetan/javascript-portfolio-",
    thumbnail: "/assets/profile.jpg",
    heroImage: "/assets/profile.jpg",
    screenshots: [
      "/assets/profile.jpg",
      "/gallery/photo-page-16.jpeg",
      "/gallery/photo-page-01.jpeg"
    ],
    overview: "An award-winning editorial engineering portfolio platform built for college CA3 evaluation and professional recruitment. Includes dual-project deployment (Vercel & Render), dark brutalist aesthetic, and real backend REST API.",
    challenge: "Orchestrating smooth 60fps animations, interactive certificate modals, contact form validations, and database fallback synchronization without layout shifts.",
    solution: "Crafted modular React 19 components with custom cursor tracking, magnetic buttons, Lenis smooth scroll provider, and Express.js REST API with mock fallback data layers.",
    keyFeatures: [
      "Fluid page transitions and physics-based magnetic interactive elements",
      "Authentic certificate preview modals with one-click official PDF downloads",
      "Real-time contact messaging with database persistence and Telegram/Email webhook alerts",
      "Independent Vercel frontend and Render/Vercel serverless backend architecture"
    ]
  }
];
