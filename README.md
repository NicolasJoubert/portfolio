# Portfolio - Nicolas

Bienvenue dans le dépôt de mon portfolio personnel. Ce projet est une vitrine de mes compétences techniques et de mes réalisations.

## La Stack Technique

- **Framework :** [React 19](https://react.dev/)
- **Build Tool :** [Vite 7](https://vitejs.dev/)
- **Styling :** [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants :** [Shadcn UI](https://ui.shadcn.com/)
- **Animations :** [Framer Motion](https://www.framer.com/motion/)
- **Typage :** [TypeScript 5.8](https://www.typescriptlang.org/)
- **Validation :** [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## Qualité de Code

Ce projet respecte des standards de développement rigoureux :
- **Linting :** ESLint
- **Formatage :** Prettier (avec tri automatique des classes Tailwind)
- **Git Hooks :** Husky & Lint-Staged
- **Conventions :** CommitLint (Conventional Commits)

## Structure du Projet
```text
src/
├── assets/          # Images, icônes et fichiers statiques (ex: CV.pdf)
├── components/
│   ├─- ui/          # Composants atomiques Shadcn (Button, Card, Input...)
│   └── sections/    # Grandes sections de la page (Hero, Projects, Contact...)
├── hooks/           # Hooks personnalisés (ex: useScroll, useForm...)
├── lib/             # Configuration et utilitaires (utils.ts, emailjs.ts...)
├── schemas/         # Schémas de validation Zod (contactSchema...)
├── App.tsx          # Composant racine (assemblage des sections)
├── index.css        # Styles globaux et configuration Tailwind 4
└── main.tsx         # Point d'entrée de l'application
```

## 🚀 Lancer le projet
```bash
git clone https://github.com/NicolasJoubert/portfolio.git
cd portfolio
npm install
npm run dev
```

## Me contacter
- [LinkedIn](https://www.linkedin.com/in/nicolas--joubert/)
- [Email](mailto:nicolasjoubert@icloud.com)
