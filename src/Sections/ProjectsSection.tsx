import { useState } from "react";
import type { Language } from "../Types";
import { PROJECTS } from "../Constants/Projects";
import translations from "../translations.json";

interface AboutSectionProps {
  selectedLanguage: Language;
}

const ProjectsSection = ({ selectedLanguage }: AboutSectionProps) => {
  const [activeFilter, setActiveFilter] = useState("all-projects");

  type FilterId = "all-projects" | "dev" | "design" | "fullstack";

  const filters: { id: FilterId; color: string }[] = [
    {
      id: "all-projects",
      color: "from-violet-500 to-pink-500",
    },
    { id: "dev", color: "from-blue-500 to-cyan-500" },
    { id: "design", color: "from-pink-500 to-rose-500" },
    {
      id: "fullstack",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all-projects"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Vue.js": "bg-green-500",
      Laravel: "bg-red-500",
      PHP: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      CSS: "bg-orange-500",
      Figma: "bg-purple-500",
      Illustrator: "bg-pink-500",
      MySQL: "bg-blue-600",
      API: "bg-indigo-500",
      HTML: "bg-red-500",
      Wordpress: "bg-blue-700",
      WooComerce: "bg-purple-600",
      Elementor: "bg-green-600",
      Divi: "bg-teal-500",
      "A-Frame": "bg-gray-600",
      WebVR: "bg-gray-700",
      "Next.js": "bg-red-600",
      "Tailwind CSS": "bg-teal-400",
      "Express.js": "bg-blue-800",
      Angular: "bg-blue-900",
    };
    return colors[tech] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-gradient-to-bl from-pink-600/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {translations[selectedLanguage].nav.projects}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {translations[selectedLanguage].projects.slogan}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg transform scale-105`
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
                }`}
              >
                {translations[selectedLanguage].common[filter.id]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
                  {project.image ? (
                    <img
                      src={`${project.image}`}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">
                              {translations[selectedLanguage].projects.titles[
                                project.title as keyof (typeof translations)[typeof selectedLanguage]["projects"]["titles"]
                              ].charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{" "}
                    </>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {
                        translations[selectedLanguage].projects.titles[
                          project.title as keyof (typeof translations)[typeof selectedLanguage]["projects"]["titles"]
                        ]
                      }
                    </h3>
                    <span className="text-xs bg-gradient-to-r from-violet-500 to-pink-500 text-white px-2 py-1 rounded-full">
                      {
                        translations[selectedLanguage].common[
                          project.category as keyof (typeof translations)[typeof selectedLanguage]["common"]
                        ]
                      }
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {
                      translations[selectedLanguage].projects.descs[
                        project.description as keyof (typeof translations)[typeof selectedLanguage]["projects"]["descs"]
                      ]
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs text-white px-2 py-1 capitalize rounded-full ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.buttonText && (
                    <a
                      className="w-full block text-center bg-gradient-to-r from-violet-600/20 to-pink-600/20 hover:from-violet-600/30 hover:to-pink-600/30 border border-violet-500/30 text-violet-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        translations[selectedLanguage].buttons[
                          project.buttonText as keyof (typeof translations)[typeof selectedLanguage]["buttons"]
                        ]
                      }{" "}
                      →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-6">
              {translations[selectedLanguage].projects.talk}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 rounded-full hover:from-violet-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              {translations[selectedLanguage].buttons.talk}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
