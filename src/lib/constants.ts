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
  tech: Techno[];
  link: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: "techno" | "expertise";
  featured: boolean;
}

export interface Techno {
  name: string;
  category: "techno" | "expertise";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: "startup" | "agency" | "corporate" | "freelance" | "project";
  description: string;
  achievements: string[];
  technos: Techno[];
  logo?: string;
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
    tech: [
      { name: "React", category: "techno" },
      { name: "Tailwind 4", category: "techno" },
    ],
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

// src/constants/EXPERIENCES.ts

export const EXPERIENCES: Experience[] = [
  {
    id: "lacasa",
    company: "La Casa des Chats",
    role: "Chef de Projet & Développeur Full Stack",
    period: "Avril – Mai 2025",
    type: "freelance",
    description: "Architecture et développement d'un site vitrine moderne",
    achievements: [
      "Architecture complète avec React 19 et TypeScript",
      "Intégration CMS (Contentful) et automatisation n8n",
      "Optimisation SEO et Core Web Vitals",
    ],
    technos: [
      { name: "React 19", category: "techno" },
      { name: "TypeScript", category: "techno" },
      { name: "n8n", category: "techno" },
      { name: "SEO", category: "expertise" },
    ],
  },
  {
    id: "grimoire",
    company: "Grimoire (MVP)",
    role: "Développeur Full Stack",
    period: "Décembre 2024",
    type: "project",
    description: "Création d'une application de prise de notes web et mobile",
    achievements: [
      `Conception de l'UI/UX (wireframes et maquettes) après tests utilisateurs`,
      "Développement Full Stack avec React et Node.js",
      "Gestion de la persistance des données via MongoDB",
    ],
    technos: [
      { name: "React", category: "techno" },
      { name: "Node.js", category: "techno" },
      { name: "MongoDB", category: "techno" },
    ],
  },
  {
    id: "ofestival",
    company: "O'Festival (MVP)",
    role: "Scrum Master & Développeur Full Stack",
    period: "Juin 2024",
    type: "project",
    description:
      "Application de réservation de billets pour festivals en mode agile.",
    achievements: [
      "Pilotage d’une équipe de 5 personnes en sprints agiles",
      "Développement du système de billetterie sous Symfony",
      "Conception de la base de données relationnelle et authentification",
    ],
    technos: [
      { name: "Symfony", category: "techno" },
      { name: "PHP", category: "techno" },
      { name: "SQL", category: "techno" },
      { name: "Agile", category: "expertise" },
    ],
  },
  {
    id: "bnp-labo",
    company: "BNP Personal Finance",
    role: "Conseiller Projet Labo",
    period: "2017 – 2024",
    type: "corporate",
    description: "Pilotage de projets transverses à l'échelle nationale",
    achievements: [
      "Gestion de projets du POC au déploiement national",
      "Optimisation de process et parcours clients complexes",
      "Formation et accompagnement au changement",
    ],
    technos: [
      { name: "Gestion de projet", category: "expertise" },
      { name: "Process", category: "expertise" },
      { name: "Agile", category: "expertise" },
    ],
  },
  {
    id: "bnp-client",
    company: "BNP Personal Finance",
    role: "Conseiller Clientèle & Recouvrement",
    period: "2007 – 2017",
    type: "corporate",
    description:
      "Expertise en relation client et gestion des risques financiers.",
    achievements: [
      "Gestion de portefeuille et négociation de solutions de financement",
      "Maîtrise et gestion des risques d’impayés",
    ],
    technos: [
      { name: "Relation Client", category: "expertise" },
      { name: "Négociation", category: "expertise" },
      { name: "Analyse de Risque", category: "expertise" },
    ],
  },
];
