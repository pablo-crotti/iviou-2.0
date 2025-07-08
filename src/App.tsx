import { useEffect, useState } from "react";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";
import Footer from "./Sections/Footer";
import Navigation from "./Sections/Navigation";
import { LANGUAGES_OPTIONS } from "./Constants/LanguageOptions";
import type { Language } from "./Types";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const initialLanguage = LANGUAGES_OPTIONS.some(
    (el) => el.value == navigator.language
  )
    ? navigator.language
    : "en";

  const [selectedLanguage, setSelectedLanguage] = useState(
    initialLanguage as Language
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (window.scrollY <= window.innerHeight * 0.5) {
        setActiveSection("home");
      } else if (
        scrollY /
          (document.documentElement.scrollHeight - window.innerHeight) >=
        0.8
      ) {
        setActiveSection("contact");
      } else if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(
    scrollY / (document.documentElement.scrollHeight - window.innerHeight),
    1
  );

  return (
    <>
      <div className="relative bg-slate-900 text-white overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <Navigation
          activeSection={activeSection}
          selectedLanguage={selectedLanguage}
        />
        <HeroSection
          selectedLanguage={selectedLanguage}
          setLanguage={setSelectedLanguage}
        />
        <AboutSection selectedLanguage={selectedLanguage} />
        <SkillsSection selectedLanguage={selectedLanguage} />
        <ProjectsSection selectedLanguage={selectedLanguage} />
        <ContactSection selectedLanguage={selectedLanguage} />
        <Footer selectedLanguage={selectedLanguage} />
      </div>
    </>
  );
}

export default App;
