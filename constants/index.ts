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
  role: "Software Developer",
  avatar: "👨‍💻",
  status: "online",
};

export const ABOUT_DESCRIPTION: string[] = [
  "A graduate of Information Systems from Amikom University Yogyakarta with strong experience in building modern, responsive web applications.",
  "Skilled in React.js, Next.js, Laravel, and fullstack development, with hands on experience in Agile (Scrum), CI/CD pipelines, and scalable system design. Passionate about delivering high quality digital products and continuous learning.",
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
    desc: "Building responsive and high performance web applications using React.js and Next.js.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing scalable backend systems using Laravel, Nest.js, and REST APIs.",
  },
  {
    icon: Globe,
    title: "Fullstack Development",
    desc: "End to end web application development from UI to backend and deployment.",
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
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
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
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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
    duration: "1+ year",
    location: "Remote",
    bullets: [
      "Worked in R&D division handling full product lifecycle from MVP to production.",
      "Developed responsive web apps using React.js and Next.js.",
      "Built mobile apps using React Native (Expo).",
      "Applied automated testing and CI/CD pipelines.",
      "Deployed applications on VPS.",
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
      "Helped mentees deliver high quality final projects.",
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
      "Used CI/CD pipelines.",
      "Awarded Best Capstone Project.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Info Kesenian",
    category: "Web development",
    images: ["/project/kesenian-1.jpg", "/project/kesenian-2.jpg"],
    techStack: ["Next.js", "Laravel", "Leaflet", "PWA"],
    description:
      "A location based arts discovery platform that showcases nearby cultural events, enhanced with interactive maps for an intuitive exploration experience.",
    url: "https://kesenian.com/",
  },
  {
    title: "Indorich Registration",
    category: "Web development",
    images: ["/project/indorich-1.jpg", "/project/indorich-2.jpg"],
    techStack: ["Next.js", "Golang", "WhatsApp Gateway"],
    description:
      "A smart event registration system where participants receive digital badges used for seamless check in and check out through quick scanning.",
    url: "https://indorichregistration.com/",
  },
  {
    title: "Tracker Driver Test",
    category: "Web development",
    images: ["/project/tracker.jpg"],
    techStack: ["Next.js", "Websocket", "Leaflet", "Golang"],
    description:
      "Control assignment system with interactive mapping and real time checkpoint management.",
  },
  {
    title: "Logisfy",
    category: "Web development & Andorid",
    url: "#",
    images: [
      "/project/logisfy.jpg",
      "/project/logisfy-2.jpg",
      "/project/logisfy-3.jpg",
    ],
    techStack: ["Next.js", "React Native Expo", "Tracking System", "Golang"],
    description:
      "A comprehensive logistics management platform featuring real time tracking, driver monitoring, fleet management, integrated accounting, and investor reporting.",
  },
  {
    title: "Innogem",
    category: "Web development",
    url: "#",
    images: ["./project/innogem-1.jpeg", "./project/innogem-2.jpg"],
    techStack: ["Next.js", "Golang", "E-Commerce"],
    description:
      "B2B marketplace platform for cross-border trade and logistics.",
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
