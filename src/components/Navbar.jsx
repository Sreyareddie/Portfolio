import React, { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#11152c] bg-opacity-90 backdrop-blur-md shadow-md py-4"
    >
      <div className="w-4/5 mx-auto flex justify-between items-center text-white">
        <div className="text-2xl font-bold">My Portfolio</div>

        <div className="hidden md:flex space-x-10">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative text-lg font-medium transition-all duration-300 hover:text-violet-400"
            >
              {item}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-violet-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" />
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#11152c] bg-opacity-95 backdrop-blur-md py-4 flex flex-col items-center space-y-4"
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium transition-all duration-300 hover:text-violet-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
