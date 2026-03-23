import type { Project } from "@/lib/constants";
import Card from "../ui/Card.tsx";
import Tag from "../ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
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

        {/* Contenu */}
        <div className="flex flex-col gap-3 flex-grow min-w-0 pt-4 sm:pt-0">
          <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2 leading-none">
            {project.title}
            <span className="inline-block text-muted-foreground/40 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </h3>

          <p className="text-[13px] text-muted-foreground/90 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {project.tech.map((tech) => (
              <Tag
                key={tech}
                variant="badge"
                className="
                  bg-accent/5 border-accent/10 text-accent
                  px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase
                  group-hover:bg-accent/10 group-hover:border-accent/20
                  transition-colors duration-300
                "
              >
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
}
