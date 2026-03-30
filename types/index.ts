export interface Project {
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  responsibilities: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SoftSkill {
  name: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface NavLink {
  label: string;
  href: string;
}
