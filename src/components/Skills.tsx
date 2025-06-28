import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiTurborepo,
  SiDocker,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiSolana,
  SiRust,
  SiEthereum,
  SiWeb3Dotjs,
} from "react-icons/si";

const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", dynamicColor: true },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#000000", dynamicColor: true },
  { icon: SiPrisma, name: "Prisma", color: "#0C344B" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
  { icon: SiMysql, name: "MySQL", color: "#00758F" },
  {
    icon: SiTurborepo,
    name: "Turborepo",
    color: "#000000",
    dynamicColor: true,
  },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiSolana, name: "Solana", color: "#00FFA3" },
  { icon: SiRust, name: "Rust", color: "#DEA584" },
  { icon: SiEthereum, name: "Ethereum", color: "#3C3C3D" },
  { icon: SiWeb3Dotjs, name: "Web3", color: "#F16822" },
];

const Skills = () => {
  return (
    <motion.section
      className="mb-14 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-semibold italic text-xl sm:text-2xl md:text-3xl text-text-primary mb-6 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-3 sm:gap-5 justify-center sm:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="relative p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform bg-transparent text-neutral-900 dark:text-white group"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              title={skill.name}
            >
              <span
                className={
                  skill.dynamicColor ? "text-black dark:text-white" : ""
                }
              >
                <Icon
                  className="h-8 w-8"
                  style={
                    !skill.dynamicColor ? { color: skill.color } : undefined
                  }
                />
              </span>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full px-2 py-1 rounded bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
