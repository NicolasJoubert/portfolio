import type { Project } from "@/lib/constants";
import Card from "../ui/CardPerso.tsx";
import Tag from "../ui/Tag";
import { H2, Body } from "../ui/Typography";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const cardFadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.website ?? project.github;

  return (
    <section id="projects" className="group relative">
      <motion.div
        variants={cardFadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="group relative block rounded-2xl outline-none"
      >
        <Card
          className="
          relative flex flex-col sm:flex-row sm:gap-6
          bg-transparent border border-transparent p-4 sm:p-8
          transition-all duration-500 ease-out
          group-hover:bg-muted/20 group-hover:backdrop-blur-[2px]
          group-hover:border-border/40 group-hover:shadow-2xl group-hover:shadow-accent/5
          group-hover:-translate-y-1
        "
        >
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Visiter le projet ${project.title}`}
          />
          <div
            className="
            flex-shrink-0 w-full aspect-video
            sm:w-64 sm:h-36 md:w-72 md:h-40
            border border-border/20
            rounded-xl transition-all duration-500
            group-hover:border-accent/30 group-hover:shadow-lg
            overflow-hidden bg-muted/20
          "
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="
                w-full h-full object-cover
                transition-all duration-700 ease-in-out
                md:grayscale md:opacity-70 md:scale-105
                md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-100
              "
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-accent/5 text-muted-foreground/30 text-xl font-black tracking-tighter">
                NKD
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 flex-grow min-w-0 pt-4 sm:pt-0">
            <div className="flex items-start justify-between gap-2">
              <H2 className="mb-1 group-hover:text-accent transition-colors">
                <span className="inline-flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-accent/40" />
                </span>
              </H2>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-20 shrink-0 text-muted-foreground/50 hover:text-accent transition-colors mt-1 p-1"
                  aria-label="Voir le code source sur GitHub"
                >
                  <FaGithub className="w-5 h-5" />a
                </a>
              )}
            </div>

            <Body className="mb-5 whitespace-pre-line">
              {project.description}
            </Body>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 relative z-20">
              {project.tech.map((techno) => (
                <Tag
                  key={techno.name}
                  variant="badge"
                  category={techno.category as "techno" | "expertise"}
                >
                  {techno.name}
                </Tag>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
