import { CertificateItem, AchievementItem } from '../types';

export const initialAchievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "1st Place Winner — National Smart India Hackathon",
    organization: "Ministry of Education & AICTE",
    date: "2024",
    description: "Built an offline-first emergency telemedicine triage platform during a 36-hour non-stop nationwide hackathon among 500+ competing teams.",
    rankBadge: "Winner"
  },
  {
    id: "ach-2",
    title: "Dean's Academic Excellence Honor Roll",
    organization: "School of Computer Science & Engineering",
    date: "2023 - 2024",
    description: "Awarded consecutive semester honors for maintaining a cumulative GPA of 9.2/10 and ranking in the top 5% of the engineering cohort.",
    rankBadge: "Top 5%"
  },
  {
    id: "ach-3",
    title: "Finalist — Google Developer Student Club Solution Challenge",
    organization: "Google Developer Groups",
    date: "2024",
    description: "Recognized among regional finalists for developing an accessible carbon-footprint telemetry system addressing UN SDG 13.",
    rankBadge: "Finalist"
  },
  {
    id: "ach-4",
    title: "Knight Rank & Top 8% Global Rating",
    organization: "LeetCode Competitive Programming",
    date: "2024",
    description: "Achieved an 1850+ contest rating with over 350 algorithmic problems solved across graphs, dynamic programming, and data structures.",
    rankBadge: "Knight"
  }
];

export const initialCertificatesData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Specialization",
    issuer: "Meta / Coursera",
    issueDate: "Nov 2024",
    type: "Course",
    credentialId: "META-FED-99827341",
    verifyUrl: "https://www.coursera.org/verify/professional-cert/META-FED-99827341",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["React.js", "Advanced JavaScript", "UI/UX Architecture", "Jest Testing"]
  },
  {
    id: "cert-2",
    title: "Software Engineering Intern Excellence Award",
    issuer: "Acme Tech Solutions",
    issueDate: "Aug 2024",
    type: "Internship",
    credentialId: "ACME-INTERN-2024-041",
    verifyUrl: "https://example.com/verify/ACME-INTERN-2024-041",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["TypeScript", "Node.js Microservices", "CI/CD Pipelines", "Code Review"]
  },
  {
    id: "cert-3",
    title: "Hackathon Winner — HackVyom 2024",
    issuer: "IEEE Computer Society Student Branch",
    issueDate: "Mar 2024",
    type: "Hackathon",
    credentialId: "IEEE-HV-WIN-08",
    verifyUrl: "https://example.com/verify/IEEE-HV-WIN-08",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["Rapid Prototyping", "Full Stack Architecture", "Pitching", "WebSockets"]
  },
  {
    id: "cert-4",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "Jan 2024",
    type: "Course",
    credentialId: "AWS-CCP-7739104",
    verifyUrl: "https://aws.amazon.com/verification",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["Cloud Infrastructure", "EC2", "S3 Security", "IAM Policies"]
  },
  {
    id: "cert-5",
    title: "Full Stack Web Development Research Fellow",
    issuer: "University Innovation & Research Center",
    issueDate: "Jul 2023",
    type: "Internship",
    credentialId: "UIRC-RF-2023-112",
    verifyUrl: "https://example.com/verify/UIRC-RF-2023-112",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["Data Visualization", "REST APIs", "PostgreSQL Optimization", "Git Flow"]
  },
  {
    id: "cert-6",
    title: "Top 3 Podium — CodeSprint Hackathon",
    issuer: "Association for Computing Machinery (ACM)",
    issueDate: "Oct 2023",
    type: "Hackathon",
    credentialId: "ACM-CS-PODIUM-03",
    verifyUrl: "https://example.com/verify/ACM-CS-PODIUM-03",
    pdfUrl: "/dummy-certificate.pdf",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    skillsAcquired: ["Distributed Consensus", "React", "State Management", "Async Programming"]
  }
];
