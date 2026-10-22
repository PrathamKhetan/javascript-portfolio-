import { JourneyTimelineItem } from '../types';

export const initialAspirations = {
  interests: [
    {
      title: "Distributed Systems & Cloud Architecture",
      desc: "Designing resilient, horizontally scalable microservices and data pipelines that handle millions of events with fault tolerance."
    },
    {
      title: "Creative Frontend & Interaction Engineering",
      desc: "Blending buttery-smooth motion design with strict web performance, accessibility, and high visual impact."
    },
    {
      title: "Developer Experience & Tooling",
      desc: "Building developer platforms, CLI utilities, and component libraries that multiply engineering productivity."
    }
  ],
  shortTermGoal: "Secure a challenging Software Engineering Internship or full-time role at a high-growth engineering organization where I can contribute to mission-critical backend systems and modern client-facing platforms.",
  longTermGoal: "Grow into a Principal Systems Architect, mentoring engineering teams, open-sourcing foundational infrastructure tools, and steering technical vision for globally impactful products.",
  learningNow: [
    "Rust for Systems Programming & High-Performance Microservices",
    "Go concurrency primitives (goroutines, channels, sync pools)",
    "Distributed consensus protocols (Raft, Paxos)",
    "WebAssembly (WASM) for computational browser acceleration"
  ],
  lookingFor: [
    "Summer/Fall 2025/2026 Software Engineer Internships (Full Stack / Backend / Frontend)",
    "Graduate Software Engineer (New Grad) Full-Time roles starting 2026",
    "Collaborative teams with high code review standards, strong engineering culture, and mentorship"
  ]
};

export const initialJourneyTimeline: JourneyTimelineItem[] = [
  {
    id: "journey-1",
    period: "May 2024 — July 2024",
    role: "Software Engineering Intern",
    organization: "Acme Cloud Technologies",
    category: "Internship",
    description: "Collaborated directly with the Core Infrastructure team to develop internal telemetry dashboards and automated Redis caching layers.",
    achievements: [
      "Engineered an automated query caching middleware reducing average P99 database query latency by 38%",
      "Implemented a real-time cluster health visualizer using React, WebSockets, and Tailwind CSS",
      "Drafted comprehensive OpenAPI documentation adopted by over 20 internal engineers"
    ]
  },
  {
    id: "journey-2",
    period: "Aug 2023 — Present",
    role: "Technical Lead & Co-Organizer",
    organization: "Google Developer Student Clubs (GDSC)",
    category: "Club",
    description: "Spearheaded technical workshops, campus hackathons, and open-source project initiatives for a community of 600+ student developers.",
    achievements: [
      "Mentored 80+ juniors in Git, TypeScript, and modern full-stack web development through weekly hands-on labs",
      "Directed the annual 24-hour campus hackathon, securing sponsorships and coordinating 45 team submissions",
      "Built the official club portal featuring automated registration and certificate verification"
    ]
  },
  {
    id: "journey-3",
    period: "Jan 2023 — Present",
    role: "Competitive Programming Core Member",
    organization: "University ACM Student Chapter",
    category: "Club",
    description: "Active problem solver and contest curator conducting mock algorithmic contests and editorial breakdown sessions.",
    achievements: [
      "Organized bi-weekly algorithmic problem-solving contests for university cohorts",
      "Curated curated problem sets on dynamic programming and graph theory with automated judge test suites",
      "Represented the university in regional collegiate ICPC preliminary rounds"
    ]
  },
  {
    id: "journey-4",
    period: "2023 — 2024",
    role: "Volunteer & Open Source Mentor",
    organization: "National Service Scheme & Tech Outreach",
    category: "Volunteering",
    description: "Conducted basic computer literacy and internet safety awareness programs for local community high school students.",
    achievements: [
      "Taught fundamental computer usage and logical thinking to over 120 underprivileged youth",
      "Assisted in refurbishing and setting up Linux systems in regional school labs",
      "Organized an interactive hour-of-code workshop introducing web basics"
    ]
  },
  {
    id: "journey-5",
    period: "Oct 2023",
    role: "Invited Speaker & Workshop Lead",
    organization: "DevFest Student Summit",
    category: "Event",
    description: "Delivered a 90-minute practical masterclass on 'Mastering Full Stack TypeScript and Serverless Deployments on Vercel'.",
    achievements: [
      "Delivered live-coding walkthrough attended by 200+ engineering students",
      "Shared open-source starter repository cloned by over 150 participants",
      "Received highest attendee satisfaction rating in the web track (4.9/5.0)"
    ]
  }
];
