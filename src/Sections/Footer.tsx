const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                IVIOU
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Design & Code par <span className="text-violet-400">IVIOU</span> –
              2025
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm"
            >
              Retour en haut
            </button>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm"
            >
              CV PDF ↓
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-slate-700/30">
          <div className="text-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
