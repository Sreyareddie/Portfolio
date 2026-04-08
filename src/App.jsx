import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Background from "./components/Background";
import Experience from "./components/Experience";

const MENU_ITEMS = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", ...MENU_ITEMS.map((item) => item.toLowerCase())];

    const updateActiveSection = () => {
      const viewportBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.documentElement.scrollHeight;

      if (viewportBottom >= pageBottom - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="text-slate-200 min-h-screen relative">
      <Background activeSection={activeSection} />
      <Navbar activeSection={activeSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
