import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills } from "../assets/user_data";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="relative  border-t my-12 lg:my-24 border-[#25213b] w-full"
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
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="w-full my-2 pt-16">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-110 cursor-pointer"
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 p-4">
                <div className="flex justify-center text-5xl text-blue-400">
                  {skill.icon}
                </div>
                <p className="text-white text-sm sm:text-lg mt-3 text-center">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
};

export default Skills;
