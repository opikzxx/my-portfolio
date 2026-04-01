export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface Education {
  title: string;
  subtitle: string;
  period: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  category: string;
  url?: string;
  images: string[];
  techStack: string[];
  description: string;
  github?: string;
  liveDemo?: string;
  stats?: { label: string; value: string }[]
}

export interface Blog {
  title: string;
  category: string;
  date: string;
  desc: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type TabId = "about" | "resume" | "portfolio" | "blog" | "contact";
