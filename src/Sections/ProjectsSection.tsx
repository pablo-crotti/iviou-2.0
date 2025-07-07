import { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Vue.js",
      description:
        "Application e-commerce complète avec panier, paiement et gestion admin.",
      technologies: ["Vue.js", "Laravel", "PHP"],
      role: "Fullstack",
      category: "fullstack",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Interface de visualisation de données avec charts interactifs.",
      technologies: ["Vue.js", "JavaScript", "CSS"],
      role: "Frontend",
      category: "dev",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Application Mobile UI",
      description:
        "Design complet d'une app mobile de fitness avec prototypage.",
      technologies: ["Figma", "Illustrator"],
      role: "UX/UI Designer",
      category: "design",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 4,
      title: "API REST Laravel",
      description: "API robuste pour application de gestion de projets.",
      technologies: ["Laravel", "PHP", "MySQL"],
      role: "Backend",
      category: "dev",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 5,
      title: "Branding & Identité",
      description: "Création d'identité visuelle complète pour startup tech.",
      technologies: ["Illustrator", "Figma"],
      role: "Brand Designer",
      category: "design",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 6,
      title: "Plateforme SaaS",
      description:
        "Plateforme complète de gestion de tâches avec authentification.",
      technologies: ["Vue.js", "Laravel", "API"],
      role: "Fullstack",
      category: "fullstack",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  const filters = [
    {
      id: "all",
      label: "Tous les projets",
      color: "from-violet-500 to-pink-500",
    },
    { id: "dev", label: "Développement", color: "from-blue-500 to-cyan-500" },
    { id: "design", label: "Design", color: "from-pink-500 to-rose-500" },
    {
      id: "fullstack",
      label: "Fullstack",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
    };
    return colors[tech] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-gradient-to-bl from-pink-600/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Une sélection de mes réalisations les plus représentatives
            </p>
          </div>

          {/* Filter Buttons */}
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">Screenshot projet</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-gradient-to-r from-violet-500 to-pink-500 text-white px-2 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs text-white px-2 py-1 rounded-full ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <button className="w-full bg-gradient-to-r from-violet-600/20 to-pink-600/20 hover:from-violet-600/30 hover:to-pink-600/30 border border-violet-500/30 text-violet-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                    Voir le projet →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-6">
              Intéressé par mon travail ?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 rounded-full hover:from-violet-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              Discutons de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
