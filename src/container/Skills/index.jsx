import React from "react";
import Skill from "./Skill";
import { Skills as skills } from "../../constants";
const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
        Skills
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skills.map((skill, i) => (
          <Skill key={i} image={skill.image} title={skill.title} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
