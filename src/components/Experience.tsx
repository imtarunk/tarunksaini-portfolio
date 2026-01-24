import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants/experience";

const Experience = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-10 block">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">
          Experience
        </h2>
        <div className="w-20 h-1.5 bg-accent rounded-full" />
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
