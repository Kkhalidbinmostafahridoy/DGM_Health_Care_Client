// /* eslint-disable @next/next/no-img-element */
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { CalendarCheck, Menu, PhoneCall } from "lucide-react";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import logoImg from "../../../public/LogoImg/DGM2.png";

// const NAV_ITEMS = [
//   { name: "Home", href: "/" },
//   { name: "Consultation", href: "/consultation" },
//   { name: "Health Plans", href: "/health-plans" },
//   { name: "Diagnosis", href: "/diagnosis" },
//   { name: "Treatment", href: "/treatment" },
//   { name: "NGOs", href: "/ngos" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact" },
// ];

// /* Reusable button-style classes (since Base UI Button doesn't support asChild) */
// const btnPrimary =
//   "inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500";
// const btnOutline =
//   "inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50";

// export default function PublicNavbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   return (
//     <header className="sticky top-0 z-50">
//       {/* ----------------------------- Main navbar ----------------------------- */}
//       <div className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           <Link href="/" aria-label="DGM HealthCare — Home">
//             <img src={logoImg.src} alt="DGM Logo" className="h-14 w-auto" />
//           </Link>

//           {/* Desktop links */}
//           <nav aria-label="Main navigation" className="hidden lg:block">
//             <ul className="flex items-center gap-1">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     aria-current={isActive(item.href) ? "page" : undefined}
//                     className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
//                       isActive(item.href)
//                         ? "bg-sky-50 text-sky-700"
//                         : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Desktop CTAs — plain styled Link, NO Button wrapper, NO asChild */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link href="/Login" className={btnOutline}>
//               Login
//             </Link>
//           </div>

//           {/* Mobile trigger — SheetTrigger's OWN button, styled directly.
//               NO nested <Button>, NO asChild → single <button>, zero hydration errors */}
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger
//               className="inline-flex size-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
//               aria-label="Open navigation menu"
//             >
//               <Menu className="h-5 w-5" aria-hidden />
//             </SheetTrigger>

//             <SheetContent side="right" className="w-80 overflow-y-auto">
//               <SheetHeader className="border-b border-slate-100 pb-4 text-left">
//                 <SheetTitle>
//                   <img
//                     src={logoImg.src}
//                     alt="DGM Logo"
//                     className="h-14 w-auto"
//                   />
//                 </SheetTitle>
//                 <SheetDescription className="sr-only">
//                   Main navigation menu
//                 </SheetDescription>
//               </SheetHeader>

//               {/* Mobile links */}
//               <nav aria-label="Mobile navigation" className="px-4 pt-4">
//                 <ul className="flex flex-col gap-1">
//                   {NAV_ITEMS.map((item) => (
//                     <li key={item.name}>
//                       <Link
//                         href={item.href}
//                         onClick={() => setOpen(false)}
//                         aria-current={isActive(item.href) ? "page" : undefined}
//                         className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
//                           isActive(item.href)
//                             ? "bg-sky-50 text-sky-700"
//                             : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                         }`}
//                       >
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>

//               {/* Mobile CTAs — styled Links */}
//               <div className="flex flex-col gap-2 px-4 pt-6">
//                 <Link
//                   href="/appointments"
//                   onClick={() => setOpen(false)}
//                   className={btnPrimary}
//                 >
//                   <CalendarCheck className="h-4 w-4" aria-hidden />
//                   Book Appointment
//                 </Link>
//                 <div className="flex flex-col gap-2 px-4 pt-6">
//                   <Link
//                     href="/Login"
//                     onClick={() => setOpen(false)}
//                     className={btnOutline}
//                   >
//                     Login
//                   </Link>
//                 </div>
//               </div>

//               {/* Mobile emergency */}
//               <div className="mt-6 border-t border-slate-100 px-4 pt-4 pb-6">
//                 <a
//                   href="tel:+8801756959451"
//                   className="flex items-center justify-center gap-2 rounded-full bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
//                 >
//                   <PhoneCall className="h-4 w-4" aria-hidden />
//                   Emergency: +880 1756-959451
//                 </a>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, PhoneCall } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import logoImg from "../../../public/LogoImg/DGM2.png";
import { useLanguage } from "@/Translations/language-provider";
import { LanguageToggle } from "@/Translations/language-toggle";

type NavKey =
  | "home"
  | "consultation"
  | "healthPlans"
  | "diagnosis"
  | "treatment"
  | "ngos"
  | "blog"
  | "contact";

const NAV_ITEMS: { key: NavKey; href: string }[] = [
  { key: "home", href: "/" },
  { key: "consultation", href: "/consultation" },
  { key: "healthPlans", href: "/health-plans" },
  { key: "diagnosis", href: "/diagnosis" },
  { key: "treatment", href: "/treatment" },
  { key: "ngos", href: "/ngos" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500";
const btnOutline =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50";

export default function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="DGM HealthCare — Home">
            <img src={logoImg.src} alt="DGM Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive(item.href)
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {t.navbar[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop: 3D language toggle BESIDE Login */}
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle />
            <Link href="/Login" className={btnOutline}>
              {t.navbar.login}
            </Link>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label={t.navbar.openMenu}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </SheetTrigger>

            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader className="border-b border-slate-100 pb-4 text-left">
                <SheetTitle>
                  <img
                    src={logoImg.src}
                    alt="DGM Logo"
                    className="h-14 w-auto"
                  />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t.navbar.mobileMenuDesc}
                </SheetDescription>
              </SheetHeader>

              {/* Toggle inside mobile menu too */}
              <div className="flex justify-center px-4 pt-4">
                <LanguageToggle />
              </div>

              <nav aria-label="Mobile navigation" className="px-4 pt-4">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                          isActive(item.href)
                            ? "bg-sky-50 text-sky-700"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {t.navbar[item.key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-2 px-4 pt-6">
                <Link
                  href="/appointments"
                  onClick={() => setOpen(false)}
                  className={btnPrimary}
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  {t.navbar.bookAppointment}
                </Link>
                <Link
                  href="/Login"
                  onClick={() => setOpen(false)}
                  className={btnOutline}
                >
                  {t.navbar.login}
                </Link>
              </div>

              <div className="mt-6 border-t border-slate-100 px-4 pt-4 pb-6">
                <a
                  href="tel:+8801756959451"
                  className="flex items-center justify-center gap-2 rounded-full bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  {t.navbar.emergency}: +880 1756-959451
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
