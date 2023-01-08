import Work from "./Work";
import { Works as works } from "../../constants";

const Works = () => {
  return (
    <section
      id="works"
      className="h-[100vh] flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
        Projects
      </h1>
      <div className="w-full overflow-hidden shadow-md">
        <div className="flex justify-start gap-4 p-4 overflow-x-scroll">
          {works.map((work, i) => (
            <Work
              key={i}
              image={work.image}
              title={work.title}
              github={work.github}
              demo={work.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
