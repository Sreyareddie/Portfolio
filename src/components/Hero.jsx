import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { stats, heroData } from "../assets/user_data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center py-20 lg:py-32 gap-16"
    >
      {/* Top Row: Intro & Image */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Hi, I&apos;m <br />
              <span className="text-gradient">{heroData.name}</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              {heroData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#projects"
                className="btn-primary px-12"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-10 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 mt-16 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square mx-auto">
            {/* Decorative rings with better gradients */}
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/10 animate-[spin_15s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-cyan-500/5 animate-[spin_20s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl -z-10" />

            <motion.img
              src={assets.hero}
              alt="Hero"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(124,58,237,0.2)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Stats */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card p-6 text-center group hover:bg-white/10 transition-colors rounded-2xl"
          >
            <div className="text-3xl font-bold text-white group-hover:text-violet-400 transition-colors">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 uppercase tracking-wider mt-2 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
