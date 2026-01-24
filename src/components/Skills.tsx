import { motion } from "motion/react";
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
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
} from "react-icons/si";

const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", dynamicColor: true },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#000000", dynamicColor: true },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
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
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-10 block">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">
          Tech Stack
        </h2>
        <div className="w-20 h-1.5 bg-accent rounded-full opacity-30" />
      </div>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="group flex flex-col items-center gap-3 cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative p-4 rounded-2xl bg-background-secondary border border-border-primary group-hover:border-accent group-hover:bg-accent-soft transition-all duration-300">
                <Icon
                  className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110"
                  style={!skill.dynamicColor ? { color: skill.color } : undefined}
                />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-text-muted group-hover:text-text-primary transition-colors uppercase tracking-wider text-center">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
