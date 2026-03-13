// src/lib/constants.ts
import { Mail, Linkedin } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/ton-pseudo", icon: SiGithub },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas--joubert/",
    icon: Linkedin,
  },
  { name: "X", href: "https://x.com/Nico_Joubert", icon: SiX },
  { name: "Email", href: "mailto:nicolasjoubert@icloud.com", icon: Mail },
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
