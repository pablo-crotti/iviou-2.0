import { useState, useEffect } from "react";

import translations from "../translations.json";
import type { Language, Translations } from "../Types";

interface NavigationProps {
  activeSection: string;
  selectedLanguage: Language;
}

const Navigation = ({ activeSection, selectedLanguage }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavKey = keyof Translations[Language]["nav"];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 w-full flex justify-center p-4 bg-gradient-to-b from-slate-900 to-slate-900/0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-slate-800/80 backdrop-blur-md w-max rounded-full px-6 py-3 border border-slate-700/50">
        <ul className="flex items-center space-x-6">
          {Object.keys(translations.en.nav).map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item
                    ? "text-white bg-gradient-to-r from-violet-600 to-pink-600"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {translations[selectedLanguage as Language].nav[item as NavKey]}
                {activeSection === item && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur opacity-50" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
