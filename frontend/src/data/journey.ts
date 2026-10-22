import { JourneyTimelineItem } from '../types';

export const initialAspirations = {
  interests: [
    {
      title: "Application Security & Vulnerability Assessment",
      desc: "Probing and fortifying enterprise web applications, APIs, and cloud services against OWASP Top 10 exploits, injection vectors, and zero-day vulnerabilities."
    },
    {
      title: "Applied AI & Machine Learning in Cybersecurity",
      desc: "Leveraging intelligent threat detection models, prompt engineering, and automated security scans to neutralize threats with sub-second response times."
    },
    {
      title: "Student Leadership & Institutional Growth",
      desc: "Bridging the gap between corporate recruiters and aspiring engineers as Vice President of Placement and Lead of the Communication and Media Cell."
    }
  ],
  shortTermGoal: "Secure an impactful Cybersecurity or AI/ML Engineering Internship where I can apply enterprise AppSec, threat hunting, and secure coding practices to protect critical infrastructure.",
  longTermGoal: "Evolve into a Chief Information Security Officer (CISO) and Security Architect, pioneering resilient defensive architectures and empowering the next generation of technologists.",
  learningNow: [
    "Advanced Penetration Testing & Burp Suite Professional workflows",
    "Cloud Security Architecture on AWS & Azure (IAM, VPC, CloudTrail)",
    "MITRE ATT&CK enterprise adversary mapping",
    "Automated CI/CD DevSecOps pipelines with SAST/DAST tooling"
  ],
  lookingFor: [
    "Cybersecurity / Information Security Internships & Research Fellowships",
    "AI / Machine Learning Engineering Roles",
    "High-impact technical environments that value proactive defense, continuous learning, and team leadership"
  ]
};

export const initialJourneyTimeline: JourneyTimelineItem[] = [
  {
    id: "journey-1",
    period: "May 2026 — June 2026",
    role: "Cyber Security Intern",
    organization: "The Tata Power Company Limited (CENTEC)",
    category: "Internship",
    description: "Hands-on cybersecurity internship at Tata Power's Centre for Technology Excellence (CENTEC), working across enterprise IT and OT environments.",
    achievements: [
      "Gained hands-on exposure to Application Security and Vulnerability Management across critical enterprise infrastructure.",
      "Studied OWASP Top 10, Web Application Security, MITRE ATT&CK framework, secure development practices, and vulnerability analysis.",
      "Explored enterprise security platforms including CrowdStrike Falcon, Cisco XDR, FortiRecon, Skyhigh DLP, AWS Security, and Zscaler.",
      "Studied AI applications in modern cybersecurity and collaborated with senior security architects."
    ]
  },
  {
    id: "journey-2",
    period: "2025 — Present",
    role: "Student Placement Representative – Vice President",
    organization: "Symbiosis Institute of Technology, Nagpur",
    category: "Leadership",
    description: "Elected Vice President coordinating strategic recruitment initiatives, campus drives, and corporate workshops for engineering students.",
    achievements: [
      "Coordinate placement drives, corporate technical sessions, industry workshops, and professional certification bootcamps.",
      "Bridge strategic communication between students, company recruiters, placement coordinators, and Class Placement Representatives.",
      "Spearheaded onboarding and resume verification initiatives for hundreds of prospective graduates."
    ]
  },
  {
    id: "journey-3",
    period: "2025 — Present",
    role: "Lead — Communication and Media Cell",
    organization: "Symbiosis Institute of Technology, Nagpur",
    category: "Leadership",
    description: "Leading the central Communication and Media Cell in planning, coordinating, and executing student-focused events and institutional outreach.",
    achievements: [
      "Led the Communication and Media Cell in planning, coordinating, and executing student-focused events and initiatives.",
      "Successfully conducted high-visibility events impacting 100+ students through effective planning, execution, and student engagement.",
      "Supervised media creation, press releases, and technical documentation across university channels."
    ]
  },
  {
    id: "journey-4",
    period: "2025 & 2026",
    role: "VIP Protocol & International Liaison Volunteer",
    organization: "Advantage Vidarbha Industrial Summit & AID",
    category: "Volunteering",
    description: "Selected as official protocol liaison for foreign diplomats, trade delegates, and state dignitaries at Central India's flagship mega industrial expo.",
    achievements: [
      "Hosted and accompanied international trade delegations from Africa, Latin America, and Asia across expo forums and B2B conclaves.",
      "Liaised with high-level dignitaries, government ministers, and corporate leaders at summit venues.",
      "Awarded Certificate of Recognition from the Association for Industrial Development (AID) for exemplary service."
    ]
  },
  {
    id: "journey-5",
    period: "2026",
    role: "Campus Coordinator & Alumni",
    organization: "McKinsey.org Forward Program",
    category: "Leadership",
    description: "Alumni of the prestigious McKinsey Forward online learning program and campus coordinator championing student skill acceleration.",
    achievements: [
      "Successfully coordinated the McKinsey Forward Program registration initiative for second-year students, engaging more than 270 students.",
      "Completed rigorous digital curricula covering structured problem solving, digital fluency, and agile leadership.",
      "Received the official McKinsey.org Forward credential."
    ]
  },
  {
    id: "journey-6",
    period: "2025 — 2026",
    role: "Volunteer — ICSIT Conference & Entusia 5.0",
    organization: "Symbiosis International University",
    category: "Volunteering",
    description: "Active volunteer supporting international academic conferences and university cultural symposia.",
    achievements: [
      "Served on the Hospitality and Logistics Team for the International Conference on Smart Information Technology (ICSIT).",
      "Assisted in stage management, guest facilitation, and crowd coordination for Entusia 5.0 annual festival."
    ]
  }
];
