import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { motion } from "motion/react";

import { useTheme } from "../context/theme.context.tsx";
import { ProjectType } from "../types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { isDarkMode } = useTheme();

  const imageToUse =
    project.image.length > 1
      ? isDarkMode
        ? project.image[1]
        : project.image[0]
      : project.image[0];

  return (
    <motion.div
      className="group flex flex-col bg-background-primary border border-border-primary rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Visual Focal Point: Larger Image Area */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-background-tertiary">
        <motion.img
          src={imageToUse}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Compact Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2.5 py-1 text-[9px] font-black tracking-[0.15em] uppercase rounded-lg border shadow-sm backdrop-blur-md ${project.projectEnd === "Ongoing"
              ? "bg-accent/10 text-accent border-accent/20"
              : "bg-background-secondary/80 text-text-muted border-border-primary"
            }`}>
            {project.projectEnd === "Ongoing" ? "Live" : "Done"}
          </span>
        </div>
      </div>

      {/* Structured Content Area: More Compact */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-black text-text-primary tracking-tight group-hover:text-accent transition-colors leading-none">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            {project.projectStart}
          </span>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-text-secondary mb-4 line-clamp-2 min-h-[2.8rem]">
          {project.description}
        </p>

        {/* Minimal Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 5).map((item, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[9px] font-bold rounded bg-background-secondary text-text-muted border border-border-primary transition-all duration-300 group-hover:text-text-secondary"
            >
              {item}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[9px] font-bold text-accent/60 italic">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Streamlined Action Buttons */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider bg-background-secondary text-text-primary border border-border-primary hover:bg-background-tertiary transition-all"
          >
            <RxGithubLogo className="text-base" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider bg-text-primary text-background-primary hover:opacity-90 transition-all"
          >
            <RxArrowTopRight className="text-base" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
