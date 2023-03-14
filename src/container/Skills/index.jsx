import React from "react";
import Skill from "./Skill";
import { Skills as skills } from "../../constants";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const childVariant = {
  hidden: {
    y: 200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
        Skills
      </h1>
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
      >
        {skills.map((skill, i) => (
          <motion.div variants={childVariant}>
            <Skill key={i} image={skill.image} title={skill.title} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
