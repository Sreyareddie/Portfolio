import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../assets/user_data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="relative w-4/5 border-t my-12 lg:my-24 border-[#25213b] "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#11152c] border border-[#25213b] rounded-xl p-6 shadow-md transition-all duration-500 group relative hover:scale-[1.05] hover:border-violet-500"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex text-xl text-violet-400 hover:text-violet-300 mt-5">
                <a
                  href={project.githubLink}
                  className=" transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                {project.livedemo && (
                  <a
                    href={project.livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent pl-4 rounded-md transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
