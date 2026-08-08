import { motion } from "motion/react";

import { ExperienceType } from "../types";
import { easeClassic } from "../lib/motion";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) => {
  const inner = (
    <div className="grid gap-3 py-6 sm:gap-4 sm:py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-8">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-background-secondary sm:h-11 sm:w-11 md:hidden">
          <img
            src={experience.icon}
            alt=""
            className="h-6 w-6 object-contain sm:h-7 sm:w-7"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display text-base font-bold text-text-primary sm:text-lg">
            {experience.company}
          </p>
          <p className="mt-1 text-xs text-text-muted sm:text-sm">
            {experience.endDate === "Present" ? (
              <span className="text-accent">Current</span>
            ) : (
              `${experience.startDate} – ${experience.endDate}`
            )}
            {experience.endDate === "Present" && (
              <span className="text-text-muted">
                {" "}
                · {experience.startDate} – Present
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="min-w-0 pl-[3.25rem] md:pl-0">
        <h3 className="font-display text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
          {experience.designation}
        </h3>
        {experience.description && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            {experience.description}
          </p>
        )}
      </div>

      <div className="hidden h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-background-secondary md:flex">
        <img
          src={experience.icon}
          alt=""
          className="h-8 w-8 object-contain"
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.05, 0.25),
        ease: easeClassic,
      }}
    >
      {experience.companyUrl ? (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-colors hover:[&_h3]:text-accent hover:[&_.font-bold]:text-accent"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
};

export default ExperienceCard;
