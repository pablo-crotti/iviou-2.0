import { useState, useEffect } from "react";

import translations from "../translations.json";
import type { Language, Translations } from "../Types";

interface NavigationProps {
  activeSection: string;
  selectedLanguage: Language;
}

const Navigation = ({ activeSection, selectedLanguage }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 w-full flex justify-center px-4 py-8 bg-slate-900 border-b border-slate-400 md:border-0 md:bg-black/0 md:p-4 md:bg-gradient-to-b md:from-slate-900 md:to-slate-900/0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <button
        className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div className="hidden md:block bg-slate-800/80 backdrop-blur-md w-max rounded-full px-6 py-3 border border-slate-700/50">
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

      {menuOpen && (
        <div className="fixed inset-0 z-40 h-screen  bg-slate-800/30 flex items-start justify-end md:hidden ">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative bg-slate-900 border-b w-full backdrop-blur-md w-64  shadow-lg  border-l border-slate-700/50 flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4 mt-8 bg-slate-900 w-full p-6">
              {Object.keys(translations.en.nav).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item
                        ? "text-white bg-gradient-to-r from-violet-600 to-pink-600"
                        : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {
                      translations[selectedLanguage as Language].nav[
                        item as NavKey
                      ]
                    }
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
