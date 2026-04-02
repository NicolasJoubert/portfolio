import type { Project } from "@/lib/constants";
import Card from "../ui/Card.tsx";
import Tag from "../ui/Tag";
import { H2, Body } from "../ui/Typography";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.website ?? project.github;

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <Card
        className="
          relative flex flex-col sm:flex-row sm:gap-6
          bg-transparent border border-transparent p-4 sm:p-6
          transition-all duration-500 ease-out
          hover:bg-muted/20 hover:backdrop-blur-[2px]
          hover:border-border/40 hover:shadow-2xl hover:shadow-accent/5
          hover:-translate-y-1
        "
      >
        {/* Image */}
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
              className="
                w-full h-full object-cover
                grayscale opacity-70 scale-105
                group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-700 ease-in-out
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
            <H2 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
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
                className="shrink-0 text-muted-foreground/50 hover:text-accent transition-colors mt-1"
                aria-label="Voir le code source sur GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
          </div>

          <Body className="mb-5">{project.description}</Body>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
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
    </a>
  );
}
