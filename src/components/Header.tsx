import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const leftContentVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  };

  const rightContentVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 w-full gap-6">
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants}
      >
        <motion.a
          href="/"
          aria-label="Home"
          className="relative group"
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          <motion.img
            src="/tarunk.png"
            alt="Tarunk Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-2xl border-4 border-background-primary group-hover:border-accent transition-colors duration-500 relative z-10"
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
        </motion.a>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-text-primary font-black text-2xl sm:text-3xl tracking-tight leading-none mb-1">
            Tarun Kumar Saini
          </h2>
          <p className="text-text-secondary font-bold text-sm sm:text-lg tracking-widest uppercase opacity-70">
            Full Stack • AI/ML • Web3 Architect
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightContentVariants}
        className="p-2 rounded-2xl bg-background-secondary border border-border-primary shadow-sm"
      >
        <ThemeToggle />
      </motion.div>
    </header>
  );
};

export default Header;
