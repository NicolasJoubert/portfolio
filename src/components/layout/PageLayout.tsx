import SectionLabel from "@/components/ui/SectionLabel.tsx";
import { PROJECTS, EXPERIENCES } from "@/lib/constants";
import ProjectCard from "@/components/sections/ProjectCard";
import ExperienceCard from "@/components/sections/ExperienceCard";
import HeroBanner from "@/components/sections/HeroBanner";
import Button from "../ui/ButtonPerso.tsx";
import ContactForm from "@/components/sections/ContactForm.tsx";

export default function PageLayout() {
  return (
    <div className="w-full flex flex-col items-center bg-background">
      <div className="w-full max-w-6xl px-6 sm:px-8 md:px-12">
        <HeroBanner />

        <main className="flex flex-col gap-32 pb-24">
          <section id="projects" className="max-w-4xl">
            <SectionLabel>Projets</SectionLabel>
            <div className="relative flex flex-col gap-12">
              <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-px bg-border/40" />
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
          </section>
          <section id="experience" className="max-w-4xl relative">
            <SectionLabel>Expériences</SectionLabel>
            <div className="relative flex flex-col gap-12">
              <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-px bg-border/40" />
              {EXPERIENCES.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                href="/CV_Nicolas_Joubert.pdf"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mon CV
              </Button>
            </div>
          </section>
          <section id="contact" className="max-w-4xl">
            <SectionLabel>Contact</SectionLabel>
            <div className="relative flex flex-col justify-center items-center gap-12">
              <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-px bg-border/40" />
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
