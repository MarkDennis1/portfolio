import React from "react";
import { motion } from "framer-motion";

const Skill = ({ image, title }) => {
  return (
    <motion.div
      className="w-full h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col justify-between items-center">
        <div className="py-4">
          <img className="w-[50%] mx-auto" src={image} alt="skill_image" />
        </div>
        <h5 className="text-center mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
    </motion.div>
  );
};

export default Skill;
