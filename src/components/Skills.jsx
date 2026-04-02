import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills } from "../assets/user_data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
            Skills & Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Technical <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <Marquee
          gradient={true}
          gradientColor={[10, 13, 26]}
          gradientWidth={100}
          speed={50}
          pauseOnHover={true}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-10 group"
            >
              <div className="glass-card p-6 flex flex-col items-center justify-center min-w-[140px] transition-all duration-300 group-hover:bg-white/10 group-hover:-translate-y-2">
                <div className="text-4xl text-violet-400 mb-3 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
