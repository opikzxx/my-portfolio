import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Code2,
  Palette,
  Server,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Service,
  SocialLink,
  Skill,
  Education,
  Experience,
  Project,
  TabId,
} from "@/types";

export const PROFILE = {
  name: "Taufik Heryunanto",
  role: "Frontend / Fullstack Web Developer",
  avatar: "👨‍💻",
  status: "online",
};

export const ABOUT_DESCRIPTION: string[] = [
  "A graduate of Information Systems from Amikom University Yogyakarta with strong experience in building modern, responsive web applications.",
  "Skilled in React.js, Next.js, Laravel, and fullstack development, with hands-on experience in Agile (Scrum), CI/CD pipelines, and scalable system design. Passionate about delivering high-quality digital products and continuous learning.",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/heryun/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/opikzxx",
  },
];

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive and high-performance web applications using React.js and Next.js.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing scalable backend systems using Laravel, Django, and REST APIs.",
  },
  {
    icon: Globe,
    title: "Fullstack Development",
    desc: "End-to-end web application development from UI to backend and deployment.",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    desc: "Transforming UI/UX designs into clean, maintainable, and pixel-perfect code.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "React.js/Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Agile / Scrum",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const EDUCATION: Education[] = [
  {
    title: "Amikom University Yogyakarta",
    subtitle: "Bachelor's Degree in Information Systems (GPA 3.92)",
    period: "2020 — 2024",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Techbros",
    period: "Dec 2024 — Present",
    duration: "Present",
    location: "Remote",
    bullets: [
      "Worked in R&D division handling full product lifecycle from MVP to production.",
      "Developed responsive web apps using React.js and Next.js.",
      "Built mobile apps using React Native (Expo).",
      "Implemented WebSocket for real-time features.",
      "Applied automated testing and CI/CD pipelines.",
      "Deployed applications on VPS and AWS.",
    ],
  },
  {
    title: "Mentor Study Independent",
    company: "Dicoding Indonesia",
    period: "Feb 2024 — Jun 2024",
    duration: "5 months",
    location: "Remote",
    bullets: [
      "Mentored 25+ students in Frontend React and Backend development.",
      "Led weekly consultations and training sessions.",
      "Helped mentees deliver high-quality final projects.",
    ],
  },
  {
    title: "Fullstack Web Developer Intern",
    company: "PT Edukasi Rekanan Anda",
    period: "Aug 2023 — Dec 2023",
    duration: "5 months",
    location: "Jakarta",
    bullets: [
      "Developed LMS using Next.js and Django.",
      "Improved performance and responsiveness.",
      "Collaborated with UI/UX and product teams.",
    ],
  },
  {
    title: "Frontend Web Developer Intern",
    company: "Dicoding Indonesia",
    period: "Feb 2023 — Jun 2023",
    duration: "5 months",
    location: "Remote",
    bullets: [
      "Built React.js projects with high evaluation.",
      "Integrated APIs and implemented PWA.",
      "Used CI/CD pipelines.",
      "Awarded Best Capstone Project.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Globalmatix",
    category: "Web development",
    url: "#",
    images: ["https://placehold.co/600x400"],
    techStack: ["Next.js", "GeoJSON", "WebSocket"],
    description:
      "Control assignment system with interactive mapping and real-time checkpoint management.",
    stats: [],
  },
  {
    title: "Logisfy",
    category: "Web development",
    url: "#",
    images: ["https://placehold.co/600x400"],
    techStack: ["Web", "Mobile", "Tracking System"],
    description:
      "Logistics management system with real-time tracking and driver monitoring.",
    stats: [],
  },
  {
    title: "Innogem",
    category: "Web development",
    url: "#",
    images: ["https://placehold.co/600x400"],
    techStack: ["Marketplace", "B2B"],
    description:
      "B2B marketplace platform for cross-border trade and logistics.",
    stats: [],
  },
];

export const FILTER_CATEGORIES = ["All", "Web development"];

export const TABS: Array<{ id: TabId; label: string; href: string }> = [
  { id: "about", label: "About", href: "/" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "opikzinside@gmail.com",
    href: "mailto:opikzinside@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+628980676899",
    href: "#",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Sleman, Yogyakarta",
    href: "#",
  },
];
