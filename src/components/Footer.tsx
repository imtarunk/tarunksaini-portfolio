import { memo, useEffect, useState } from "react";
import { motion } from "motion/react";

import { socialsInfo } from "../constants/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number>(897);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(
          "https://api.counterapi.dev/v1/tarunk_portfolio/visits/up"
        );
        const data = await response.json();
        if (data && typeof data.count === 'number') {
          setVisitorCount(data.count + 897);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="w-full py-16 mt-24 border-t border-border-primary bg-background-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="w-full mx-auto flex flex-col items-center gap-10">
        <motion.div
          className="flex items-center gap-6"
          variants={containerVariants}
        >
          {socialsInfo.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-background-primary border border-border-primary text-text-secondary hover:text-accent hover:border-accent transition-all duration-300 shadow-sm"
                aria-label={social.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={itemVariants}
        >
          <p className="text-text-primary font-black text-xl tracking-tighter italic">
            code<span className="text-accent text-red-500">x</span>tarun.xyz
          </p>
          <p className="text-text-muted text-xs font-bold tracking-[0.2em] uppercase">
            © {currentYear} — Handcrafted with precision. All rights reserved.
          </p>
          <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full bg-background-primary border border-border-primary shadow-sm hover:border-accent transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">
              Visitors: <span className="text-accent">{visitorCount}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);
