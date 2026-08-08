import { motion } from "motion/react";

import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import { fadeUp, staggerContainer } from "../lib/motion";

const Projects = () => {
  return (
    <section id="work" className="scroll-mt-8">
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pb-12 sm:pt-20 md:px-10 md:pt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
      >
        <motion.p className="section-kicker" variants={fadeUp}>
          Selected work
        </motion.p>
        <motion.h2
          className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-4xl md:text-5xl"
          variants={fadeUp}
        >
          Built for real users
        </motion.h2>
        <motion.p
          className="mt-3 max-w-xl text-base text-text-secondary sm:mt-4 sm:text-lg"
          variants={fadeUp}
        >
          AI infrastructure, animation agents, and full stack products — shipped
          end-to-end.
        </motion.p>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
