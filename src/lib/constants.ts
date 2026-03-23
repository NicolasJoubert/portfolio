// src/lib/constants.ts
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/ton-pseudo", icon: FaGithub },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas--joubert/",
    icon: FaLinkedin,
  },
  { name: "X", href: "https://x.com/Nico_Joubert", icon: FaXTwitter },
  { name: "Email", href: "mailto:nicolasjoubert@icloud.com", icon: FaEnvelope },
] as const;

export const PROJECTS = [
  {
    title: "La Casa des Chats",
    description: "Site vitrine pour un client.",
    tech: ["React", "Tailwind 4"],
    link: "https://lacasadeschats.fr/",
    image: "",
  },
];

export const USER_CONFIG = {
  status: {
    isAvailable: true,
    message: "Disponible pour de nouvelles missions",
    unavailableMessage: "En mission actuellement",
  },
} as const;
