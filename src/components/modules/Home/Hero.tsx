// /* eslint-disable @next/next/no-img-element */
// // components/hero.tsx
// import type { LucideIcon } from "lucide-react";
// import {
//   ArrowRight,
//   Award,
//   Baby,
//   Bone,
//   Brain,
//   CalendarCheck,
//   Clock,
//   Eye,
//   HeartPulse,
//   MapPin,
//   PhoneCall,
//   Pill,
//   PlayCircle,
//   ShieldCheck,
//   Star,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// /* ------------------------------ Data & Types ------------------------------ */

// type Stat = {
//   icon: LucideIcon;
//   value: string;
//   label: string;
// };

// type TrustedUser = {
//   src: string;
//   fallback: string;
// };

// type Specialty = {
//   icon: LucideIcon;
//   label: string;
// };

// const STATS: Stat[] = [
//   { icon: Users, value: "50K+", label: "Happy Patients" },
//   { icon: Stethoscope, value: "120+", label: "Expert Doctors" },
//   { icon: Award, value: "25+", label: "Years of Experience" },
//   { icon: Star, value: "4.9/5", label: "Patient Rating" },
// ];

// const SPECIALTIES: Specialty[] = [
//   { icon: HeartPulse, label: "Cardiology" },
//   { icon: Brain, label: "Neurology" },
//   { icon: Bone, label: "Orthopedics" },
//   { icon: Baby, label: "Pediatrics" },
//   { icon: Eye, label: "Ophthalmology" },
//   { icon: Pill, label: "Pharmacy" },
// ];

// const TRUSTED_USERS: TrustedUser[] = [
//   { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "SK" },
//   { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JD" },
//   { src: "https://randomuser.me/api/portraits/women/68.jpg", fallback: "AM" },
//   { src: "https://randomuser.me/api/portraits/men/75.jpg", fallback: "RB" },
// ];

// /* -------------------------------- Component ------------------------------- */

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-emerald-50/40 to-white"
//     >
//       {/* Decorative blurred blobs */}
//       <div aria-hidden className="pointer-events-none absolute inset-0">
//         <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
//         <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* --------------------------- Left: Copy --------------------------- */}
//           <div className="max-w-xl">
//             {/* Announcement badge */}
//             <Badge
//               variant="outline"
//               className="mb-6 gap-2 rounded-full border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//               </span>
//               24/7 Emergency &amp; Ambulance Available
//             </Badge>

//             {/* Headline */}
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//               Your Health,
//               <br />
//               Our{" "}
//               <span className="relative inline-block text-sky-600">
//                 Top Priority
//                 <svg
//                   aria-hidden
//                   viewBox="0 0 200 12"
//                   fill="none"
//                   className="absolute -bottom-2 left-0 w-full text-sky-300"
//                 >
//                   <path
//                     d="M2 9C50 3 150 3 198 9"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             {/* Sub-copy */}
//             <p className="mt-6 text-lg leading-relaxed text-gray-600">
//               DGM HealthCare connects you with world-class doctors, advanced
//               diagnostics, and compassionate care. Book appointments, consult
//               online, and manage your entire health journey in one place.
//             </p>

//             {/* CTAs */}
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Button
//                 size="lg"
//                 className="rounded-full px-8 shadow-lg shadow-sky-600/25"
//               >
//                 <CalendarCheck className="mr-2 h-5 w-5" />
//                 Book Appointment
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//               <Button size="lg" variant="outline" className="rounded-full px-8">
//                 <PlayCircle className="mr-2 h-5 w-5" />
//                 Our Services
//               </Button>
//             </div>

//             {/* ✨ NEW: Popular specialties quick links */}
//             <div className="mt-8 border-t border-gray-200/70 pt-6">
//               <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
//                 Popular Specialties
//               </p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {SPECIALTIES.map(({ icon: Icon, label }) => (
//                   <a
//                     key={label}
//                     href="#specialties"
//                     className="group flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
//                   >
//                     <Icon className="h-4 w-4 text-sky-600 transition group-hover:scale-110" />
//                     {label}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Social proof */}
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <div className="flex -space-x-3">
//                 {TRUSTED_USERS.map((user) => (
//                   <Avatar
//                     key={user.fallback}
//                     className="h-10 w-10 border-2 border-white"
//                   >
//                     <AvatarImage src={user.src} alt={user.fallback} />
//                     <AvatarFallback className="bg-sky-100 text-xs font-semibold text-sky-700">
//                       {user.fallback}
//                     </AvatarFallback>
//                   </Avatar>
//                 ))}
//               </div>
//               <div>
//                 <div className="flex items-center gap-0.5 text-amber-400">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className="h-4 w-4 fill-current" />
//                   ))}
//                 </div>
//                 <p className="mt-0.5 text-sm text-gray-600">
//                   Trusted by{" "}
//                   <span className="font-semibold text-gray-900">
//                     50,000+ patients
//                   </span>
//                 </p>
//               </div>
//             </div>

//             {/* ✨ NEW: Location & OPD hours */}
//             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
//               <span className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4 text-red-500" />
//                 DGM Health Campus, MG Road, Banani
//               </span>
//               <span className="flex items-center gap-2">
//                 <Clock className="h-4 w-4 text-sky-600" />
//                 Mon–Sat: 8 AM – 8 PM · Sun: Emergency
//               </span>
//             </div>
//           </div>

//           {/* -------------------------- Right: Visual ------------------------- */}
//           <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
//             {/* Floating brand icon */}
//             <div className="absolute -top-6 left-8 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 shadow-lg shadow-sky-600/30">
//               <HeartPulse className="h-7 w-7 text-white" />
//             </div>

//             {/* ✨ NEW: Experience badge */}
//             <div className="absolute -right-4 top-6 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg ring-1 ring-gray-100 sm:-right-6">
//               <span className="text-xl font-bold text-sky-600">25+</span>
//               <span className="px-1 text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-500">
//                 Years of care
//               </span>
//             </div>

//             {/* Hero image — replace with your own (use next/image in Next.js) */}
//             <div className="overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-sky-900/10">
//               <img
//                 src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
//                 alt="DGM HealthCare doctor with a stethoscope"
//                 className="h-[420px] w-full object-cover"
//                 loading="eager"
//               />
//             </div>

//             {/* Floating card: Doctors online */}
//             <Card className="absolute -left-4 top-16 w-44 animate-in fade-in slide-in-from-left-4 border-0 shadow-xl sm:-left-8">
//               <CardContent className="flex items-center gap-3 p-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
//                   <Stethoscope className="h-5 w-5 text-emerald-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-900">
//                     85+ Doctors
//                   </p>
//                   <p className="flex items-center gap-1.5 text-xs text-emerald-600">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                     Online now
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Floating card: Next appointment */}
//             <Card className="absolute -bottom-8 right-0 w-60 animate-in fade-in slide-in-from-bottom-4 border-0 shadow-xl sm:-right-6">
//               <CardContent className="p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100">
//                     <CalendarCheck className="h-5 w-5 text-sky-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-gray-900">
//                       Next Available
//                     </p>
//                     <p className="flex items-center gap-1 text-xs text-gray-500">
//                       <Clock className="h-3 w-3" />
//                       Today, 4:30 PM
//                     </p>
//                   </div>
//                 </div>
//                 <Button size="sm" className="mt-3 w-full rounded-full">
//                   Book Now
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* ✨ NEW: Floating card — OPD hours (hidden on small screens) */}
//             <Card className="absolute -bottom-8 left-0 hidden w-52 animate-in fade-in slide-in-from-bottom-4 border-0 shadow-xl lg:block">
//               <CardContent className="p-4">
//                 <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
//                   <Clock className="h-4 w-4 text-sky-600" />
//                   OPD Hours
//                 </p>
//                 <ul className="mt-2 space-y-1 text-xs text-gray-500">
//                   <li className="flex justify-between">
//                     <span>Mon – Sat</span>
//                     <span className="font-medium text-gray-700">
//                       8 AM – 8 PM
//                     </span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="font-medium text-gray-700">Emergency</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* ----------------------------- Stats row ---------------------------- */}
//         <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
//           {STATS.map((stat) => (
//             <Card
//               key={stat.label}
//               className="border-0 bg-white/70 shadow-sm backdrop-blur"
//             >
//               <CardContent className="flex items-center gap-4 p-5">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100">
//                   <stat.icon className="h-6 w-6 text-sky-600" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {stat.value}
//                   </p>
//                   <p className="text-sm text-gray-500">{stat.label}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* ----------------------- Emergency contact bar ----------------------- */}
//       <div className="relative border-t border-gray-100 bg-white/60 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm text-gray-600 sm:justify-between sm:px-6 lg:px-8">
//           <span className="flex items-center gap-2">
//             <ShieldCheck className="h-4 w-4 text-emerald-600" />
//             NABH Accredited &amp; ISO 9001 Certified
//           </span>
//           <span className="flex items-center gap-2">
//             <Award className="h-4 w-4 text-sky-600" />
//             Cashless treatment with 30+ insurance partners
//           </span>
//           <span className="flex items-center gap-2">
//             <PhoneCall className="h-4 w-4 text-red-500" />
//             24/7 Emergency:{" "}
//             <a
//               href="tel:+8801756-959451"
//               className="font-semibold text-gray-900 hover:text-sky-600"
//             >
//               +8801756-959451
//             </a>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

/* eslint-disable @next/next/no-img-element */
// components/hero.tsx
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Ambulance,
  ArrowRight,
  Award,
  Baby,
  BedDouble,
  Bone,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Ear,
  HeartPulse,
  MapPin,
  Microscope,
  PhoneCall,
  PlayCircle,
  Ribbon,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Timer,
  Users,
  Wallet,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ------------------------------ Data & Types ------------------------------ */

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type Specialty = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type QuickFact = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type TrustedUser = {
  src: string;
  fallback: string;
};

const STATS: Stat[] = [
  { icon: Users, value: "50K+", label: "Happy Patients" },
  { icon: Stethoscope, value: "120+", label: "Expert Doctors" },
  { icon: Award, value: "25+", label: "Years of Experience" },
  { icon: Star, value: "4.9/5", label: "Patient Rating" },
];

const SPECIALTIES: Specialty[] = [
  { icon: HeartPulse, label: "Cardiology", href: "/specialties/cardiology" },
  { icon: Brain, label: "Neurology", href: "/specialties/neurology" },
  { icon: Bone, label: "Orthopedics", href: "/specialties/orthopedics" },
  { icon: Baby, label: "Pediatrics", href: "/specialties/pediatrics" },
  { icon: Ribbon, label: "Gynecology", href: "/specialties/gynecology" },
  { icon: Ear, label: "ENT", href: "/specialties/ent" },
  { icon: Smile, label: "Dental Care", href: "/specialties/dental" },
  { icon: Sparkles, label: "Dermatology", href: "/specialties/dermatology" },
];

const WHY_POINTS: string[] = [
  "No booking fee",
  "Same-day lab reports",
  "Free 7-day follow-up",
];

const QUICK_FACTS: QuickFact[] = [
  { icon: BedDouble, value: "24/7", label: "ICU, NICU & CCU" },
  { icon: Ambulance, value: "6+", label: "Ambulances on call" },
  { icon: Microscope, value: "2,000+", label: "Lab tests daily" },
  { icon: Timer, value: "< 15 min", label: "Average wait time" },
];

const TRUSTED_USERS: TrustedUser[] = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "SK" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JD" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg", fallback: "AM" },
  { src: "https://randomuser.me/api/portraits/men/75.jpg", fallback: "RB" },
];

/* -------------------------------- Component ------------------------------- */

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-emerald-50/40 to-white"
    >
      {/* Decorative blurred blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* --------------------------- Left: Copy --------------------------- */}
          <div className="max-w-xl">
            {/* Announcement badge */}
            <Badge
              variant="outline"
              className="mb-6 gap-2 rounded-full border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              24/7 Emergency &amp; Ambulance Available
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Health,
              <br />
              Our{" "}
              <span className="relative inline-block text-sky-600">
                Top Priority
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full text-sky-300"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              DGM HealthCare connects you with world-class doctors, advanced
              diagnostics, and compassionate care. Book appointments, consult
              online, and manage your entire health journey in one place.
            </p>

            {/* CTAs — internal routes use next/link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-sky-600/25"
              >
                <Link href="/appointments">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/services">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>

            {/* ✨ NEW: Why choose us checklist */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Popular specialties quick links — now 8 categories */}
            <div className="mt-8 border-t border-gray-200/70 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Popular Specialties
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SPECIALTIES.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <Icon
                      className="h-4 w-4 text-sky-600 transition group-hover:scale-110"
                      aria-hidden
                    />
                    {label}
                  </Link>
                ))}
                <Link
                  href="/specialties"
                  className="flex items-center rounded-full px-3 py-1.5 text-sm font-semibold text-sky-600 transition hover:text-sky-700 hover:underline"
                >
                  + 20 more
                </Link>
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {TRUSTED_USERS.map((user) => (
                  <Avatar
                    key={user.fallback}
                    className="h-10 w-10 border-2 border-white"
                  >
                    <AvatarImage src={user.src} alt={user.fallback} />
                    <AvatarFallback className="bg-sky-100 text-xs font-semibold text-sky-700">
                      {user.fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-gray-600">
                  Trusted by{" "}
                  <span className="font-semibold text-gray-900">
                    50,000+ patients
                  </span>
                </p>
              </div>
            </div>

            {/* Location · Hours · Consultation fee */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                Road 11, Banani, Dhaka 1213
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-sky-600" aria-hidden />
                Mon–Sat: 8 AM – 8 PM · Sun: Emergency
              </span>
              <span className="flex items-center gap-2">
                <Wallet
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden
                />
                Consultation from{" "}
                <span className="font-semibold text-gray-900">BDT 500</span>
              </span>
            </div>
          </div>

          {/* -------------------------- Right: Visual ------------------------- */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* Floating brand icon */}
            <div className="absolute -top-6 left-8 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 shadow-lg shadow-sky-600/30">
              <HeartPulse className="h-7 w-7 text-white" aria-hidden />
            </div>

            {/* Experience badge */}
            <div className="absolute -right-4 top-6 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg ring-1 ring-gray-100 sm:-right-6">
              <span className="text-xl font-bold text-sky-600">25+</span>
              <span className="px-1 text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                Years of care
              </span>
            </div>

            {/* Hero image — replace with your own (use next/image in Next.js) */}
            <div className="overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-sky-900/10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
                alt="DGM HealthCare doctor with a stethoscope"
                className="h-[420px] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating card: Doctors online */}
            <Card className="absolute -left-4 top-16 w-44 animate-in fade-in slide-in-from-left-4 border-0 shadow-xl sm:-left-8">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Stethoscope
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    85+ Doctors
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Online now
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* ✨ NEW: Floating card — Featured doctor */}
            <Card className="absolute -right-4 top-32 hidden w-60 animate-in fade-in slide-in-from-right-4 border-0 shadow-xl sm:block sm:-right-8">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 border-2 border-sky-100">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Dr. Farhana Rahman"
                    />
                    <AvatarFallback className="bg-sky-100 text-xs font-semibold text-sky-700">
                      FR
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">
                      Dr. Farhana Rahman
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      Cardiology · FCPS
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
                    4.9
                    <span className="font-normal text-gray-400">(320)</span>
                  </span>
                  <Link
                    href="/doctors/dr-farhana-rahman"
                    className="text-xs font-semibold text-sky-600 hover:underline"
                  >
                    View profile →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Floating card: Next appointment */}
            <Card className="absolute -bottom-8 right-0 w-60 animate-in fade-in slide-in-from-bottom-4 border-0 shadow-xl sm:-right-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100">
                    <CalendarCheck
                      className="h-5 w-5 text-sky-600"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Next Available
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" aria-hidden />
                      Today, 4:30 PM
                    </p>
                  </div>
                </div>
                <Button size="sm" className="mt-3 w-full rounded-full">
                  <Link href="/appointments">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Floating card: OPD hours (hidden on small screens) */}
            <Card className="absolute -bottom-8 left-0 hidden w-52 animate-in fade-in slide-in-from-bottom-4 border-0 shadow-xl lg:block">
              <CardContent className="p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock className="h-4 w-4 text-sky-600" aria-hidden />
                  OPD Hours
                </p>
                <ul className="mt-2 space-y-1 text-xs text-gray-500">
                  <li className="flex justify-between">
                    <span>Mon – Sat</span>
                    <span className="font-medium text-gray-700">
                      8 AM – 8 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-700">Emergency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ----------------------------- Stats row ---------------------------- */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Card
              key={stat.label}
              className="border-0 bg-white/70 shadow-sm backdrop-blur"
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                  <stat.icon className="h-6 w-6 text-sky-600" aria-hidden />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✨ NEW: Quick facts strip */}
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white/70 px-6 py-5 backdrop-blur sm:grid-cols-4">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <fact.icon className="h-5 w-5 text-emerald-600" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900">{fact.value}</p>
                <p className="truncate text-xs text-gray-500">{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------- Emergency contact bar ----------------------- */}
      <div className="relative border-t border-gray-100 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm text-gray-600 sm:justify-between sm:px-6 lg:px-8">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
            ISO 9001 Certified · DGHS Licensed
          </span>
          <span className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-sky-600" aria-hidden />
            bKash · Nagad · Rocket &amp; all major cards accepted
          </span>
          <span className="flex items-center gap-2">
            <FaWhatsapp className="h-4 w-4 text-emerald-500" aria-hidden />
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801756959451"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 hover:text-emerald-600"
            >
              +880 1756-959451
            </a>
          </span>
          <span className="flex items-center gap-2">
            <PhoneCall className="h-4 w-4 text-red-500" aria-hidden />
            24/7 Emergency:{" "}
            <a
              href="tel:+8801756959451"
              className="font-semibold text-gray-900 hover:text-sky-600"
            >
              +880 1756-959451
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
