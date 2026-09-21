/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dictionaries, Dictionary, Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  isBn: boolean;
  toggle: () => void;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved choice (client-only → hydration-safe)
  useEffect(() => {
    const saved = window.localStorage.getItem("dgm-lang");
    if (saved === "bn" || saved === "en") setLangState(saved);
  }, []);

  // Keep <html lang> in sync (a11y + SEO) and persist choice
  useEffect(() => {
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    window.localStorage.setItem("dgm-lang", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "bn" : "en")),
    [],
  );

  const value: LanguageContextValue = {
    lang,
    t: dictionaries[lang],
    isBn: lang === "bn",
    toggle,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
