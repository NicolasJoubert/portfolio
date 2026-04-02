import SectionLabel from "@/components/ui/SectionLabel.tsx";
import { PROJECTS, EXPERIENCES } from "@/lib/constants";
import ProjectCard from "@/components/sections/ProjectCard";
import ExperienceCard from "@/components/sections/ExperienceCard";
import HeroBanner from "@/components/sections/HeroBanner";
import Button from "../ui/ButtonPerso.tsx";
import ContactForm from "@/components/sections/ContactForm.tsx";

export default function PageLayout() {
  return (
    <main className="max-w-[1080px] mx-auto px-8 pt-18 pb-6 flex flex-col gap-6">
      <HeroBanner />

      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
        <section id="projects" className="pl-8 md:pl-12">
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

        <section id="experience" className="pl-8 md:pl-12">
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
        <section id="contact" className="pl-8 md:pl-12">
          <SectionLabel>Contact</SectionLabel>
          <div className="flex flex-col justify-center items-center gap-12">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
