import { motion } from "framer-motion";
import { aboutMe } from "../assets/user_data";
import { BsCheck2Circle, BsLightningCharge, BsCpu } from "react-icons/bs";

const About = () => {
  const focusAreas = [
    {
      icon: <BsCpu />,
      title: "Full Stack Depth",
      desc: "Architecting seamless end-to-end solutions from UI to DB."
    },
    {
      icon: <BsLightningCharge />,
      title: "Clean Code",
      desc: "Prioritizing maintainability through SOLID and OOP principles."
    },
    {
      icon: <BsCheck2Circle />,
      title: "Agile Mindset",
      desc: "Thriving in fast-paced, collaborative team environments."
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Column: Bio */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Crafting the future of <br />
            <span className="text-gradient">Digital Experiences</span>
          </h2>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            {aboutMe.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Focus Areas */}
        <motion.div
          className="lg:w-1/3 w-full space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-2 border-violet-500">
            Core Focus
          </h3>
          <div className="space-y-4">
            {focusAreas.map((focus, index) => (
              <div key={index} className="glass-card p-6 group hover:bg-white/10 transition-all duration-300">
                <div className="text-violet-400 text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {focus.icon}
                </div>
                <h4 className="text-white font-bold mb-1">{focus.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {focus.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
