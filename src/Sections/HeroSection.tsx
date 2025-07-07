import { ArrowDown } from "lucide-react";
import LanguageSelector from "../Components/LanguageSelector";
import { LANGUAGES_OPTIONS } from "../Constants/LanguageOptions";
import translations from "../translations.json";
import type { Language } from "../Types";
import { interpolate } from "../Utils";

interface HeroSectionProps {
  selectedLanguage: Language;
  setLanguage: (value: Language) => void;
}

const HeroSection = ({ selectedLanguage, setLanguage }: HeroSectionProps) => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-pink-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto ">
        <div className="flex flex-col w-full md:flex-row md:absolute gap-4 left-0 -top-30 justify-between mb-12 ">
          {LANGUAGES_OPTIONS.map((lang, index) => (
            <LanguageSelector
              key={index}
              label={lang.label}
              value={lang.value as Language}
              selected={lang.value == selectedLanguage}
              setLanguage={setLanguage}
            />
          ))}
        </div>
        <div className="mb-8 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-black tracking-wider mb-4 relative">
            <span className="text-white text-center">iviou</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full animate-pulse" />
        </div>

        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            {interpolate(translations[selectedLanguage].hero.dev, {
              frontend: (
                <span className="text-violet-400 font-semibold">Front-end</span>
              ),
              backend: (
                <span className="text-pink-400 font-semibold">Back-end</span>
              ),
            })}
          </p>

          <p className="text-lg md:text-xl text-gray-400 mt-2">
            {interpolate(translations[selectedLanguage].hero.designer, {
              uxui: (
                <span className="text-purple-400 font-semibold">UX/UI</span>
              ),
            })}
          </p>
        </div>

        <div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">
              {translations[selectedLanguage].hero.contact_me}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div
          className="relative mt-20 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{
            animationDuration: "1.5s",
          }}
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:bg-slate-700/20 cursor-pointer p-4 rounded-sm hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-500 rounded-full animate-ping"
        style={{
          animationDuration: "7s",
        }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-pulse"
        style={{
          animationDuration: "2s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-400 rounded-full animate-ping"
        style={{ animationDuration: "4s" }}
      />
    </section>
  );
};

export default HeroSection;
