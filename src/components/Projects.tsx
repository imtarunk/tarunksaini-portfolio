import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="projects"
    >
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          A selection of projects I've worked on, ranging from web applications to AI experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[...projects].reverse().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
