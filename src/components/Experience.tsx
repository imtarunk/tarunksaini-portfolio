import { motion } from "motion/react";

import { experiences } from "../constants/experience";
import ExperienceCard from "./ExperienceCard";
import { fadeUp, staggerContainer } from "../lib/motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-8 border-t border-border-primary bg-chalk"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <motion.div
          className="mb-10 max-w-2xl sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            Experience
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-4xl md:text-5xl"
            variants={fadeUp}
          >
            Roles & ventures
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg"
            variants={fadeUp}
          >
            Founding engineer work alongside contract engineering — AI products
            and production systems.
          </motion.p>
        </motion.div>

        <div className="divide-y divide-border-primary border-y border-border-primary">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
