// src/lib/constants.ts
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import casaImg from "@/assets/laCasaDesChats.webp";
import grimoireImg from "@/assets/grimoire.webp";
import ofestivalImg from "@/assets/ofestival.webp";
import togglGoogleImg from "@/assets/togglGoogle.webp";

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
  website?: string;
  github?: string;
  image?: string;
  imagePosition?: string;
}

export interface Skill {
  name: string;
  category: "techno" | "expertise";
  featured: boolean;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
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
  github?: string;
  logo?: string;
}

// =======================
// CONSTANTES
// =======================

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#home" },
  { label: "Projets", href: "#projects" },
  { label: "Expériences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS: Social[] = [
  { name: "GitHub", href: "https://github.com/NicolasJoubert", icon: FaGithub },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas--joubert/",
    icon: FaLinkedin,
  },
  { name: "X", href: "https://x.com/Nico_Joubert", icon: FaXTwitter },
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Toggl to Google Calendar",
    description: `Synchronisation automatique Toggl Track → Google Calendar. \nFini la double saisie : vos time entries deviennent des événements.`,
    tech: [
      { name: "Google Apps Script", category: "techno" },
      { name: "Toggl API", category: "techno" },
      { name: "Automation", category: "techno" },
    ],
    image: togglGoogleImg,
    imagePosition: "center 30%",
    github: "https://github.com/NicolasJoubert/Toggl-to-GoogleCalendar",
  },
  {
    title: "La Casa des Chats",
    description:
      "Site vitrine responsif pour un artisan créateur d'arbres à chat sur-mesure. Identité visuelle chaleureuse, intégration CMS Contentful pour la gestion du contenu et automatisation n8n pour les notifications.",
    tech: [
      { name: "React", category: "techno" },
      { name: "React Router", category: "techno" },
      { name: "TypeScript", category: "techno" },
      { name: "Tailwind 4", category: "techno" },
      { name: "Contentful", category: "techno" },
      { name: "n8n", category: "techno" },
      { name: "SEO", category: "expertise" },
      { name: "Chef de Projet", category: "expertise" },
    ],
    image: casaImg,
    imagePosition: "center 30%",
    website: "https://lacasadeschats.fr/",
    github: "https://github.com/NicolasJoubert/catTree-project",
  },
  {
    title: `Grimoire - Second Cerveau`,
    description: `Application de prise de notes pour développeurs permettant l'exécution de code en temps réel via l'API Jdoodle. Développée en 9 jours au sein d'une équipe de 5, l'app intègre un système de graph-linking, de tagging libre et un calendrier de suivi d'activité.`,
    tech: [
      { name: "React", category: "techno" },
      { name: "Node.js", category: "techno" },
      { name: "MongoDB", category: "techno" },
      { name: "Tailwind CSS", category: "techno" },
      { name: "Jdoodle API", category: "techno" },
    ],
    image: grimoireImg,
    website: "https://mongrimoire.dev",
    github: "https://github.com/NicolasJoubert/grimoire-front/tree/develop",
  },
  {
    title: `O'Festival - Fin de Projet`,
    description: `Développement Fullstack d'une plateforme de festival immersive sous Symfony. Pilotage du projet en tant que Scrum Master et intégration des API Weezevent (billetterie) et Mailgun (mailing automatisé).`,
    tech: [
      { name: "Symfony", category: "techno" },
      { name: "Mailgun", category: "techno" },
      { name: "Weezevent", category: "techno" },
      { name: "Agile", category: "expertise" },
      { name: "Scrum Master", category: "expertise" },
    ],
    image: ofestivalImg,
    imagePosition: "center 25%",
    website: "https://ofestival-production-bffe.up.railway.app/",
    github: "https://github.com/NicolasJoubert/o_festival",
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
  // --- TECH ---
  { name: "React", category: "techno", featured: true },
  { name: "Typescript", category: "techno", featured: true },
  { name: "Node.js", category: "techno", featured: true },
  { name: "Tailwind CSS", category: "techno", featured: false },

  // --- EXPERTISE / PRODUIT ---
  { name: "Product Discovery", category: "expertise", featured: true },
  { name: "Méthode Agile", category: "expertise", featured: true },
  { name: "Customer Success", category: "expertise", featured: true },
  { name: "Architecture Scalable", category: "expertise", featured: false },
  { name: "Gestion de projet", category: "expertise", featured: true },
];

export const HERO_CONTENT: HeroContent = {
  title: "Je construis des interfaces qui durent",
  description: `Développeur de formation, j'ai compris qu'un bon produit ne se résume pas à un code performant. C'est avant tout une solution technique qui répond à un besoin réel.

  J'interviens sur toute la chaîne : du développement React/Node à l'accompagnement client, en passant par le pilotage de projet agile.

  Mon objectif ? Supprimer les frictions entre ceux qui fabriquent le produit et ceux qui l'utilisent.`,
  ctaLabel: "Me contacter",
};

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
      "Optimisation SEO et Core Web Vitals",
      "Réduction du temps de mise à jour du catalogue de 80% via Contentful.",
      "Automatisation du flux de leads via n8n (zéro saisie manuelle).",
    ],
    technos: [
      { name: "React 19", category: "techno" },
      { name: "TypeScript", category: "techno" },
      { name: "n8n", category: "techno" },
      { name: "SEO", category: "expertise" },
      { name: "Automation", category: "expertise" },
    ],
    github: "https://github.com/NicolasJoubert/catTree-project",
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
      { name: "Product Design", category: "expertise" },
    ],
    github: "https://github.com/NicolasJoubert/grimoire-front/tree/develop",
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
    github: "https://github.com/NicolasJoubert/o_festival",
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
      "Coordination entre les équipes métiers et IT pour garantir l'adéquation du produit aux besoins terrain.",
      "Optimisation de process et parcours clients complexes",
      "Formation et accompagnement au changement",
      "Réduction de la friction sur les parcours clients grâce à une approche centrée utilisateur.",
    ],
    technos: [
      { name: "Gestion de projet", category: "expertise" },
      { name: "Process", category: "expertise" },
      { name: "Agile", category: "expertise" },
      { name: "Formation", category: "expertise" },
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
      { name: "Écoute Active", category: "expertise" },
    ],
  },
];
