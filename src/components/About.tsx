import { useEffect, useState } from "react";
import { RxDownload } from "react-icons/rx";
import { motion } from "framer-motion"; // ✅ Correct import
import { RoughNotation } from "react-rough-notation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import SocialButtons from "./SocialButtons";
import CalendlyButton from "./CalendlyButton";
import { socialsInfo } from "../constants/socials";

const DESCRIPTION_TEXT = {
  parts: [
    { text: "Hey! I'm ", highlight: false },
    { text: "Tarun", highlight: true },
    {
      text: ", a Full Stack & Blockchain Developer focused on ",
      highlight: false,
    },
    { text: "Solana", highlight: true },
    { text: " and mastering ", highlight: false },
    { text: "Rust", highlight: true },
    {
      text: ". I build ",
      highlight: false,
    },
    { text: "decentralized", highlight: true },
    { text: " protocols and ", highlight: false },
    { text: "scalable full stack apps", highlight: true },
    {
      text: ". Currently working on ",
      highlight: false,
    },
    { text: "DePIN, Web3 products, and SaaS tools", highlight: true },
    { text: " that drive real impact.", highlight: false },
  ],
};

const HighlightedText = ({ text }: { text: string }) => (
  <motion.span
    className="text-text-primary font-medium"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    data-cursor="true"
  >
    {text}
  </motion.span>
);

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1GewQz5FTtco52xXYJDLjUV78ESIHO0CU/view?usp=sharing"; // 🔥 Update with your resume link
    window.open(resumeUrl, "_blank", "noopener noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <motion.section
        className="mb-8 px-4 sm:px-8 md:px-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary mb-4 leading-[1.4] font-sans text-center sm:text-left"
          variants={itemVariants}
        >
          Building{" "}
          <span className="italic font-medium font-serif" data-cursor="true">
            Web3
          </span>{" "}
          &{" "}
          <span className="italic font-medium font-serif" data-cursor="true">
            Full Stack
          </span>{" "}
          apps that{" "}
          <span id="myElement" className="text-md font-medium">
            <RoughNotation
              type="underline"
              color="#14eba3"
              iterations={4}
              show={show}
            >
              make an impact.
            </RoughNotation>
          </span>
        </motion.h1>

        <motion.p
          className="text-text-secondary font-light text-base sm:text-lg mt-6 mb-8 leading-6 text-justify"
          variants={itemVariants}
        >
          {DESCRIPTION_TEXT.parts.map((part, index) =>
            part.highlight ? (
              <HighlightedText key={index} text={part.text} />
            ) : (
              <motion.span
                key={index}
                custom={index}
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                {part.text}
              </motion.span>
            )
          )}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 w-full">
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              onClick={handleResumeClick}
              className="btn-primary text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              <RxDownload className="h-4 w-4" />
            </motion.button>

            {socialsInfo.map((social, index) => (
              <motion.div
                key={social.id}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialButtons social={social} />
              </motion.div>
            ))}
          </div>
          <div className="mt-4 sm:mt-0">
            <CalendlyButton />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
