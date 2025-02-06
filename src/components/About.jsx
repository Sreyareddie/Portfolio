import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      id="about"
      className="relative w-4/5  border-t my-12 lg:my-24 border-[#25213b] "
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
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16 px-6">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-400 leading-relaxed text-lg">
            I am a recent Computer Science graduate with a strong foundation in
            programming, data structures, and algorithms. Passionate about
            software development, I enjoy solving complex problems and building
            efficient, scalable applications.
            <br />
            <br />
            I have hands-on experience working with full-stack web development,
            databases, and cloud-based platforms. My expertise in Java,
            JavaScript, and SQL, along with proficiency in React and backend
            technologies such as Node.js and MongoDB, enables me to develop
            dynamic and interactive web applications.
            <br />
            <br />
            Throughout my academic journey, I have actively engaged in projects
            involving deep learning, web-based management systems, and
            full-stack applications, honing my technical skills and
            problem-solving abilities.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <motion.img
            src={assets.about_me}
            alt="About Me"
            width={500}
            height={500}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
