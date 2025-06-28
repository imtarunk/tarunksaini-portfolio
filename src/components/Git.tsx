import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const colorTheme = isDark
    ? ["#161b22", "#6b21a8", "#9333ea", "#a855f7", "#c084fc"]
    : ["#ebedf0", "#c084fc", "#a855f7", "#9333ea", "#6b21a8"];

  if (!mounted) return null;

  return (
    <motion.section
      className="mb-14 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="font-semibold italic text-xl sm:text-2xl md:text-3xl text-text-primary mb-6 text-center sm:text-left">
        GitHub Contributions
      </motion.h2>

      <div
        className="flex justify-center overflow-x-auto"
        key={isDark ? "dark" : "light"}
      >
        <GitHubCalendar
          username="imtarunk"
          blockSize={10}
          blockMargin={3}
          fontSize={14}
          colorScheme={isDark ? "dark" : "light"}
          theme={{
            light: colorTheme,
            dark: colorTheme,
          }}
        />
      </div>
    </motion.section>
  );
};

export default GithubStats;
