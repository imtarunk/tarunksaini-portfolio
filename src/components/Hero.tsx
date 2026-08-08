import { motion } from "motion/react";
import { RxDownload } from "react-icons/rx";

import {
  BRAND_NAME,
  HEADLINE,
  RESUME_URL,
  SUPPORTING,
} from "../constants/about";
import CalendlyButton from "./CalendlyButton";
import { easeClassic, fadeUp, staggerContainer } from "../lib/motion";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: easeClassic }}
        src="/tarunk.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[center_15%] sm:object-[center_20%]"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35 sm:via-ink/55 sm:to-ink/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeClassic }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent sm:from-ink/80 sm:via-ink/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 safe-bottom sm:px-6 sm:pb-16 sm:pt-28 md:px-10 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.35rem] font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="sm:hidden">
              Tarun Kumar
              <br />
              Saini
            </span>
            <span className="hidden sm:inline">{BRAND_NAME}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-display text-lg font-semibold text-accent sm:mt-5 sm:text-2xl md:text-3xl"
          >
            {HEADLINE}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/75 sm:mt-5 sm:text-lg"
          >
            {SUPPORTING}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full [&>button]:w-full sm:[&>a]:w-auto sm:[&>button]:w-auto"
          >
            <a href="#work" className="btn-primary">
              View work
            </a>
            <CalendlyButton variant="ghost" />
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <RxDownload className="text-base" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
