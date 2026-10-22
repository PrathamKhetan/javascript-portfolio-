import { EducationTimelineItem, SemesterGrade } from '../types';

export const initialEducationTimeline: EducationTimelineItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science & Engineering (AI & ML)",
    institution: "Symbiosis Institute of Technology (SIT), Nagpur",
    period: "2024 — Expected 2028",
    grade: "Major: Artificial Intelligence and Machine Learning",
    status: "Currently Enrolled (Undergraduate Scholar)",
    highlights: [
      "Vice President – Student Placement Representative, coordinating campus placement drives and corporate relations",
      "Lead, Communication and Media Cell, leading event coordination and student-focused initiatives",
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Programming in C, Python, Operating Systems, Machine Learning",
      "McKinsey Forward Program Campus Coordinator, engaging over 270 students"
    ]
  },
  {
    id: "edu-2",
    degree: "Senior Secondary School Certificate (Class XII — Science / PCM)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2022 — 2024",
    grade: "Completed with First Class Distinction",
    status: "Completed",
    highlights: [
      "Rigorous preparation in Physics, Chemistry, and Advanced Mathematics",
      "Active participant in collegiate hackathons, robotics, and algorithmic workshops",
      "Awarded Certificate of Merit for Academic Performance"
    ]
  },
  {
    id: "edu-3",
    degree: "Secondary School Examination (Class X)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2020 — 2022",
    grade: "Completed with Distinction",
    status: "Completed",
    highlights: [
      "Foundation in Mathematics, Computer Basics, and General Sciences",
      "Active participant in extracurricular science exhibitions, debate, and youth leadership forums"
    ]
  }
];

export const initialSemesterGrades: SemesterGrade[] = [
  {
    semester: "Semester 1",
    gpa: 8.90,
    maxGpa: 10.0,
    courses: ["Programming with C", "Engineering Mathematics & Calculus", "Basic Electrical & Electronics", "Engineering Physics"]
  },
  {
    semester: "Semester 2",
    gpa: 9.15,
    maxGpa: 10.0,
    courses: ["Data Structures & Algorithms", "Python Programming", "Discrete Mathematics", "Digital Electronics"]
  },
  {
    semester: "Semester 3",
    gpa: 9.05,
    maxGpa: 10.0,
    courses: ["Database Management Systems (DBMS)", "Operating Systems", "Computer Organization & Architecture", "Probability & Statistics"]
  },
  {
    semester: "Semester 4",
    gpa: 9.20,
    maxGpa: 10.0,
    courses: ["Design & Analysis of Algorithms", "Artificial Intelligence Fundamentals", "Web Technologies & JavaScript Lab", "Software Engineering"]
  }
];
