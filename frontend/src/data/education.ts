import { EducationTimelineItem, SemesterGrade } from '../types';

export const initialEducationTimeline: EducationTimelineItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Premier Technical University / Institute of Technology",
    period: "2022 — 2026",
    grade: "Cumulative GPA: 9.2 / 10.0",
    status: "Currently in 4th Year (8th Semester)",
    highlights: [
      "Specialization in Distributed Systems & Cloud Computing",
      "Executive Core Committee Member at Developer Student Club",
      "Key Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Compiler Design, Distributed Systems"
    ]
  },
  {
    id: "edu-2",
    degree: "Senior Secondary Certificate (Class XII — PCM with CS)",
    institution: "Delhi Public School / Model Senior Secondary School",
    period: "2020 — 2022",
    grade: "Aggregated Percentage: 94.6%",
    status: "Completed with Distinction",
    highlights: [
      "Subject Topper in Computer Science (98/100) and Mathematics (95/100)",
      "School Science & Tech Club President; Organized annual inter-school coding Olympiad",
      "Awarded Certificate of Merit for Academic Brilliance"
    ]
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (Class X)",
    institution: "Delhi Public School / Model Senior Secondary School",
    period: "2018 — 2020",
    grade: "Aggregated Percentage: 96.2%",
    status: "Completed with Distinction",
    highlights: [
      "Ranked in top 1% across regional board examinations",
      "Won Regional Inter-School Mathematics & Science Quiz competitions",
      "Active participant in STEM Robotics and debate tournaments"
    ]
  }
];

export const initialSemesterGrades: SemesterGrade[] = [
  {
    semester: "Semester 1",
    gpa: 9.10,
    maxGpa: 10.0,
    courses: ["Programming with C", "Calculus & Linear Algebra", "Engineering Physics", "Basics of Electrical & Electronics"]
  },
  {
    semester: "Semester 2",
    gpa: 9.35,
    maxGpa: 10.0,
    courses: ["Object Oriented Programming (C++)", "Discrete Mathematics", "Data Structures Fundamentals", "Digital Logic Design"]
  },
  {
    semester: "Semester 3",
    gpa: 9.20,
    maxGpa: 10.0,
    courses: ["Advanced Data Structures & Algorithms", "Computer Organization & Architecture", "Python Programming", "Probability & Statistics"]
  },
  {
    semester: "Semester 4",
    gpa: 9.40,
    maxGpa: 10.0,
    courses: ["Database Management Systems (SQL & Relational)", "Operating Systems & Shell Scripting", "Theory of Computation", "Design & Analysis of Algorithms"]
  },
  {
    semester: "Semester 5",
    gpa: 9.25,
    maxGpa: 10.0,
    courses: ["Computer Networks & Protocols", "Web Technologies & Full Stack Dev", "Software Engineering & Agile", "Microprocessors & Interfacing"]
  },
  {
    semester: "Semester 6",
    gpa: 9.30,
    maxGpa: 10.0,
    courses: ["Cloud Computing & Virtualization", "Machine Learning & Neural Nets", "Compiler Design", "Information & Cyber Security"]
  }
];
