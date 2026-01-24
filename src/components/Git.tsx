import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
    ? ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"] // GitHub standard greens for dark
    : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]; // GitHub standard greens for light

  if (!mounted) return null;

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
          GitHub Contributions
        </h2>
        <div className="w-20 h-1.5 bg-accent rounded-full opacity-30" />
      </div>

      <div
        className="flex justify-center p-8 rounded-3xl bg-background-secondary border border-border-primary overflow-x-auto shadow-sm"
        key={isDark ? "dark" : "light"}
      >
        <GitHubCalendar
          username="imtarunk"
          blockSize={12}
          blockMargin={4}
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
