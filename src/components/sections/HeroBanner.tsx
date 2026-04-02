import { AvailabilityBadge } from "../ui/AvailabilityBadge.tsx";
import Tag from "../ui/Tag.tsx";
import { Body, H1 } from "../ui/Typography.tsx";
import { HERO_CONTENT, SKILLS } from "@/lib/constants.ts";
import Button from "@/components/ui/ButtonPerso.tsx";
import image from "@/assets/nicolas_joubert.jpg";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const featuredSkills = SKILLS.filter((skill) => skill.featured);

  const sortedSkills = [...featuredSkills].sort((a, b) => {
    if (a.category === "techno" && b.category === "expertise") return -1;
    if (a.category === "expertise" && b.category === "techno") return 1;
    return 0;
  });
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-28"
    >
      <div className="flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left gap-6 lg:gap-8">
        <H1 className="hero-title relative inline-block cursor-default">
          <span className="wave-text">{HERO_CONTENT.title}</span>
        </H1>
        <Body className="max-w-[540px]">{HERO_CONTENT.description}</Body>
        <div className="flex flex-wrap gap-2">
          {sortedSkills.map((skill) => (
            <Tag
              key={skill.name}
              category={skill.category as "techno" | "expertise"}
              size="md"
              className="hover:scale-105 transition-transform"
            >
              {skill.name}
            </Tag>
          ))}
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-4 mt-2">
          <Button href="#contact">{HERO_CONTENT.ctaLabel}</Button>

          <AvailabilityBadge />
        </div>
      </div>
      <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto">
        <div className="hero-image group aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <motion.img
            src={image}
            alt="Photo de profil Nicolas Joubert"
            initial={{ filter: "grayscale(100%) contrast(110%)", scale: 1.1 }}
            whileHover={{
              filter: "grayscale(0%) contrast(100%)",
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
