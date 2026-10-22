import { ProjectItem } from '../types';

export const initialProjectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "nexus-cloud-orchestrator",
    number: "01",
    title: "Nexus Cloud Orchestrator",
    category: "Cloud Infrastructure & Distributed Systems",
    year: "2024",
    summary: "A distributed container monitoring and auto-scaling telemetry control plane with real-time WebSocket metrics and predictive load heuristics.",
    role: "Lead Full Stack & Systems Engineer",
    techStack: ["TypeScript", "React 19", "Node.js", "Docker", "Redis", "Tailwind CSS", "Chart.js"],
    isFeatured: true,
    liveUrl: "https://example.com/demo/nexus",
    githubUrl: "https://github.com/your-username/nexus-cloud-orchestrator",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Nexus is an enterprise-grade telemetry dashboard and container scaling daemon built for modern microservice clusters. It ingests node metrics, analyzes resource starvation patterns, and triggers dynamic container scaling policies with sub-second feedback latency.",
    challenge: "Handling concurrent streams of heartbeats and node telemetry without degrading UI render frames, while maintaining an immutable audit log across cluster worker nodes.",
    solution: "Architected a dual-buffer WebSocket client in React combined with an in-memory Redis ring buffer on the backend. Implemented virtualized data tables and offscreen canvas charts for 60fps telemetry visualizers.",
    keyFeatures: [
      "Real-time bidirectional WebSocket metric streaming with automatic reconnection",
      "Intelligent heuristic scaling recommendations based on sliding window CPU/RAM utilization",
      "Zero-trust RBAC cluster authentication with fine-grained API scopes",
      "Automated alert dispatch to Slack webhooks and email notification brokers",
      "Exportable JSON & Prometheus compatible metric scrapes"
    ]
  },
  {
    id: "proj-2",
    slug: "aura-ai-copilot",
    number: "02",
    title: "Aura Neural Code Copilot",
    category: "Applied Artificial Intelligence & Developer Tooling",
    year: "2024",
    summary: "Context-aware developer workspace and intelligent code audit assistant powered by large language models with automated AST parsing.",
    role: "Full Stack AI Engineer",
    techStack: ["Next.js 15", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "Prisma"],
    isFeatured: true,
    liveUrl: "https://example.com/demo/aura",
    githubUrl: "https://github.com/your-username/aura-ai-copilot",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Aura is an interactive developer workbench that parses repository abstract syntax trees (AST) to generate context-grounded refactoring suggestions, security vulnerability audits, and documentation generators.",
    challenge: "Minimizing token overhead while passing multi-file repository context to LLM APIs, and providing instant token streaming to the web client.",
    solution: "Designed a vector chunking pipeline utilizing tree-sitter AST nodes to extract only relevant function signatures and dependencies, combined with server-sent events (SSE) for fluid token-by-token rendering.",
    keyFeatures: [
      "Semantic codebase search across thousands of files using vector embeddings",
      "Instant security scanner highlighting SQL injection and prototype pollution vulnerabilities",
      "One-click pull request code summary generator with conventional commit formatting",
      "Interactive code diff visualizer with side-by-side accept/reject toggles",
      "Full dark & light editorial interface customized for long developer sessions"
    ]
  },
  {
    id: "proj-3",
    slug: "velox-fintech-ledger",
    number: "03",
    title: "Velox High-Throughput Ledger",
    category: "Financial Technology & Transaction Engines",
    year: "2023",
    summary: "Double-entry bookkeeping engine with cryptographic audit trails, handling simulated high-concurrency micro-settlements with ACID guarantees.",
    role: "Backend Architect & Database Designer",
    techStack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker", "Jest", "Tailwind CSS"],
    isFeatured: true,
    liveUrl: "https://example.com/demo/velox",
    githubUrl: "https://github.com/your-username/velox-fintech-ledger",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Velox is a hardened transactional banking engine implementing pure double-entry ledger bookkeeping. Every financial event is immutable, cryptographically chained, and reconciled with zero precision loss.",
    challenge: "Preventing race conditions and balance overdrafts during concurrent write surges under benchmark stress testing.",
    solution: "Engineered pessimistic row-level locking on account balances coupled with serialized transaction isolation levels, backed by deterministic SHA-256 hash chaining of audit receipts.",
    keyFeatures: [
      "Strict double-entry bookkeeping guarantees (Assets = Liabilities + Equity)",
      "Cryptographic merkle-tree verification for transaction batch integrity",
      "Comprehensive REST API with idempotency key deduplication headers",
      "Live administrative dashboard with real-time settlement telemetry and liquidity ratios",
      "Extensive test coverage exceeding 92% across all balance mutation paths"
    ]
  },
  {
    id: "proj-4",
    slug: "stride-campus-mobility",
    number: "04",
    title: "Stride Campus Mobility",
    category: "Full Stack Web & IoT Platform",
    year: "2023",
    summary: "Campus-wide smart bicycle sharing and route optimization portal servicing 4,000+ university students with real-time GPS fleet tracking.",
    role: "Full Stack Lead Developer",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Mapbox GL"],
    isFeatured: false,
    liveUrl: "https://example.com/demo/stride",
    githubUrl: "https://github.com/your-username/stride-campus-mobility",
    thumbnail: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Built to eliminate campus congestion between academic blocks and dormitories, Stride provides real-time dock availability, instant QR lock release, and safety telemetry.",
    challenge: "Handling intermittent mobile connectivity on university fringes while maintaining accurate dock reservation timers.",
    solution: "Implemented offline-first Progressive Web App (PWA) caching with IndexedDB transaction synchronization and GPS dead-reckoning fallbacks.",
    keyFeatures: [
      "Dynamic interactive campus vector map with live dock availability markers",
      "Camera-based QR code scanner for 2-second bicycle checkout",
      "Student ID SSO authentication integrated with university credentials",
      "Fleet maintenance reporting portal with automated technician dispatch"
    ]
  },
  {
    id: "proj-5",
    slug: "prism-design-system",
    number: "05",
    title: "Prism Accessible Design System",
    category: "Design Engineering & Component Architecture",
    year: "2023",
    summary: "An accessible, token-driven component library and documentation system compliant with WCAG 2.1 AAA specifications.",
    role: "UI/UX Engineer & Open Source Author",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "npm"],
    isFeatured: false,
    liveUrl: "https://example.com/demo/prism",
    githubUrl: "https://github.com/your-username/prism-design-system",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Prism is an open-source collection of 40+ modular, highly accessible React primitives designed for high-density enterprise dashboards.",
    challenge: "Ensuring flawless keyboard navigation, screen reader announcements, and dynamic color contrast across light, dark, and high-contrast modes.",
    solution: "Built on headless primitives with strict ARIA attribute scaffolding, automated axe-core accessibility unit tests, and semantic CSS variable tokens.",
    keyFeatures: [
      "100% keyboard navigable with visible focus ring heuristics",
      "Automated automated axe-core accessibility linting in CI/CD pipeline",
      "Comprehensive interactive Storybook playground with live token inspect",
      "Zero runtime CSS-in-JS overhead via Tailwind utilities"
    ]
  }
];
