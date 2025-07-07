import type { Language } from "../Types";

interface LanguageSelectorProps {
  label: string;
  value: Language;
  selected: boolean;
  setLanguage: (value: Language) => void;
}

const LanguageSelector = ({
  label,
  value,
  selected,
  setLanguage,
}: LanguageSelectorProps) => {
  return (
    <div className="relative group">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-white bg-slate-800 shadow-2xl cursor-pointer disabled:cursor-auto rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out "
        disabled={selected}
        onClick={() => setLanguage(value)}
      >
        <span
          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 p-[2px] transition-opacity duration-500 group-hover:opacity-100 ${
            selected ? "opacity-100" : "opacity-0"
          }`}
        ></span>

        <span
          className={`relative z-10 block px-6 py-3 rounded-xl ${
            selected ? "" : "bg-slate-900"
          }`}
        >
          <div className="relative z-10 flex items-center space-x-2">
            <span className="transition-all duration-500">{label}</span>
          </div>
        </span>
      </button>
    </div>
  );
};

export default LanguageSelector;
