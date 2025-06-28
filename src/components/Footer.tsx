import { memo } from "react";
import { motion } from "motion/react";

import { socialsInfo } from "../constants/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <motion.footer
      className="w-full py-6 mt-auto border-t border-gray-200 dark:border-neutral-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-[700px] mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
        >
          <motion.p
            className="text-text-secondary text-sm"
            variants={itemVariants}
          >
            © {currentYear} Tarun Saini. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
          >
            {socialsInfo.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                  aria-label={social.name}
                  variants={socialVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                      duration: 0.3,
                      rotate: {
                        repeat: 0,
                        duration: 0.5,
                      },
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);
