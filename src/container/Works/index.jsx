import Work from "./Work";
import { Works as works } from "../../constants";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section
      id="works"
      className="h-[100vh] flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
        Works
      </h1>
      <motion.div className="w-full overflow-hidden shadow-md">
        <motion.div
          className="flex justify-start gap-4 p-4 w-full overflow-x-scroll"
        >
          {works.map((work, i) => (
            <Work
              key={i}
              image={work.image}
              title={work.title}
              github={work.github}
              demo={work.demo}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Works;
