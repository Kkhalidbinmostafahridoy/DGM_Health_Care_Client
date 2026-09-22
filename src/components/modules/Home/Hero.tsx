"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Activity,
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
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "../../../Translations/language-provider";
import type { Dictionary } from "../../../Translations/translations";

const DGM_LOGO = "/LogoImg/DGM3.png";

type SpecialtyKey = keyof Dictionary["hero"]["specialtyLabels"];

const SPECIALTIES: { key: SpecialtyKey; icon: LucideIcon; href: string }[] = [
  { key: "cardiology", icon: HeartPulse, href: "/specialties/cardiology" },
  { key: "neurology", icon: Brain, href: "/specialties/neurology" },
  { key: "orthopedics", icon: Bone, href: "/specialties/orthopedics" },
  { key: "pediatrics", icon: Baby, href: "/specialties/pediatrics" },
  { key: "gynecology", icon: Ribbon, href: "/specialties/gynecology" },
  { key: "ent", icon: Ear, href: "/specialties/ent" },
  { key: "dental", icon: Smile, href: "/specialties/dental" },
  { key: "dermatology", icon: Sparkles, href: "/specialties/dermatology" },
];

const STAT_ICONS: LucideIcon[] = [Users, Stethoscope, Award, Star];
const FACT_ICONS: LucideIcon[] = [BedDouble, Ambulance, Microscope, Timer];

const TRUSTED_USERS = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "SK" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JD" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg", fallback: "AM" },
  { src: "https://randomuser.me/api/portraits/men/75.jpg", fallback: "RB" },
];

/* CTA classes (Base UI Button has no asChild → styled Links, no nesting) */
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-600/30";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50";

export function Hero() {
  const { t, isBn } = useLanguage();

  /* Live watch — null on server & first client render → hydration-safe */
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime =
    currentTime?.toLocaleTimeString(isBn ? "bn-BD" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) ?? "--:--:--";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-sky-50 via-emerald-50/40 to-white"
    >
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />
      </div>

      {/* Logo watermark background — 🔥 Tailwind animate class, no <style jsx> */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <img
          src={DGM_LOGO}
          alt=""
          className="h-[85%] w-auto max-w-none opacity-[0.05] animate-[float_8s_ease-in-out_infinite] select-none"
        />
        <img
          src={DGM_LOGO}
          alt=""
          className="absolute -left-32 -top-32 h-96 w-auto rotate-12 opacity-[0.04] select-none"
        />
        <img
          src={DGM_LOGO}
          alt=""
          className="absolute -right-24 bottom-10 h-72 w-auto -rotate-12 opacity-[0.04] select-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ------------------------- Left: Copy ------------------------- */}
          <div className="max-w-xl">
            <Badge
              variant="outline"
              className="mb-6 gap-2 rounded-full border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.badge}
              <img src={DGM_LOGO} alt="DGM" className="ml-1 h-4 w-auto" />
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t.hero.titleTop}
              <br />
              <span className="inline-flex items-center gap-3">
                {t.hero.titlePre}
                <img
                  src={DGM_LOGO}
                  alt="DGM"
                  className="inline-block h-10 w-auto sm:h-12 lg:h-14"
                />
                <span className="relative inline-block bg-linear-to-r from-purple-600 via-indigo-500 to-sky-600 bg-clip-text text-transparent">
                  {t.hero.titleAccent}
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
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {t.hero.subtitle}
            </p>

            {/* CTAs — plain styled Links (fixed nested button>a bug) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/appointments" className={btnPrimary}>
                <CalendarCheck className="h-5 w-5" aria-hidden />
                {t.hero.bookAppointment}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className={btnOutline}>
                <PlayCircle className="h-5 w-5" aria-hidden />
                {t.hero.ourServices}
              </Link>
            </div>

            {/* Why choose us */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
              {t.hero.whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Specialties */}
            <div className="mt-8 border-t border-gray-200/70 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t.hero.popularSpecialties}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SPECIALTIES.map(({ key, icon: Icon, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className="group flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                  >
                    <Icon
                      className="h-4 w-4 text-purple-500 transition group-hover:scale-110"
                      aria-hidden
                    />
                    {t.hero.specialtyLabels[key]}
                  </Link>
                ))}
                <Link
                  href="/specialties"
                  className="flex items-center rounded-full px-3 py-1.5 text-sm font-semibold text-purple-600 transition hover:text-purple-700 hover:underline"
                >
                  {t.hero.moreSpecialties}
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
                  {t.hero.trustedPrefix}{" "}
                  <span className="font-semibold text-gray-900">
                    {t.hero.trustedStrong}
                  </span>
                </p>
              </div>
            </div>

            {/* Location · Hours · Fee */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                {t.hero.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-sky-600" aria-hidden />
                {t.hero.hours}
              </span>
              <span className="flex items-center gap-2">
                <Wallet
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden
                />
                {t.hero.feePrefix}{" "}
                <span className="font-semibold text-gray-900">
                  {t.hero.feeAmount}
                </span>
              </span>
            </div>
          </div>

          {/* ------------------------ Right: Visual ------------------------ */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* Floating logo icon */}
            <div className="absolute -top-6 left-8 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-purple-600/20 ring-1 ring-purple-100">
              <img
                src={DGM_LOGO}
                alt="DGM HealthCare Logo"
                className="h-11 w-auto"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -right-4 top-6 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg ring-1 ring-gray-100 sm:-right-6">
              <span className="text-xl font-bold text-sky-600">
                {t.hero.yearsValue}
              </span>
              <span className="px-1 text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                {t.hero.yearsLabel}
              </span>
            </div>

            {/* Hero image */}
            <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-sky-900/10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
                alt="DGM HealthCare doctor with a stethoscope"
                className="h-[420px] w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-xl bg-white/80 px-2.5 py-1.5 backdrop-blur-sm">
                <img
                  src={DGM_LOGO}
                  alt="DGM"
                  className="h-6 w-auto opacity-90"
                />
              </div>
            </div>

            {/* Doctors online */}
            <Card className="absolute -left-4 top-16 z-10 w-44 border-0 shadow-xl sm:-left-8">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Stethoscope
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.hero.doctorsOnline}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {t.hero.onlineNow}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Live watch */}
            <Card className="absolute -left-4 top-44 z-10 hidden w-44 border-0 shadow-xl sm:block sm:-left-8">
              <CardContent className="p-4">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <Activity
                    className="h-3 w-3 animate-pulse text-purple-500"
                    aria-hidden
                  />
                  {t.hero.liveWatch}
                </p>
                <p className="mt-1 font-mono text-lg font-bold text-gray-900">
                  {formattedTime}
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  {t.hero.systemsOk}
                </p>
              </CardContent>
            </Card>

            {/* Featured doctor */}
            <Card className="absolute -right-4 top-32 z-10 hidden w-60 border-0 shadow-xl sm:block sm:-right-8">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 border-2 border-sky-100">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt={t.hero.doctorName}
                    />
                    <AvatarFallback className="bg-sky-100 text-xs font-semibold text-sky-700">
                      FR
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">
                      {t.hero.doctorName}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {t.hero.doctorDept}
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
                    4.9{" "}
                    <span className="font-normal text-gray-400">
                      {t.hero.reviews}
                    </span>
                  </span>
                  <Link
                    href="/doctors/dr-farhana-rahman"
                    className="text-xs font-semibold text-sky-600 hover:underline"
                  >
                    {t.hero.viewProfile}
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Next appointment */}
            <Card className="absolute -bottom-8 right-0 z-10 w-60 border-0 shadow-xl sm:-right-6">
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
                      {t.hero.nextAvailable}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" aria-hidden />
                      {t.hero.todaySlot}
                    </p>
                  </div>
                </div>
                <Link
                  href="/appointments"
                  className="mt-3 block w-full rounded-full bg-linear-to-r from-sky-600 to-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {t.hero.bookNow}
                </Link>
              </CardContent>
            </Card>

            {/* OPD hours */}
            <Card className="absolute -bottom-8 left-0 z-10 hidden w-52 border-0 shadow-xl lg:block">
              <CardContent className="p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock className="h-4 w-4 text-sky-600" aria-hidden />
                  {t.hero.opdHours}
                </p>
                <ul className="mt-2 space-y-1 text-xs text-gray-500">
                  <li className="flex justify-between">
                    <span>{t.hero.dayMonSat}</span>
                    <span className="font-medium text-gray-700">
                      {t.hero.dayMonSatTime}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t.hero.daySunday}</span>
                    <span className="font-medium text-gray-700">
                      {t.hero.daySundayTime}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.hero.stats.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <Card
                key={stat.label}
                className="border-0 bg-white/70 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-sky-100">
                    <Icon className="h-6 w-6 text-sky-600" aria-hidden />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick facts */}
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white/70 px-6 py-5 backdrop-blur sm:grid-cols-4">
          {t.hero.quickFacts.map((fact, i) => {
            const Icon = FACT_ICONS[i];
            return (
              <div key={fact.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-600" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">
                    {fact.value}
                  </p>
                  <p className="truncate text-xs text-gray-500">{fact.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="relative border-t border-gray-100 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm text-gray-600 sm:justify-between sm:px-6 lg:px-8">
          <span className="flex items-center gap-2">
            <img src={DGM_LOGO} alt="DGM" className="h-5 w-auto" />
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
            {t.hero.certified}
          </span>
          <span className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-sky-600" aria-hidden />
            {t.hero.payments}
          </span>
          <span className="flex items-center gap-2">
            <FaWhatsapp className="h-4 w-4 text-emerald-500" aria-hidden />
            {t.hero.whatsapp}{" "}
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
            {t.hero.emergencyLine}{" "}
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
