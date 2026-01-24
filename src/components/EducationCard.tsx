import { motion } from "motion/react";

type EducationType = {
  id: number;
  institution: string;
  degree: string;
  icon: string;
  startDate: string;
  endDate: string;
  description: string;
};

const EducationCard = ({ education }: { education: EducationType }) => {
  return (
    <motion.div
      className="group relative h-full flex flex-col p-6 rounded-2xl bg-background-secondary border border-border-primary hover:border-accent transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="flex gap-4 items-center mb-6">
        <div className="p-2 rounded-lg bg-background-primary border border-border-primary group-hover:border-accent/30 transition-colors">
          <img
            src={education.icon}
            alt={education.institution}
            className="h-10 w-10 min-w-[40px] rounded-md object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">
            {education.degree}
          </h3>
          <p className="text-sm font-medium text-text-secondary mt-1">{education.institution}</p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
          {education.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border-primary">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">
          {education.startDate} — {education.endDate}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
