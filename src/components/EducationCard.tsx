import { motion } from "motion/react";

import { easeClassic } from "../lib/motion";

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  icon: string;
  startDate: string;
  endDate: string;
  description: string;
};

const EducationCard = ({
  education,
  index,
}: {
  education: EducationItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: easeClassic,
      }}
      className="grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
    >
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight text-text-primary">
          {education.degree}
        </h3>
        <p className="mt-1 text-base text-text-secondary">
          {education.institution}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
          {education.description}
        </p>
      </div>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        {education.startDate} — {education.endDate}
      </p>
    </motion.div>
  );
};

export default EducationCard;
