import { motion } from "motion/react";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants/experience";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="mb-14 px-4 sm:px-8 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold italic text-xl sm:text-2xl md:text-3xl text-text-primary mb-6 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
