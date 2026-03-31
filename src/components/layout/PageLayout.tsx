import { Body } from "@/components/ui/Typography.tsx";
import Button from "@/components/ui/ButtonPerso.tsx";
import SectionLabel from "@/components/ui/SectionLabel.tsx";
import Tag from "@/components/ui/Tag.tsx";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/sections/ProjectCard";
import HeroBanner from "@/components/sections/HeroBanner";

export default function PageLayout() {
  return (
    <main className="max-w-[1080px] mx-auto px-8 pt-18 pb-24 flex flex-col gap-6">
      <HeroBanner />
      <Body>Frontend developer junior...</Body>
      <div>
        <Button variant="accent">Voir mes projets</Button>
      </div>
      <div>
        <Tag variant="default">React</Tag>
      </div>
      <div>
        <SectionLabel>Projets</SectionLabel>
        <div className="grid grid-cols-1 gap-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
