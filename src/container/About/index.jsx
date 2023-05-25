import React from "react";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const childVariant = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <motion.section
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      id="about"
      className="h-[100vh] flex flex-col justify-center items-center"
    >
      <motion.div className="grid place-items-center">
        <motion.h1
          variants={childVariant}
          className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4"
        >
          Know me
        </motion.h1>
        <motion.p
          variants={childVariant}
          className="px-4 font-light text-gray-500 dark:text-gray-400"
        >
          Hello I'm Mark Dennis Sanchez, an aspiring web developer with a focus on back-end frameworks like
          <a className="underline" rel="noreferrer" target="_blank" href="https://www.laravel.com">
            Laravel
          </a> and{" "}
          <a className="underline" rel="noreferrer" target="_blank" href="https://www.nodejs.org">
            NodeJS
          </a>{" "}
          <a className="underline" rel="noreferrer" target="_blank" href="https://www.expressjs.com">
            Express
          </a>
          , as well as front-end technologies including{" "}
          <a className="underline" rel="noreferrer" target="_blank" href="https://www.vuejs.org">
            Vue
          </a>{" "}
          and{" "}
          <a className="underline" rel="noreferrer" target="_blank" href="https://www.nextjs.org">
            React
          </a>
          . Seeking opportunities to apply my expertise and contribute to
          innovative projects that make a positive impact on people's lives.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
