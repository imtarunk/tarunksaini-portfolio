import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const leftContentVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const rightContentVariants = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-16 py-4 sm:py-8 px-4 sm:px-8 gap-4 sm:gap-0">
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants}
      >
        <motion.a
          href="/"
          aria-label="Home"
          className="cursor-pointer"
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/tarunk.png" // 🔥 Replace this with your image file in public folder
            alt="Tarunk Logo"
            className="h-14 w-14 sm:h-20 sm:w-20 rounded-full shadow-lg"
            whileHover={{ scale: 1.15 }}
          />
        </motion.a>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-text-primary font-bold text-lg sm:text-2xl">
            Tarun Kumar Saini
          </p>
          <p className="text-text-secondary font-normal text-base sm:text-lg">
            Full Stack & Blockchain Developer
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightContentVariants}
      >
        <ThemeToggle />
      </motion.div>
    </header>
  );
};

export default Header;
