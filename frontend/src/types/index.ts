export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  availability: string;
  isOpenToWork: boolean;
  avatarUrl: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  aboutStatement: string;
  aboutHighlights: string[];
  introParagraphs: string[];
  quickFacts: { label: string; value: string; icon: string }[];
  stats: {
    projects: number;
    cgpa: number;
    certificates: number;
    hackathons: number;
  };
  marqueeRolesTop: string[];
  marqueeRolesBottom: string[];
  skills: {
    category: string;
    items: { name: string; level: string; icon?: string }[];
  }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  role: string;
  techStack: string[];
  isFeatured: boolean;
  liveUrl: string;
  githubUrl: string;
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  type: 'Course' | 'Internship' | 'Hackathon';
  credentialId: string;
  verifyUrl: string;
  pdfUrl: string;
  image: string;
  skillsAcquired: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  rankBadge: string;
}

export interface EducationTimelineItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  status: string;
  highlights: string[];
}

export interface SemesterGrade {
  semester: string;
  gpa: number;
  maxGpa: number;
  courses: string[];
}

export interface JourneyTimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  category: 'Internship' | 'Club' | 'Volunteering' | 'Event' | 'Leadership';
  description: string;
  achievements: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  aspectRatio: string;
  description: string;
}
