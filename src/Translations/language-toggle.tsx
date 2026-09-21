"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./language-provider";

const SPIN_MS = 500;

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { isBn, toggle } = useLanguage();

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(() => (isBn ? 180 : 0));

  const endTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!spinning) {
      setRotation(isBn ? 180 : 0);
    }
  }, [isBn, spinning]);

  useEffect(() => {
    return () => {
      if (endTimer.current) clearTimeout(endTimer.current);
    };
  }, []);

  const handleClick = () => {
    if (spinning) return;

    setSpinning(true);
    setRotation((prev) => prev + (isBn ? -180 : 180));
    toggle();

    endTimer.current = setTimeout(() => setSpinning(false), SPIN_MS);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      role="switch"
      aria-checked={isBn}
      aria-label={
        isBn ? "Switch language to English" : "ভাষা বাংলায় পরিবর্তন করুন"
      }
      title={isBn ? "English" : "বাংলা"}
      className={`relative flex h-9 w-32 shrink-0 cursor-pointer items-center justify-between rounded-full bg-sky-50/80 px-3 py-1 border border-sky-200/80 shadow-sm hover:bg-sky-100/70 select-none outline-none focus-visible:ring-2 focus-visible:ring-sky-500 active:scale-95 transition-all ${className}`}
    >
      {/* Left: Indicator Dot + 3D Rotating Text */}
      <div className="flex items-center gap-2 pl-0.5">
        {/* Soft Blue Indicator Dot */}
        <span className="h-2 w-2 rounded-full bg-sky-600 shadow-[0_0_6px_#0284c7]" />

        {/* 3D Rotating Text */}
        <div className="relative h-5 w-16" style={{ perspective: "400px" }}>
          <div
            className="transform-gpu relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: `transform ${SPIN_MS}ms cubic-bezier(0.4, 0.2, 0.1, 1)`,
              willChange: "transform",
            }}
          >
            {/* FRONT TEXT (English) */}
            <span
              className="absolute inset-0 flex items-center justify-start text-xs font-bold text-sky-950 tracking-wide"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              English
            </span>

            {/* BACK TEXT (বাংলা) */}
            <span
              className="absolute inset-0 flex items-center justify-start text-xs font-bold text-sky-950 tracking-wide"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              বাংলা
            </span>
          </div>
        </div>
      </div>

      {/* Globe Icon Badge */}
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white shadow-xs">
        <Globe className="h-3.5 w-3.5" />
      </div>
    </button>
  );
}
