import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: "Pratham Khetan",
  firstName: "PRATHAM",
  lastName: "KHETAN",
  initials: "PK",
  title: "Cybersecurity Practitioner & AI/ML Engineer",
  tagline: "Specializing in Application Security, Vulnerability Assessment, and Machine Learning Systems.",
  location: "Nagpur, Maharashtra, India",
  timezone: "Asia/Kolkata",
  email: "prathamkhetan1@gmail.com",
  phone: "+91 9023128727",
  availability: "Available for Cybersecurity & AI/ML Internships & Engineering Roles",
  isOpenToWork: true,
  avatarUrl: "/assets/profile.jpg",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/PrathamKhetan",
    linkedin: "https://www.linkedin.com/in/pratham-khetan",
    instagram: "https://instagram.com/pratham_khetan",
    twitter: "https://twitter.com/pratham_khetan",
  },
  aboutStatement: "B.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning) student at Symbiosis Institute of Technology, Nagpur with practical experience in cybersecurity, application security, vulnerability assessment, and software development through a Tata Power cybersecurity internship. Currently serving as Vice President, Student Placement Representative, with experience coordinating placement initiatives, student engagement, corporate sessions, and large-scale campus activities.",
  aboutHighlights: ["cybersecurity & vulnerability assessment", "Tata Power cybersecurity internship", "Symbiosis Institute of Technology", "Student Placement Representative VP"],
  introParagraphs: [
    "I am an undergraduate Computer Science and Engineering scholar specializing in Artificial Intelligence and Machine Learning at Symbiosis Institute of Technology, Nagpur (Graduation Expected 2028).",
    "With practical cybersecurity experience gained as a Cyber Security Intern at The Tata Power Company Limited (CENTEC), I have analyzed enterprise IT/OT application security, OWASP Top 10 vulnerabilities, MITRE ATT&CK vectors, and evaluated enterprise platforms including CrowdStrike, Cisco XDR, FortiRecon, Skyhigh DLP, AWS Security, and Zscaler.",
    "Beyond security research, I actively lead student initiatives as Vice President (Student Placement Representative) and Lead of the Communication and Media Cell, bridging students, recruiters, and corporate partners across large-scale technical drives."
  ],
  quickFacts: [
    { label: "Degree Program", value: "B.Tech CSE (AI & Machine Learning)", icon: "GraduationCap" },
    { label: "Institution", value: "Symbiosis Institute of Tech, Nagpur", icon: "Award" },
    { label: "Industry Experience", value: "Tata Power Cyber Security Intern", icon: "Code" },
    { label: "Campus Leadership", value: "VP - Student Placement Representative", icon: "Compass" }
  ],
  stats: {
    projects: 15,
    cgpa: 9.0,
    certificates: 12,
    hackathons: 6,
  },
  marqueeRolesTop: [
    "CYBERSECURITY PRACTITIONER",
    "APPLICATION SECURITY (APPSEC)",
    "VULNERABILITY ASSESSMENT",
    "AI & MACHINE LEARNING",
    "OWASP TOP 10 & MITRE ATT&CK",
    "STUDENT PLACEMENT VP"
  ],
  marqueeRolesBottom: [
    "PYTHON • C • LINUX",
    "TATA POWER CYBERSECURITY",
    "MCKINSEY FORWARD ALUMNI",
    "GOOGLE AI ESSENTIALS",
    "DATABASE MANAGEMENT • SQL",
    "COMMUNICATION & MEDIA LEAD"
  ],
  skills: [
    {
      category: "Cybersecurity & AppSec",
      items: [
        { name: "Application Security (AppSec)", level: "Advanced" },
        { name: "Vulnerability Assessment", level: "Advanced" },
        { name: "OWASP Top 10", level: "Advanced" },
        { name: "MITRE ATT&CK Framework", level: "Proficient" },
        { name: "Network Security & IT/OT", level: "Proficient" },
        { name: "Threat Modeling", level: "Proficient" },
        { name: "Linux Security & System Admin", level: "Proficient" }
      ]
    },
    {
      category: "Enterprise Security Tools",
      items: [
        { name: "CrowdStrike Falcon", level: "Proficient" },
        { name: "Cisco XDR", level: "Proficient" },
        { name: "FortiRecon", level: "Proficient" },
        { name: "Skyhigh DLP", level: "Proficient" },
        { name: "AWS Cloud Security", level: "Intermediate" },
        { name: "Zscaler", level: "Intermediate" }
      ]
    },
    {
      category: "Programming & Core Engineering",
      items: [
        { name: "Python", level: "Advanced" },
        { name: "C Programming", level: "Advanced" },
        { name: "SQL & Relational Databases", level: "Advanced" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "JavaScript / TypeScript", level: "Proficient" },
        { name: "HTML5 / Modern CSS", level: "Advanced" }
      ]
    },
    {
      category: "AI, ML & Developer Tools",
      items: [
        { name: "Google AI Essentials", level: "Advanced" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Machine Learning Concepts", level: "Proficient" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code & Linux CLI", level: "Advanced" },
        { name: "RESTful API Integration", level: "Proficient" }
      ]
    },
    {
      category: "Leadership & Management",
      items: [
        { name: "Student Placement Coordination", level: "Advanced" },
        { name: "Corporate & Recruiter Relations", level: "Advanced" },
        { name: "Communication & Media Cell", level: "Advanced" },
        { name: "Public Speaking & Workshops", level: "Advanced" },
        { name: "Team Leadership & Volunteering", level: "Expert" }
      ]
    }
  ]
};
