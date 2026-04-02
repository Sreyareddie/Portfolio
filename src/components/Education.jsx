import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
import { educations } from "../assets/user_data";

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            My <span className="text-gradient">Academic Journey</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Building a strong theoretical foundation through dedicated academic
            pursuits and continuous learning.
          </p>
        </motion.div>

        <div className="flex-1">
          <div className="space-y-6">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider px-3 py-1 bg-violet-400/10 rounded-full w-fit">
                    {education.duration}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-violet-400 mt-1">
                    <BsPersonWorkspace size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                      {education.title}
                    </h3>
                    <p className="text-slate-400">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
