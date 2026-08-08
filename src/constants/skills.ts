import { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiOpenai,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiRedis,
  SiDocker,
  SiCloudflare,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAuth0,
  SiGit,
  SiGithubactions,
  SiVercel,
} from "react-icons/si";
import {
  FaServer,
  FaBrain,
  FaRoute,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { TbApi, TbBrandMysql } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: TbBrandMysql, color: "#4479A1" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    title: "AI / LLM",
    items: [
      { name: "OpenAI APIs", icon: SiOpenai, color: "#FFFFFF" },
      { name: "RAG pipelines", icon: FaBrain, color: "#FB7185" },
      { name: "Embeddings", icon: BiNetworkChart, color: "#A78BFA" },
      { name: "Vector databases", icon: FaDatabase, color: "#34D399" },
      { name: "Prompt engineering", icon: HiOutlineSparkles, color: "#FBBF24" },
      { name: "LLM routing", icon: FaRoute, color: "#F59E0B" },
      { name: "Inference infra", icon: FaServer, color: "#60A5FA" },
    ],
  },
  {
    title: "Backend & Infra",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#FB7185" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Railway", icon: FaServer, color: "#FFFFFF" },
      { name: "Cloudflare Workers", icon: SiCloudflare, color: "#F38020" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Auth & Tooling",
    items: [
      { name: "OAuth 2.0", icon: SiAuth0, color: "#EB5424" },
      { name: "RBAC", icon: MdSecurity, color: "#34D399" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "CI/CD", icon: FaCogs, color: "#A3A3A3" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];
