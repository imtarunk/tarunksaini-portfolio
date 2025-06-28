import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { educationList } from "../constants/education";

const Education = () => {
  return (
    <motion.section
      className="mb-14 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-semibold italic text-xl sm:text-2xl md:text-3xl text-text-primary mb-6 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Courses
      </motion.h2>
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {educationList.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
