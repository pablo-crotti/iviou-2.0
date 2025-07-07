import { useState } from "react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const skills = [
    // Development
    {
      name: "Vue.js",
      level: 90,
      category: "dev",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "PHP",
      level: 85,
      category: "dev",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Laravel",
      level: 88,
      category: "dev",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "JavaScript",
      level: 92,
      category: "dev",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "HTML/CSS",
      level: 95,
      category: "dev",
      color: "from-orange-500 to-red-500",
    },

    // Design
    {
      name: "Figma",
      level: 90,
      category: "design",
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Illustrator",
      level: 85,
      category: "design",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "UX Design",
      level: 88,
      category: "design",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "UI Design",
      level: 87,
      category: "design",
      color: "from-teal-500 to-green-500",
    },

    // Fullstack
    {
      name: "API REST",
      level: 85,
      category: "fullstack",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Bases de données",
      level: 82,
      category: "fullstack",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Git",
      level: 90,
      category: "fullstack",
      color: "from-gray-500 to-slate-500",
    },
  ];

  const filters = [
    { id: "all", label: "Toutes", color: "from-violet-500 to-pink-500" },
    { id: "dev", label: "Développement", color: "from-blue-500 to-cyan-500" },
    { id: "design", label: "Design", color: "from-pink-500 to-rose-500" },
    {
      id: "fullstack",
      label: "Fullstack",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-24 px-4 relative bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-600/5 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Maîtrise technique et créative pour donner vie à vos projets
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg transform scale-105`
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-sm font-medium bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 rounded-2xl blur transition-opacity duration-300 group-hover:opacity-5`}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg">
              Et toujours en train d'apprendre de nouvelles technologies ! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
