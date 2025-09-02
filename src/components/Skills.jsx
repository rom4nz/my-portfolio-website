import React from "react";
import { skills } from "../constant/skills";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animation";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp} className="text-center mb-10">
          My Skills
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 group"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform"
                loading="lazy"
              />
              <span className="text-white font-semibold text-base text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;