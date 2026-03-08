import { RxDownload } from "react-icons/rx";
import { motion } from "motion/react";

import SocialButtons from "./SocialButtons";
import CalendlyButton from "./CalendlyButton";
import { socialsInfo } from "../constants/socials";

const DESCRIPTION_TEXT = {
  parts: [
    { text: "Hey! I'm ", highlight: false },
    { text: "Tarun", highlight: true },
    {
      text: ", a Full Stack Developer specialized in creating intelligent systems using ",
      highlight: false,
    },
    { text: "AI/ML", highlight: true },
    { text: " and architecting decentralized solutions on ", highlight: false },
    { text: "Web3", highlight: true },
    {
      text: ". I bridge the gap between ",
      highlight: false,
    },
    { text: "Scalable SaaS", highlight: true },
    { text: " and ", highlight: false },
    { text: "Blockchain", highlight: true },
    {
      text: ". Currently building ",
      highlight: false,
    },
    { text: "DePIN, LLM-powered tools, and automated protocols", highlight: true },
    { text: " that push boundaries.", highlight: false },
  ],
};

const About = () => {
  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1X6M9SLgR-fycBdyi206thQkpIPLc7vHW/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <motion.section
        className="w-full py-6 sm:py-12 flex flex-col items-center sm:items-start text-center sm:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-accent/20"
        >
          AVAILABLE FOR PROJECTS
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-black text-text-primary mb-10 tracking-tight leading-[1] max-w-4xl"
          variants={itemVariants}
        >
          Building the <br />
          <span className="text-accent italic font-serif font-medium">Intelligent & Decentralized</span> Future.
        </motion.h1>

        <motion.div
          className="max-w-3xl text-text-secondary font-medium text-xl sm:text-2xl md:text-3xl mb-14 leading-tight sm:leading-snug tracking-tight"
          variants={itemVariants}
        >
          {DESCRIPTION_TEXT.parts.map((part, index) =>
            part.highlight ? (
              <span key={index} className="text-text-primary font-extrabold">{part.text}</span>
            ) : (
              <span key={index} className="text-text-secondary leading-relaxed">{part.text}</span>
            )
          )}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <motion.button
            onClick={handleResumeClick}
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 text-xl font-bold"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            Get Resume
            <RxDownload className="h-6 w-6" />
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="w-full sm:w-auto"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendlyButton />
          </motion.div>

          <div className="flex items-center gap-4">
            {socialsInfo.map((social, index) => (
              <motion.div
                key={social.id}
                variants={itemVariants}
                custom={index}
                className="p-4 rounded-full bg-background-secondary border border-border-primary hover:border-accent hover:bg-accent-soft transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialButtons social={social} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
