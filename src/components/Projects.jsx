import { motion } from "framer-motion";
import { projectData } from "../assets/user_data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
            Projects Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work across web development and software engineering.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="group relative glass-card glow-card p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden border-white/5 hover:border-violet-500/30 hover:bg-white/[0.08]"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-3xl group-hover:bg-violet-500/10 transition-colors" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, tid) => (
                  <span key={tid} className="px-2 py-1 text-[10px] font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex items-center gap-6">
                {project.githubLink && project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.livedemo && project.livedemo !== "#" && (
                  <a
                    href={project.livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
