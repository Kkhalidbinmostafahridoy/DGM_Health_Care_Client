// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
// import "./globals.css";

// import { LanguageProvider } from "@/Translations/language-provider";
// import { ReactNode } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DGM_HealCare",
//   description: "A healthCare application built with Next.js ",
// };

// const hindSiliguri = Hind_Siliguri({
//   subsets: ["bengali"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-bengali",
//   display: "swap",
// });
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     // keep your existing <html>/<body> className, just merge these in
//     <html lang="en" className={hindSiliguri.variable}>
//       <body className={hindSiliguri.variable}>
//         <LanguageProvider>{children}</LanguageProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/Translations/language-provider";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DGM_HealCare",
  description: "A healthCare application built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
