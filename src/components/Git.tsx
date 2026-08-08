import GitHubCalendar from "react-github-calendar";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

import { fadeUp, staggerContainer } from "../lib/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

const GITHUB_USERNAME = "imtarunk";

const darkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GithubStats = () => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const blockSize = isMobile ? 8 : isTablet ? 10 : 12;
  const blockMargin = isMobile ? 2 : 3;
  const fontSize = isMobile ? 10 : 13;

  return (
    <section
      id="github"
      className="relative scroll-mt-8 overflow-hidden border-t border-border-primary"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <SiGithub className="h-[min(90vw,520px)] w-[min(90vw,520px)] text-white/[0.07] blur-2xl md:h-[min(85vw,720px)] md:w-[min(85vw,720px)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <SiGithub className="h-[min(75vw,400px)] w-[min(75vw,400px)] text-white/[0.04] blur-sm md:h-[min(70vw,560px)] md:w-[min(70vw,560px)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background-primary via-transparent to-background-primary" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <motion.div
          className="mb-8 max-w-2xl sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            GitHub
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-4xl md:text-5xl"
            variants={fadeUp}
          >
            Contribution graph
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg"
            variants={fadeUp}
          >
            Public activity on{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline decoration-border-primary underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              @{GITHUB_USERNAME}
            </a>
            .
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="-mx-4 overflow-x-auto border-y border-border-primary bg-background-secondary/40 px-3 py-4 backdrop-blur-md sm:mx-0 sm:border sm:px-6 sm:py-6 md:p-8"
        >
          <div className="flex min-w-max justify-start sm:justify-center">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={blockSize}
              blockMargin={blockMargin}
              fontSize={fontSize}
              colorScheme="dark"
              theme={darkTheme}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
