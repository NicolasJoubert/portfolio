// src/lib/constants.ts
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

// =======================
// INTERFACES
// =======================

export interface NavLink {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: "techno" | "expertise";
  featured: boolean;
}

// =======================
// CONSTANTES
// =======================

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS: Social[] = [
  { name: "GitHub", href: "https://github.com/ton-pseudo", icon: FaGithub },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas--joubert/",
    icon: FaLinkedin,
  },
  { name: "X", href: "https://x.com/Nico_Joubert", icon: FaXTwitter },
  { name: "Email", href: "mailto:nicolasjoubert@icloud.com", icon: FaEnvelope },
] as const;

export const PROJECTS: Project[] = [
  {
    title: "La Casa des Chats",
    description: "Site vitrine pour un client.",
    tech: ["React", "Tailwind 4"],
    link: "https://lacasadeschats.fr/",
  },
];

export const USER_CONFIG = {
  status: {
    isAvailable: true,
    message: "Disponible pour de nouvelles missions",
    unavailableMessage: "En mission actuellement",
  },
} as const;

export const SKILLS: Skill[] = [
  {
    name: "React",
    category: "techno",
    featured: true,
  },
  {
    name: "Méthode Agile",
    category: "expertise",
    featured: true,
  },
  {
    name: "Gestion de projet",
    category: "expertise",
    featured: true,
  },
  {
    name: "Typescript",
    category: "techno",
    featured: true,
  },
];
