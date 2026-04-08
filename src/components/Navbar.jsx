import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const MENU_ITEMS = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-2xl py-3 md:py-4"
          : "bg-transparent border-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
          Portfolio
        </div>

        <div className="hidden md:flex space-x-8">
          {MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                activeSection === item.toLowerCase()
                  ? "text-violet-300"
                  : "hover:text-violet-400"
              }`}
            >
              {item}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-violet-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="white"
            size={24}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav shadow-2xl absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {MENU_ITEMS.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-white/5 text-violet-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-violet-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
