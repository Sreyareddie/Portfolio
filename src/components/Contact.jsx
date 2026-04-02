import React from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../assets/user_data";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="glass-card p-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px] -z-10" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;m always open to
              discussing new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map(({ id, href, icon }, index) => (
              <motion.a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-4 glass-card hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="text-slate-300 group-hover:text-violet-400 transition-colors">
                  {React.cloneElement(
                    React.isValidElement(icon) ? icon : <span>{icon}</span>,
                    { size: 28 },
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
