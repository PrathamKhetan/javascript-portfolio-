import { CertificateItem, AchievementItem } from '../types';

export const initialAchievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Vice President — Student Placement Representative",
    organization: "Symbiosis Institute of Technology, Nagpur",
    date: "Current",
    description: "Elected to lead and coordinate campus placement drives, corporate recruitment sessions, workshops, and bridge communication between students, faculty, and company recruiters.",
    rankBadge: "Vice President"
  },
  {
    id: "ach-2",
    title: "Lead — Communication and Media Cell",
    organization: "Symbiosis Institute of Technology, Nagpur",
    date: "Current",
    description: "Leading the Communication and Media Cell in orchestrating high-visibility collegiate initiatives and symposiums impacting 100+ engineering students with structured media coverage.",
    rankBadge: "Lead"
  },
  {
    id: "ach-3",
    title: "McKinsey Forward Program Campus Coordinator",
    organization: "McKinsey.org",
    date: "2026",
    description: "Spearheaded the McKinsey Forward registration initiative for second-year students, mobilizing and coordinating onboarding for over 270 engineering students.",
    rankBadge: "Alumni & Lead"
  },
  {
    id: "ach-4",
    title: "VIP Protocol & International Liaison Host",
    organization: "Advantage Vidarbha Industrial Summit & AID",
    date: "2025 & 2026",
    description: "Selected as official protocol liaison hosting international trade delegations, foreign ambassadors, and state dignitaries at Central India's premier industrial and investment expo.",
    rankBadge: "VIP Liaison"
  }
];

export const initialCertificatesData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Cyber Security Internship Certificate",
    issuer: "The Tata Power Company Limited",
    issueDate: "June 2026",
    type: "Internship",
    credentialId: "TATA-CYBERSEC-CENTEC-2026",
    verifyUrl: "https://www.tatapower.com",
    pdfUrl: "/certificates/tata-power-cybersecurity.pdf",
    image: "/certificates/tata-power-cybersecurity.jpg",
    skillsAcquired: ["Application Security", "Vulnerability Management", "OWASP Top 10", "CrowdStrike & Cisco XDR", "MITRE ATT&CK"]
  },
  {
    id: "cert-2",
    title: "Google AI Essentials Specialization (5 Courses)",
    issuer: "Google / Coursera",
    issueDate: "July 2026",
    type: "Course",
    credentialId: "1ZRJPN34D8RH",
    verifyUrl: "https://coursera.org/verify/specialization/1ZRJPN34D8RH",
    pdfUrl: "/certificates/google-ai-essentials.pdf",
    image: "/certificates/google-ai-essentials.jpg",
    skillsAcquired: ["Prompt Engineering", "Maximize AI Productivity", "Responsible AI", "Creative Partnering", "Data Analysis"]
  },
  {
    id: "cert-3",
    title: "McKinsey Forward Program",
    issuer: "McKinsey.org",
    issueDate: "June 2026",
    type: "Course",
    credentialId: "MCK-FWD-20260902-742slk",
    verifyUrl: "https://www.mckinsey.com/forward",
    pdfUrl: "/certificates/mckinsey-forward.pdf",
    image: "/certificates/mckinsey-forward.jpg",
    skillsAcquired: ["Leadership Foundations", "Structured Problem Solving", "Digital Fluency", "Adaptability & Resilience"]
  },
  {
    id: "cert-4",
    title: "Data Structures and Algorithms Using Python (Part 1)",
    issuer: "Infosys Springboard",
    issueDate: "October 2025",
    type: "Course",
    credentialId: "INFOSYS-DSA-PY-01",
    verifyUrl: "https://infyspringboard.onwingspan.com",
    pdfUrl: "/certificates/infosys-dsa-python.pdf",
    image: "/certificates/infosys-dsa-python.jpg",
    skillsAcquired: ["Data Structures in Python", "Complexity Analysis", "Algorithm Optimization", "Searching & Sorting"]
  },
  {
    id: "cert-5",
    title: "Association for Industrial Development (AID) Recognition",
    issuer: "Association for Industrial Development (AID)",
    issueDate: "February 2026",
    type: "Hackathon",
    credentialId: "AID-ADV-VIDARBHA-VOL-2026",
    verifyUrl: "https://aidnagpur.in",
    pdfUrl: "/certificates/sit-nagpur-js-lab.pdf",
    image: "/gallery/photo-page-12.jpeg",
    skillsAcquired: ["International Protocol", "Diplomatic Relations", "Industrial Expo Management", "Stakeholder Engagement"]
  },
  {
    id: "cert-6",
    title: "NASSCOM SOAR AI to Aspire",
    issuer: "NASSCOM & NCVET (Govt. of India)",
    issueDate: "2026",
    type: "Course",
    credentialId: "202606136-NASSCOM-AI",
    verifyUrl: "https://www.nasscom.in",
    pdfUrl: "/certificates/nasscom-soar-ai-aspire.pdf",
    image: "/certificates/nasscom-soar-ai-aspire.jpg",
    skillsAcquired: ["Skill Competency (NCVET)", "Artificial Intelligence", "Digital Problem Solving", "Industry AI Standards"]
  },
  {
    id: "cert-7",
    title: "Microsoft SOAR – AI to Acquire",
    issuer: "Microsoft & NCVET",
    issueDate: "June 2026",
    type: "Course",
    credentialId: "MS-SOAR-ACQUIRE-51C04",
    verifyUrl: "https://www.microsoft.com",
    pdfUrl: "/certificates/microsoft-soar-ai-acquire.pdf",
    image: "/certificates/microsoft-soar-ai-acquire.jpg",
    skillsAcquired: ["Microsoft AI Competency", "Machine Learning Fundamentals", "Cloud AI Concepts", "Applied Intelligence"]
  },
  {
    id: "cert-8",
    title: "Microsoft SOAR – AI for Educators",
    issuer: "Microsoft & NCVET",
    issueDate: "June 2026",
    type: "Course",
    credentialId: "MS-SOAR-EDU-32A4D",
    verifyUrl: "https://www.microsoft.com",
    pdfUrl: "/certificates/microsoft-soar-ai-educators.pdf",
    image: "/certificates/microsoft-soar-ai-educators.jpg",
    skillsAcquired: ["Pedagogical AI Integration", "EdTech Innovation", "Ethical AI Mentorship", "Interactive Tooling"]
  },
  {
    id: "cert-9",
    title: "NIELIT Yuva AI for All",
    issuer: "National Institute of Electronics & Information Technology (NIELIT)",
    issueDate: "2026",
    type: "Course",
    credentialId: "NIELIT-YUVA-AI-4DC12",
    verifyUrl: "https://www.nielit.gov.in",
    pdfUrl: "/certificates/nielit-yuva-ai-for-all.pdf",
    image: "/certificates/nielit-yuva-ai-for-all.jpg",
    skillsAcquired: ["Govt. of India Skill Standard", "AI for Society", "Computational Thinking", "Emerging Tech"]
  },
  {
    id: "cert-10",
    title: "ServiceNow Virtual Internship Program",
    issuer: "ServiceNow & AICTE",
    issueDate: "2025",
    type: "Internship",
    credentialId: "SERVICENOW-VIP-PK-2025",
    verifyUrl: "https://www.servicenow.com",
    pdfUrl: "/certificates/servicenow-internship.pdf",
    image: "/certificates/servicenow-internship.jpg",
    skillsAcquired: ["ServiceNow Platform", "IT Service Management", "Enterprise Workflow Automation", "Cloud Operations"]
  },
  {
    id: "cert-11",
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat Academy",
    issueDate: "2025",
    type: "Course",
    credentialId: "RH124-SYSADMIN-SIT",
    verifyUrl: "https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i",
    pdfUrl: "/certificates/sit-nagpur-js-lab.pdf",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["Linux Shell Navigation", "User & Group Security", "File System Permissions", "Systemd Process Control"]
  },
  {
    id: "cert-12",
    title: "Symbiosis Institute of Technology Practical Laboratory Record",
    issuer: "Department of Computer Science & Engineering, SIT Nagpur",
    issueDate: "2026",
    type: "Course",
    credentialId: "SIT-CSE-PRACTICAL-2026",
    verifyUrl: "https://sitnagpur.edu.in",
    pdfUrl: "/certificates/sit-nagpur-js-lab.pdf",
    image: "/certificates/sit-nagpur-js-lab.jpg",
    skillsAcquired: ["Full-Stack Engineering", "JavaScript Programming", "Algorithm Implementation", "Lab Rigor"]
  }
];
