import type { Language } from "../Types";
import { interpolate } from "../Utils";
import translations from "../translations.json";

interface AboutSectionProps {
  selectedLanguage: Language;
}

const AboutSection = ({ selectedLanguage }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {translations[selectedLanguage].nav.about}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-slate-300 to-slate-700 rounded-3xl p-1">
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
                  <img src="https://iviou.ch/img/me.png" />
                  {/* <div className="text-center"> */}
                  {/* <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">IV</span>
                    </div>
                    <p className="text-gray-400">Photo profile</p> */}
                  {/* </div> */}
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500 rounded-full animate-pulse"
                style={{
                  animationDuration: "4s",
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-ping"
                style={{
                  animationDuration: "2s",
                }}
              />
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {interpolate(translations[selectedLanguage].about.dev, {
                    dev: (
                      <span className="text-violet-400 font-semibold">
                        {translations[selectedLanguage].common.dev}
                      </span>
                    ),
                  })}
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {interpolate(translations[selectedLanguage].about.ux, {
                    ux: (
                      <span className="text-pink-400 font-semibold">
                        {translations[selectedLanguage].about.ux_text}
                      </span>
                    ),
                  })}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <div className="text-2xl font-bold text-violet-400 mb-1">
                    {new Date().getUTCFullYear() - 2017} +
                  </div>
                  <div className="text-sm text-gray-400">
                    {" "}
                    {translations[selectedLanguage].common.years}
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <div className="text-2xl font-bold text-pink-400 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">
                    {" "}
                    {translations[selectedLanguage].common.projects}
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    ∞
                  </div>
                  <div className="text-sm text-gray-400">
                    {translations[selectedLanguage].common.passion}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
