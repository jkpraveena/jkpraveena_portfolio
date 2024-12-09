export interface TechnicalDetail {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  videoUrl?: string;
  highlights: string[];
  techStack: string[];
  technicalDetails: TechnicalDetail[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}