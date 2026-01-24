import { motion } from "motion/react";
import { ExperienceType } from "../types";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <motion.div
      className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 rounded-2xl border border-transparent hover:border-border-primary hover:bg-background-secondary transition-all duration-300"
      whileHover={{ x: 8 }}
    >
      <div className="flex gap-6 items-center">
        <div className="p-3 rounded-xl bg-background-tertiary group-hover:bg-background-primary transition-colors">
          <img
            src={experience.icon}
            alt={experience.company}
            className="h-10 w-10 min-w-[40px] rounded-lg object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {experience.designation}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-md font-medium text-text-secondary">{experience.company}</p>
            {experience.endDate === "Present" && (
              <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-accent/20 text-accent rounded-md">
                CURRENT
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 text-left sm:text-right">
        <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
          {experience.startDate} — {experience.endDate}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
