import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../assets/user_data";
import { BsBriefcaseFill, BsPlus, BsDash } from "react-icons/bs";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(experiences[0]?.id);

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20">
        <motion.div
          className="lg:w-1/3 lg:sticky lg:top-32"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
            Professional Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Building better <br />
            <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            My professional journey has been focused on creating impact through
            clean code and efficient problem-solving.
          </p>
        </motion.div>

        <div className="lg:w-2/3 w-full">
          <div className="space-y-4">
            {experiences.map((experience, index) => {
              const isExpanded = expandedId === experience.id;
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card transition-all duration-500 overflow-hidden ${isExpanded ? "bg-white/[0.08] ring-1 ring-violet-500/30" : "hover:bg-white/[0.04]"
                    }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : experience.id)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-colors ${isExpanded ? "bg-violet-500 text-white" : "bg-white/5 text-violet-400"
                        }`}>
                        <BsBriefcaseFill size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {experience.company} • {experience.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-500">
                      {isExpanded ? <BsDash size={24} /> : <BsPlus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/5">
                          {experience.highlights ? (
                            <ul className="list-disc list-outside ml-4 space-y-3 text-slate-400 text-sm leading-relaxed">
                              {experience.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="pl-2">{highlight}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {experience.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
