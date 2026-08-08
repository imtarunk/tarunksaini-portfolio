import { motion } from "motion/react";

import { educationList } from "../constants/education";
import EducationCard from "./EducationCard";
import { fadeUp, staggerContainer } from "../lib/motion";

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-8 border-t border-border-primary bg-chalk"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            Education
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-4xl md:text-5xl"
            variants={fadeUp}
          >
            Learning path
          </motion.h2>
        </motion.div>

        <div className="mt-8 divide-y divide-border-primary border-y border-border-primary sm:mt-12">
          {educationList.map((item, index) => (
            <EducationCard key={item.id} education={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
