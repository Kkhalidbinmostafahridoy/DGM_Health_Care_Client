// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Globe } from "lucide-react";
// import { useLanguage } from "./language-provider";

// const SPIN_MS = 500;

// export function LanguageToggle({ className = "" }: { className?: string }) {
//   const { isBn, toggle } = useLanguage();

//   const [spinning, setSpinning] = useState(false);
//   const [rotation, setRotation] = useState(() => (isBn ? 180 : 0));

//   const endTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Synchronize rotation state if language is toggled externally
//   useEffect(() => {
//     if (!spinning) {
//       setRotation(isBn ? 180 : 0);
//     }
//   }, [isBn, spinning]);

//   // Clean up timer on unmount
//   useEffect(() => {
//     return () => {
//       if (endTimer.current) clearTimeout(endTimer.current);
//     };
//   }, []);

//   const handleClick = () => {
//     if (spinning) return;

//     setSpinning(true);
//     // Smooth 3D flip rotation for the text only
//     setRotation((prev) => prev + (isBn ? -180 : 180));
//     toggle();

//     endTimer.current = setTimeout(() => setSpinning(false), SPIN_MS);
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       role="switch"
//       aria-checked={isBn}
//       aria-label={
//         isBn ? "Switch language to English" : "ভাষা বাংলায় পরিবর্তন করুন"
//       }
//       title={isBn ? "English" : "বাংলা"}
//       className={`relative flex h-10 w-32 shrink-0 cursor-pointer items-center justify-between rounded-full bg-[#00423a] px-3 py-1 text-white border border-[#005a4f]/40 shadow-[0_6px_16px_rgba(0,35,30,0.3)] select-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 active:scale-95 transition-transform ${className}`}
//     >
//       {/* Left Group: Constant Indicator Dot + 3D Rotating Text */}
//       <div className="flex items-center gap-2 pl-1">
//         {/* Global Icon */}
//         <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#022c26] text-[#2bd9a5]">
//           <Globe className="h-4 w-4" />
//         </div>

//         {/* 3D Rotating Text Container ONLY */}
//         <div className="relative h-5 w-16" style={{ perspective: "400px" }}>
//           <div
//             className="transform-gpu relative h-full w-full"
//             style={{
//               transformStyle: "preserve-3d",
//               transform: `rotateY(${rotation}deg)`,
//               transition: `transform ${SPIN_MS}ms cubic-bezier(0.4, 0.2, 0.1, 1)`,
//               willChange: "transform",
//             }}
//           >
//             {/* FRONT TEXT (English) */}
//             <span
//               className="absolute inset-0 flex items-center justify-start text-sm font-serif font-bold text-white tracking-wide"
//               style={{
//                 backfaceVisibility: "hidden",
//                 WebkitBackfaceVisibility: "hidden",
//               }}
//             >
//               English
//             </span>

//             {/* BACK TEXT (বাংলা) */}
//             <span
//               className="absolute inset-0 flex items-center justify-start text-sm font-bold text-white tracking-wide"
//               style={{
//                 backfaceVisibility: "hidden",
//                 WebkitBackfaceVisibility: "hidden",
//                 transform: "rotateY(180deg)",
//               }}
//             >
//               বাংলা
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Constant Neon Green Dot */}
//       <div className="h-3 w-3 rounded-full bg-[#2bd9a5] shadow-[0_0_6px_#2bd9a5]">
//         <span className="h-2.5 w-2.5 rounded-full bg-[#00e599] shadow-[0_0_8px_#00e599]" />
//       </div>
//     </button>
//   );
// }

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
