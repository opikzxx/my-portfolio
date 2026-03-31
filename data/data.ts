import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, url: "#" },
  { name: "GitHub", icon: FaGithub, url: "#" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Email", icon: MdEmail, url: "mailto:test@gmail.com" },
];

export const tabs = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];
