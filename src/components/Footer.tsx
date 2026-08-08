import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { socialsInfo } from "../constants/socials";
import { BRAND_NAME, HEADLINE } from "../constants/about";
import CalendlyButton from "./CalendlyButton";
import { fadeUp, staggerContainer } from "../lib/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-8 bg-ink text-white">
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:px-10 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
      >
        <div className="min-w-0">
          <motion.p className="section-kicker" variants={fadeUp}>
            Contact
          </motion.p>
          <motion.h2
            className="mt-3 break-words font-display text-3xl font-bold tracking-tight sm:mt-4 sm:text-5xl md:text-6xl"
            variants={fadeUp}
          >
            {BRAND_NAME}
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-white/65 sm:text-lg"
            variants={fadeUp}
          >
            {HEADLINE}
          </motion.p>
          <motion.a
            href="mailto:tarunshr145@gmail.com"
            className="mt-6 inline-block break-all font-display text-base font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:mt-8 sm:text-lg"
            variants={fadeUp}
          >
            tarunshr145@gmail.com
          </motion.a>
          <motion.div
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-md sm:flex-row sm:flex-wrap"
            variants={fadeUp}
          >
            <div className="w-full sm:w-auto [&_button]:w-full sm:[&_button]:w-auto">
              <CalendlyButton variant="ghost" />
            </div>
            <Link to="/b" className="btn-ghost w-full sm:w-auto">
              Blog
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-6 sm:gap-8 md:items-end md:text-right"
          variants={fadeUp}
        >
          <div className="flex items-center gap-5 md:justify-end">
            {socialsInfo.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center text-white/60 transition-colors hover:text-accent"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <p className="text-xs tracking-wide text-white/40">
            © {currentYear} {BRAND_NAME}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
