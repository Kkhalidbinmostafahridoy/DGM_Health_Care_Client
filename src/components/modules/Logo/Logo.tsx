// "use client";

// import { useId } from "react";
// import Link from "next/link";

// /* ------------------------------ Logo Mark -------------------------------- */
// /* Heart-shield built from the "D" (navy, left) and "G" (gold, right) strokes,
//    with an "M" monogram + rising gold arrow + cyan pulse in the center.      */

// const GOLD_LIGHT = "#E9C97E";
// const GOLD_DEEP = "#C08A2D";
// const NAVY_TEXT = "#1C3D5F";

// export function LogoMark({
//   className = "h-10 w-10",
//   inverted = false,
// }: {
//   className?: string;
//   /** Use on dark backgrounds — navy strokes become white */
//   inverted?: boolean;
// }) {
//   // unique IDs per instance (logo renders in navbar + footer + mobile sheet)
//   const id = useId().replace(/:/g, "");
//   const goldId = `dgm-gold-${id}`;
//   const cyanId = `dgm-cyan-${id}`;
//   const navyId = `dgm-navy-${id}`;

//   const navy = inverted ? "#FFFFFF" : `url(#${navyId})`;
//   const gold = `url(#${goldId})`;
//   const cyan = `url(#${cyanId})`;

//   return (
//     <svg
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       role="img"
//       aria-label="DGM HealthCare logo"
//       className={className}
//     >
//       <defs>
//         <linearGradient
//           id={goldId}
//           x1="14"
//           y1="58"
//           x2="60"
//           y2="8"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor={GOLD_DEEP} />
//           <stop offset="1" stopColor={GOLD_LIGHT} />
//         </linearGradient>
//         <linearGradient
//           id={cyanId}
//           x1="24"
//           y1="50"
//           x2="40"
//           y2="40"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#1668A5" />
//           <stop offset="1" stopColor="#35C3F0" />
//         </linearGradient>
//         <linearGradient
//           id={navyId}
//           x1="8"
//           y1="10"
//           x2="30"
//           y2="58"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#27507A" />
//           <stop offset="1" stopColor="#152F4C" />
//         </linearGradient>
//       </defs>

//       {/* Left lobe — the "D" (navy) */}
//       <path
//         d="M24 11C15 5.5 5 11.5 5 23c0 11 13 23 27 34"
//         stroke={navy}
//         strokeWidth="6.5"
//         strokeLinecap="round"
//       />

//       {/* Right lobe — the "G" (gold, hook flicks inward) */}
//       <path
//         d="M40 11c9-5.5 19 .5 19 12 0 9.5-5.5 17.5-13 23l-8-4"
//         stroke={gold}
//         strokeWidth="6.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       {/* M monogram (navy) */}
//       <path
//         d="M21 42V21l11 13 11-13v13"
//         stroke={navy}
//         strokeWidth="6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       {/* Rising arrow (gold) — shoots up between the lobes */}
//       <path
//         d="M37 25 44 17.5"
//         stroke={gold}
//         strokeWidth="5"
//         strokeLinecap="round"
//       />
//       <path d="M48.5 13 46.4 19.9 41.7 15.1Z" fill={gold} />

//       {/* Cyan pulse chevron (healthcare accent) */}
//       <path
//         d="M24 49.5l8-7.5 8 7.5"
//         stroke={cyan}
//         strokeWidth="5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// /* ------------------------------- Full Logo ------------------------------- */

// type LogoProps = {
//   /** White/navy-swapped version for dark backgrounds (footer) */
//   inverted?: boolean;
//   className?: string;
// };

// export function Logo({ inverted = false, className }: LogoProps) {
//   return (
//     <Link
//       href="/"
//       aria-label="DGM HealthCare — Home"
//       className="inline-flex items-center gap-2.5"
//     >
//       <LogoMark className={className ?? "h-10 w-10"} inverted={inverted} />
//       <span className="flex flex-col leading-none">
//         <span
//           className={`text-xl font-extrabold tracking-wide ${
//             inverted ? "text-white" : "text-[#1C3D5F]"
//           }`}
//         >
//           DGM
//         </span>
//         <span
//           className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] ${
//             inverted ? "text-[#E9C97E]" : "text-[#C08A2D]"
//           }`}
//         >
//           HealthCare
//         </span>
//       </span>
//     </Link>
//   );
// }

// components/logo.tsx
import Link from "next/link";

type LogoProps = {
  /** Use on dark backgrounds (e.g., Footer) */
  inverted?: boolean;
  /** Scale logo size */
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Logo({
  inverted = false,
  size = "md",
  className = "",
}: LogoProps) {
  const containerSizes = {
    sm: "h-9 w-9 rounded-xl",
    md: "h-12 w-12 rounded-2xl",
    lg: "h-16 w-16 rounded-3xl",
  };

  const mainTextSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const subTextSizes = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.25em]",
    lg: "text-[12px] tracking-[0.3em]",
  };

  return (
    <Link
      href="/"
      aria-label="DGM HealthCare — Home"
      className={`inline-flex items-center gap-3.5 group transition-transform duration-200 hover:scale-[1.01] ${className}`}
    >
      {/* App Icon Container */}
      <span
        aria-hidden
        className={`relative flex shrink-0 ${containerSizes[size]} items-center justify-center bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-500 p-2 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow`}
      >
        {/* Interlocked Metallic DGM Emblem SVG */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-md"
        >
          <defs>
            {/* Blue Gradient */}
            <linearGradient
              id="dgmBlueGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Gold Gradient */}
            <linearGradient
              id="dgmGoldGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>

          {/* D Outer Shield Half (Blue) */}
          <path
            d="M 22 20 C 22 18 24 16 26 16 L 45 16 C 62 16 70 30 65 48 C 60 65 45 84 26 84 C 24 84 22 82 22 80 Z"
            fill="url(#dgmBlueGrad)"
            stroke="#0284c7"
            strokeWidth="1.5"
          />

          {/* G Outer Shield Loop & Arrow Interlock (Gold) */}
          <path
            d="M 45 16 C 65 16 80 32 80 50 C 80 68 66 84 46 84 C 40 84 32 80 28 75 C 27 73 28 70 30 70 L 38 70 C 40 70 42 71 44 73 C 54 78 68 70 68 52 C 68 38 58 26 45 26 L 38 26 L 45 16 Z"
            fill="url(#dgmGoldGrad)"
            stroke="#fef08a"
            strokeWidth="1"
          />

          {/* Central M Growth Pulse Arrow */}
          <path
            d="M 30 65 L 42 42 L 50 54 L 62 30 L 52 30 L 62 30 L 62 40"
            stroke="url(#dgmGoldGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div
          className={`font-serif font-black leading-none ${mainTextSizes[size]}`}
        >
          <span className={inverted ? "text-white" : "text-slate-950"}>
            DGM{" "}
          </span>
          <span className="text-[#0099ff] font-bold">HealthCare</span>
        </div>

        <span
          className={`font-serif font-medium uppercase leading-tight mt-1 ${subTextSizes[size]} ${
            inverted ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Medical Excellence
        </span>
      </div>
    </Link>
  );
}
