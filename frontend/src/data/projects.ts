import { ProjectItem } from '../types';

export const initialProjectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "auditai-expense-auditing-fraud-detection",
    number: "01",
    title: "AuditAI – AI-Powered Expense Auditing & Fraud Detection Platform",
    category: "AI & Financial Security Engineering",
    year: "2026",
    summary: "A smart expense auditing platform that identifies suspicious claims, duplicate submissions, after-hours filings, and budget anomalies using a five-layer rule-based risk scoring engine.",
    role: "Full-Stack Developer",
    techStack: ["Node.js", "Express", "JavaScript", "Chart.js", "REST APIs", "Fraud Detection Heuristics"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan",
    githubUrl: "https://github.com/PrathamKhetan",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Developed a smart expense auditing platform to identify suspicious claims, duplicate submissions, after-hours filings, and budget anomalies. Built a five-layer rule-based risk scoring engine that evaluates expenses and assigns dynamic risk scores with transparent policy explanations, alongside an interactive auditor dashboard for expense review and approval workflows.",
    challenge: "Designing a risk engine that minimizes false positives while accurately flagging genuine anomalies across diverse expense categories, submission times, and transaction patterns.",
    solution: "Implemented fraud detection heuristics covering duplicate claims, transaction thresholds, temporal anomalies, category outliers, and round-number expenses. Built an interactive Chart.js dashboard for real-time risk visualization and auditor decision workflows.",
    keyFeatures: [
      "Five-layer rule-based risk scoring engine with dynamic risk score assignment",
      "Fraud detection covering duplicate claims, temporal anomalies, and category outliers",
      "Interactive auditor dashboard with expense review, risk visualization, and approval workflows",
      "Transparent policy explanation system for every flagged expense",
      "Round-number detection and after-hours filing anomaly identification"
    ]
  },
  {
    id: "proj-2",
    slug: "cyber-ndr-network-detection-response",
    number: "02",
    title: "CYBER-NDR – Dual-Engine Network Detection & Response Platform",
    category: "Cybersecurity & AI/ML Engineering",
    year: "2026",
    summary: "A network detection and response platform combining Tabular Deep Neural Networks (DNN) and GraphSAGE Graph Neural Networks (GNN) for real-time threat monitoring and attack simulation.",
    role: "AI/ML Security Engineer",
    techStack: ["Deep Learning", "DNN", "GraphSAGE", "GNN", "Python", "Network Security"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan",
    githubUrl: "https://github.com/PrathamKhetan",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "/gallery/photo-page-16.jpeg",
      "/gallery/photo-page-24.jpeg"
    ],
    overview: "Developed a network detection and response platform combining Tabular Deep Neural Networks (DNN) and GraphSAGE Graph Neural Networks (GNN) for detecting sophisticated network threats. Designed a dashboard-oriented interface for real-time network threat monitoring, attack simulation, and security event visualization.",
    challenge: "Integrating two distinct neural network architectures — tabular DNN for feature-based detection and GraphSAGE GNN for topology-aware threat propagation — into a unified, real-time detection pipeline.",
    solution: "Architected a dual-engine inference system where DNN handles individual packet-level classification while GraphSAGE models inter-host relationship graphs, with results fused into a unified threat confidence score displayed on a live dashboard.",
    keyFeatures: [
      "Dual-engine AI: Tabular DNN and GraphSAGE GNN working in tandem",
      "Real-time network threat monitoring and security event visualization",
      "Attack simulation module for red-team and blue-team exercises",
      "Graph-based topology analysis for lateral movement detection",
      "Dashboard-oriented interface for SOC analysts"
    ]
  },
  {
    id: "proj-3",
    slug: "automated-api-documentation-assistant",
    number: "03",
    title: "Automated API Documentation Assistant",
    category: "Agentic AI & Developer Tooling",
    year: "2026",
    summary: "An agentic AI-based application for automated API documentation generation using LangGraph, MCP Protocol, OpenAPI 3.1, and n8n workflow integration.",
    role: "AI Engineer",
    techStack: ["Agentic AI", "LangGraph", "SQLite", "MCP Protocol", "OpenAPI 3.1", "n8n"],
    isFeatured: true,
    liveUrl: "https://github.com/PrathamKhetan",
    githubUrl: "https://github.com/PrathamKhetan",
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Developed an agentic AI-based application for automated API documentation generation. The system uses LangGraph for orchestrating multi-step AI workflows, MCP Protocol for tool integration, OpenAPI 3.1 for standardized schema generation, SQLite for persistent memory, and n8n for workflow automation.",
    challenge: "Building a reliable agentic pipeline that accurately introspects arbitrary APIs, generates standards-compliant OpenAPI 3.1 documentation, and maintains context across multi-step reasoning chains.",
    solution: "Leveraged LangGraph's stateful graph-based agent orchestration with SQLite-backed memory persistence, integrated MCP protocol for tool use, and wired n8n workflows for automated documentation publishing and change notifications.",
    keyFeatures: [
      "LangGraph-powered agentic orchestration for multi-step documentation workflows",
      "Automated OpenAPI 3.1 schema generation from live API introspection",
      "MCP Protocol integration for seamless tool use and context management",
      "SQLite-backed persistent agent memory across sessions",
      "n8n workflow integration for automated publishing and notifications"
    ]
  },
  {
    id: "proj-4",
    slug: "ai-assisted-url-vulnerability-scanner",
    number: "04",
    title: "AI-Assisted URL Vulnerability Scanner",
    category: "Cybersecurity & Web Application Security",
    year: "2026",
    summary: "A URL-based vulnerability scanner and forensic report generator focused on OWASP Top 10 web security, automated threat detection, and header analysis.",
    role: "Lead Cybersecurity Developer",
    techStack: ["Python", "OWASP Top 10", "Requests", "BeautifulSoup", "Regular Expressions", "Security Auditing"],
    isFeatured: false,
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
    id: "proj-5",
    slug: "univsafenet-student-database-management-system",
    number: "05",
    title: "UnivSafeNet – Student Database Management System",
    category: "Secure Systems & Database Engineering",
    year: "2025",
    summary: "A secure database management application engineered for storing, updating, and retrieving university student records with parameterized queries and access control.",
    role: "Database & Backend Developer",
    techStack: ["Python", "SQL", "Relational DBMS", "Role-Based Access Control", "Data Integrity"],
    isFeatured: false,
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
    id: "proj-6",
    slug: "production-fullstack-portfolio-platform",
    number: "06",
    title: "Award-Winning Editorial Portfolio Platform",
    category: "Full-Stack Web Engineering & UI/UX Design",
    year: "2026",
    summary: "A production-grade, twin-architecture portfolio web app featuring React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis smooth scrolling, and Express/PostgreSQL backend.",
    role: "Full-Stack Architect",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Node.js", "Express", "PostgreSQL"],
    isFeatured: false,
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
