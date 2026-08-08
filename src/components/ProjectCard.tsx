import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { motion } from "motion/react";

import { ProjectType } from "../types";
import { techIcons } from "../constants/techIcons";
import { easeClassic } from "../lib/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

const statusLabel = (project: ProjectType) => {
  if (project.inactive) return "Offline";
  if (project.projectEnd === "Ongoing") return "Live";
  return "Done";
};

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const reverse = index % 2 === 1;
  const isMobile = useMediaQuery("(max-width: 639px)");
  const imageToUse =
    project.image.length > 1 ? project.image[1] : project.image[0];
  const number = String(index + 1).padStart(2, "0");
  const techLimit = isMobile ? 3 : 5;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, ease: easeClassic }}
      className={`group grid border-t border-border-primary md:min-h-[480px] lg:min-h-[min(70vh,640px)] lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image first on mobile for visual punch */}
      <a
        href={project.inactive ? project.github : project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="relative order-1 aspect-[16/10] overflow-hidden bg-background-secondary md:aspect-[16/9] lg:order-none lg:aspect-auto lg:min-h-full"
      >
        <motion.img
          src={imageToUse}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: easeClassic }}
        />
      </a>

      <div className="order-2 flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:order-none lg:px-10 lg:py-16">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-display text-sm font-semibold text-accent">
            {number}
          </span>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-[0.2em]">
            {project.projectStart} · {statusLabel(project)}
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent sm:mt-4 sm:text-4xl md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary sm:mt-5 sm:text-base md:text-lg">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {project.techStack.slice(0, techLimit).map((item) => {
            const meta = techIcons[item];
            const Icon = meta?.icon;
            return (
              <li
                key={item}
                className="inline-flex max-w-full items-center gap-1.5 border border-border-primary bg-background-secondary/50 px-2 py-1.5 text-[11px] font-medium text-text-secondary sm:px-2.5 sm:text-xs"
              >
                {Icon && (
                  <Icon
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: meta.color }}
                    aria-hidden
                  />
                )}
                <span className="truncate">{item}</span>
              </li>
            );
          })}
          {project.techStack.length > techLimit && (
            <li className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-text-muted">
              +{project.techStack.length - techLimit}
            </li>
          )}
        </ul>

        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:max-w-lg sm:flex-row sm:gap-4">
          {project.inactive ? (
            <span className="inline-flex w-full flex-1 items-center justify-center gap-2 border border-border-primary bg-background-secondary px-6 py-4 font-display text-base font-bold tracking-wide text-text-muted line-through sm:gap-3 sm:px-8 sm:py-5 sm:text-xl md:py-6 md:text-2xl">
              Offline
            </span>
          ) : (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full flex-1 items-center justify-center gap-2 bg-accent px-6 py-4 font-display text-base font-bold tracking-wide text-[#101820] transition-all duration-300 hover:brightness-110 sm:gap-3 sm:px-8 sm:py-5 sm:text-xl md:py-6 md:text-2xl"
            >
              Live demo
              <RxArrowTopRight className="text-xl sm:text-2xl md:text-3xl" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full flex-1 items-center justify-center gap-2 border-2 border-text-primary bg-transparent px-6 py-4 font-display text-base font-bold tracking-wide text-text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#101820] sm:gap-3 sm:px-8 sm:py-5 sm:text-xl md:py-6 md:text-2xl"
          >
            <RxGithubLogo className="text-xl sm:text-2xl md:text-3xl" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
