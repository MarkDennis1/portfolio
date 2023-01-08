import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="h-[100vh] flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 1, type: "spring", damping: 5 }}
        className="grid place-items-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
          Know me
        </h1>
        <p className="px-4 font-light text-gray-500 dark:text-gray-400">
          Hi, I am Mark Dennis Sanchez an aspiring web developer. I am currently
          learning and developing my skills in web development, with a focus on
          popular frameworks such as{" "}
          <strong>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://beta.reactjs.org/"
            >
              React
            </a>
          </strong>
          ,{" "}
          <strong>
            <a rel="noreferrer" target="_blank" href="https://nextjs.org/">
              Next
            </a>
          </strong>{" "}
          and{" "}
          <strong>
            <a rel="noreferrer" target="_blank" href="https://vuejs.org/">
              Vue
            </a>
          </strong>
          . I am passionate about building user-friendly, visually appealing
          websites and applications that solve problems and make people's lives
          easier.I enjoy dabbling on other stacks and frameworks like{" "}
          <strong>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.mongodb.com/mern-stack"
            >
              MERN, 
            </a>
          </strong>
          <strong>
            <a rel="noreferrer" target="_blank" href="https://laravel.com/">
              {" "}Laravel
            </a>
          </strong>
          ,{" "}
          <strong>
            <a rel="noreferrer" target="_blank" href="https://sanity.io/">
              Sanity
            </a>
          </strong>{" "}
          and staying up-to-date on the latest developments in the tech
          industry. When I have spare time, I love to watch movies, listen to
          music, read technical blogs, and play video games. I am excited to
          continue learning and growing as a web developer and to one day build
          innovative and impactful projects for my clients or employers.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
