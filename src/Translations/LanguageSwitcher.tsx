"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-300 bg-white/70 p-1 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/70">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
          language === "en"
            ? "bg-primary text-white shadow-sm"
            : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("bn")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
          language === "bn"
            ? "bg-primary text-white shadow-sm"
            : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
