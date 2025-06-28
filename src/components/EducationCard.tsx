import { useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setSpot({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        show: true,
      });
    }
  };

  const handleMouseLeave = () => setSpot((s) => ({ ...s, show: false }));

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-between items-start transition-all duration-200 cursor-pointer hover:shadow-[#14eba3]/40 overflow-hidden py-4 mx-1"
    >
      {/* Spotlight effect */}
      {spot.show && (
        <div
          style={{
            left: spot.x - 60,
            top: spot.y - 60,
            opacity: 0.7,
            pointerEvents: "none",
          }}
          className="absolute w-32 h-32 rounded-full bg-[#14eba3]/20 blur-2xl z-0"
        />
      )}

      {/* Content */}
      <div className="flex gap-4 items-center z-10">
        <img
          src={education.icon}
          alt={education.institution}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-text-primary font-semibold">
            {education.degree}
          </h3>
          <p className="text-sm text-text-secondary">{education.institution}</p>
          <p className="text-xs text-text-secondary">{education.description}</p>
        </div>
      </div>

      <p className="text-sm text-text-secondary whitespace-nowrap z-10">
        {education.startDate} - {education.endDate}
      </p>
    </motion.div>
  );
};

export default EducationCard;
