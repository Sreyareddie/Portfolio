import React from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../assets/user_data";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="relative w-4/5 border-t my-12 lg:my-24 border-[#25213b]"
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
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16 px-6">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-400 leading-relaxed text-lg">
            Feel free to reach out to me! Whether it's a project collaboration,
            a job opportunity, or just to say hi, I'm always open to connecting.
          </p>
        </div>

        <div className="flex-1 flex justify-center gap-6">
          {contactLinks.map(({ id, href, icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-[#11152c] border border-[#25213b] transition-all duration-300 group-hover:border-violet-500"
              >
                {icon}
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
