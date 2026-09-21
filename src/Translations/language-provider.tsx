/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { dictionaries, Dictionary, Lang } from "./translations";

// type LanguageContextValue = {
//   lang: Lang;
//   t: Dictionary;
//   isBn: boolean;
//   toggle: () => void;
//   setLang: (lang: Lang) => void;
// };

// const LanguageContext = createContext<LanguageContextValue | null>(null);

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [lang, setLangState] = useState<Lang>("en");

//   // Restore saved choice (client-only → hydration-safe)
//   useEffect(() => {
//     const saved = window.localStorage.getItem("dgm-lang");
//     if (saved === "bn" || saved === "en") setLangState(saved);
//   }, []);

//   // Keep <html lang> in sync (a11y + SEO) and persist choice
//   useEffect(() => {
//     document.documentElement.lang = lang === "bn" ? "bn" : "en";
//     window.localStorage.setItem("dgm-lang", lang);
//   }, [lang]);

//   const setLang = useCallback((l: Lang) => setLangState(l), []);
//   const toggle = useCallback(
//     () => setLangState((prev) => (prev === "en" ? "bn" : "en")),
//     [],
//   );

//   const value: LanguageContextValue = {
//     lang,
//     t: dictionaries[lang],
//     isBn: lang === "bn",
//     toggle,
//     setLang,
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const ctx = useContext(LanguageContext);
//   if (!ctx)
//     throw new Error("useLanguage must be used inside <LanguageProvider>");
//   return ctx;
// }

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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // ব্যাকএন্ডে নতুন ভাষা সেভ করার ফাংশন
  const syncToBackend = async (newLang: Lang) => {
    if (!API_URL) return;
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      await fetch(`${API_URL}/user/language`, {
        method: "PATCH", // অথবা আপনার ব্যাকএন্ড অনুযায়ী POST / PUT
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ lang: newLang }),
      });
    } catch (error) {
      console.warn("Failed to sync language choice to backend:", error);
    }
  };

  // ১. ইনিশিয়াল লোড: প্রথমে localStorage থেকে নিবে, তারপর ব্যাকএন্ড থেকে ফেচ করবে
  useEffect(() => {
    const saved = window.localStorage.getItem("dgm-lang") as Lang | null;
    if (saved === "bn" || saved === "en") {
      setLangState(saved);
    }

    async function fetchFromBackend() {
      if (!API_URL) return;
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/user/language`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.lang === "bn" || data.lang === "en") {
            setLangState(data.lang);
            window.localStorage.setItem("dgm-lang", data.lang);
          }
        }
      } catch (error) {
        console.warn("Using local language fallback (backend unreachable)");
      }
    }

    fetchFromBackend();
  }, []);

  // ২. <html lang> ট্যাগ এবং localStorage আপডেট
  useEffect(() => {
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    window.localStorage.setItem("dgm-lang", lang);
  }, [lang]);

  // ৩. ভাষা সেট ও ব্যাকএন্ড সিঙ্ক
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    syncToBackend(l);
  }, []);

  // ৪. টগল ও ব্যাকএন্ড সিঙ্ক
  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "bn" : "en";
      syncToBackend(next);
      return next;
    });
  }, []);

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
