import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto text-center md:text-left pt-20 md:mt-0 "
      style={{ height: "100vh" }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative z-10 flex-1 mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hello, I'm{" "}
          <span className="block text-6xl md:text-7xl bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text">
            GUJJA SREYA
          </span>
        </h1>
        <p className="text-gray-300 mt-4 text-xl">
          Full Stack Developer | Java Developer
        </p>

        <motion.a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 text-lg font-medium rounded-full transition-all bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:from-violet-600 hover:to-blue-600 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </div>

      <motion.div
        className="flex-1 lg:mt-5 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={assets.hero}
          alt="Hero"
          className="w-80  md:w-[400px] lg:ml-36"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
