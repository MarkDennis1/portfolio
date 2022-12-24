import { AiFillEye, AiFillGithub } from "react-icons/ai";
const Work = ({ image, title, github, demo }) => {
  const demoButton = () => {
    if (demo === "") {
      return (
        <a href={demo} target="_blank" rel="noreferrer">
          <button
            disabled
            type="button"
            className="inline-flex gap-2 text-gray-400 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800"
          >
            <AiFillEye className="w-6 h-auto" /> Demo
          </button>
        </a>
      );
    } else {
      return (
        <a href={demo} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="inline-flex gap-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <AiFillEye className="w-6 h-auto" /> Demo
          </button>
        </a>
      );
    }
  };
  return (
    <div className="pointer-events-none w-[300px] p-6 flex flex-col gap-4 items-start bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="w-[250px] h-[154px]">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={image}
          alt={`${title}_image`}
        />
      </div>

      <h5 className="h-[64px] flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="flex gap-2 justify-between">
        <a href={github} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="gap-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
          >
            <AiFillGithub className="w-6 h-auto" /> Github
          </button>
        </a>
        {demoButton()}
      </div>
    </div>
  );
};

export default Work;
