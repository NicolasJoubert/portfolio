import { motion, type Variants } from "framer-motion";
import {
  Building2,
  Laptop,
  Code,
  Briefcase,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Experience } from "@/lib/constants";
import Card from "@/components/ui/CardPerso.tsx";
import Tag from "@/components/ui/Tag";
import { H2, Body, Small } from "@/components/ui/Typography";

interface ExperienceCardProps {
  experience: Experience;
}

const getCompanyIcon = (type: Experience["type"]) => {
  const iconMap = {
    startup: Building2,
    agency: Code,
    corporate: Building2,
    freelance: Laptop,
    project: Code,
  };
  return iconMap[type] || Briefcase;
};

const cardFadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const Icon = getCompanyIcon(experience.type);

  return (
    <section id="experiences" className="group relative">
      <motion.div
        variants={cardFadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card
          className="
            bg-transparent border-transparent
            p-4 sm:p-6
            transition-all duration-500 ease-out
            hover:bg-muted/20 hover:backdrop-blur-[2px]
            hover:border-border/40 hover:shadow-2xl hover:shadow-accent/5
            hover:-translate-y-1
          "
        >
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <H2 className="mb-1 group-hover:text-accent transition-colors">
                  {experience.role}
                </H2>
                <Small className="font-medium">{experience.company}</Small>
                <div className="flex items-center gap-1.5 mt-1 sm:hidden text-muted-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <Small className="uppercase tracking-wider text-[8px]">
                    {experience.period}
                  </Small>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-muted-foreground/60 flex-shrink-0">
              {experience.github && (
                <a
                  href={experience.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground/50 hover:text-accent transition-colors p-1"
                  aria-label={`Voir le code source ${experience.company} sur GitHub`}
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                <Small className="uppercase tracking-wider text-[8px]">
                  {experience.period}
                </Small>
              </div>
            </div>
          </div>

          <Body className="mb-4">{experience.description}</Body>

          <ul className="space-y-3 mb-5 border-l-2 border-accent/10 pl-5 ml-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2.5 group/item">
                <ArrowUpRight className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-accent/30 group-hover/item:text-accent transition-colors" />
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {achievement}
                </p>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4">
            {experience.technos.map((techno) => (
              <Tag
                key={techno.name}
                variant="badge"
                category={techno.category as "techno" | "expertise"}
              >
                {techno.name}
              </Tag>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
