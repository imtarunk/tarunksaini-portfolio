import { motion } from "motion/react";

import { skillGroups } from "../constants/skills";
import { fadeUp, scaleIn, staggerContainer, staggerFast } from "../lib/motion";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-8 border-t border-border-primary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <motion.div
          className="mb-10 max-w-2xl sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-kicker" variants={fadeUp}>
            Capabilities
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-4xl md:text-5xl"
            variants={fadeUp}
          >
            Tools & systems
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg"
            variants={fadeUp}
          >
            What I use to ship production AI and full stack products.
          </motion.p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              <motion.h3
                className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm"
                variants={fadeUp}
              >
                {group.title}
              </motion.h3>

              <motion.ul
                className="mt-4 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 sm:mt-5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                variants={staggerFast}
              >
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.name}
                      variants={scaleIn}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="flex min-w-0 items-center gap-2.5 border border-border-primary bg-background-secondary/60 px-3 py-2.5 transition-colors hover:border-accent/50 sm:gap-3 sm:px-3.5 sm:py-3"
                      style={{ transitionDelay: `${groupIndex * 20}ms` }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background-tertiary sm:h-9 sm:w-9"
                        style={{ color: item.color }}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                      </span>
                      <span className="truncate font-display text-xs font-semibold text-text-primary sm:text-sm">
                        {item.name}
                      </span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
