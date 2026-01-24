import { motion } from "motion/react";
import EducationCard from "./EducationCard";
import { educationList } from "../constants/education";

const Education = () => {
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
          Education & Learning
        </h2>
        <div className="w-20 h-1.5 bg-accent rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
