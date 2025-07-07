import { useState } from "react";
import { Github, Gitlab, Linkedin } from "lucide-react";
import type { Language } from "../Types";
import translations from "../translations.json";

interface AboutSectionProps {
  selectedLanguage: Language;
}

const ContactSection = ({ selectedLanguage }: AboutSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-600/5 to-pink-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-600/5 to-blue-600/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {translations[selectedLanguage].nav.contact}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {translations[selectedLanguage].contact.slogan}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {translations[selectedLanguage].contact.talk}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {translations[selectedLanguage].contact.talk_text}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full" />
                    <span className="text-gray-300">
                      {translations[selectedLanguage].contact.answer}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-300">
                      {translations[selectedLanguage].contact.free}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-300">
                      {translations[selectedLanguage].contact.custom}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {translations[selectedLanguage].contact.follow}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/pablo-crotti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-violet-600 to-violet-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-violet-500/25"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href="https://gitlab.com/pablo.crotti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <Gitlab size={20} className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pablo-crotti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {translations[selectedLanguage].contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder={translations[selectedLanguage].contact.name_p}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {translations[selectedLanguage].contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder={translations[selectedLanguage].contact.email_p}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {translations[selectedLanguage].contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={
                      translations[selectedLanguage].contact.message_p
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r cursor-pointer from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
                >
                  {translations[selectedLanguage].contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
