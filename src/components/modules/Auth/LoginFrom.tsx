"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Hash,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  Loader2,
  UserPlus,
  CheckCircle2,
  Users,
  Clock,
  FileHeart,
  AlertCircle,
  Sparkles,
  Globe,
  Quote,
  BadgeCheck,
  Info,
  MapPin,
  XCircle,
  Fingerprint,
} from "lucide-react";

import {
  loginTranslations,
  type Language,
  type UserRole,
} from "@/translations/loginTranslations";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80";

const STAT_ICONS = [Users, Stethoscope, Clock];
const ROLE_CARDS: { id: UserRole; icon: React.ElementType }[] = [
  { id: "patient", icon: FileHeart },
  { id: "provider", icon: Stethoscope },
];

/* -------- Auto-rotating testimonials (EN + BN) -------- */
const TESTIMONIALS: Record<
  Language,
  { quote: string; name: string; role: string }[]
> = {
  en: [
    {
      quote:
        "Booked my cardiologist in under a minute. The automatic reminders alone are worth it.",
      name: "Farhana Ahmed",
      role: "Patient · Dhaka",
    },
    {
      quote:
        "DGM cut my patient no-shows in half. The provider dashboard just works.",
      name: "Dr. Mahmud Hasan",
      role: "Cardiologist",
    },
    {
      quote:
        "Reports, prescriptions, full history — everything in one secure place.",
      name: "Rahim Uddin",
      role: "Patient · Chattogram",
    },
  ],
  bn: [
    {
      quote:
        "এক মিনিটের কম সময়ে কার্ডিওলজিস্টের অ্যাপয়েন্টমেন্ট নিতে পেরেছি। অটোমেটিক রিমাইন্ডার অসাধারণ।",
      name: "ফারহানা আহমেদ",
      role: "রোগী · ঢাকা",
    },
    {
      quote:
        "ডিজিএম আমার রোগীদের নো-শো অর্ধেকে নামিয়ে এনেছে। ড্যাশবোর্ডটি দুর্দান্ত কাজ করে।",
      name: "ডা. মাহমুদ হাসান",
      role: "কার্ডিওলজিস্ট",
    },
    {
      quote:
        "রিপোর্ট, প্রেসক্রিপশন, সম্পূর্ণ ইতিহাস — সব একটি নিরাপদ জায়গায়।",
      name: "রহিম উদ্দিন",
      role: "রোগী · চট্টগ্রাম",
    },
  ],
};

/* Circular progress ring geometry */
const RING_R = 37;
const RING_C = 2 * Math.PI * RING_R;

const STRENGTH_META = {
  labels: {
    en: ["Weak", "Fair", "Good", "Strong"],
    bn: ["দুর্বল", "মোটামুটি", "ভালো", "শক্তিশালী"],
  },
  colors: ["bg-red-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"],
  text: [
    "text-red-500",
    "text-orange-500",
    "text-amber-500",
    "text-emerald-600",
  ],
};

export const LoginForm: React.FC = () => {
  const router = useRouter();

  /* ================= 🌐 LANGUAGE STATE ================= */
  const [lang, setLang] = useState<Language>("en");
  const t = loginTranslations[lang];
  const L = (en: string, bn: string) => (lang === "bn" ? bn : en);

  useEffect(() => {
    const saved = window.localStorage.getItem("dgm-lang");
    if (saved === "bn" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = L(
      "Sign In — DGM Healthcare",
      "সাইন ইন — ডিজিএম হেলথকেয়ার",
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const changeLang = (l: Language) => {
    setLang(l);
    window.localStorage.setItem("dgm-lang", l);
  };
  /* ====================================================== */

  /* ================= FORM STATE ================= */
  const [role, setRole] = useState<UserRole>("patient");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ================= ⏱ LIVE CLOCK (hydration-safe) ================= */
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  /* ================= 💬 TESTIMONIAL ROTATOR ================= */
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    setTIdx(0);
    const id = setInterval(
      () => setTIdx((v) => (v + 1) % TESTIMONIALS[lang].length),
      6000,
    );
    return () => clearInterval(id);
  }, [lang]);

  const identifierRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    identifierRef.current?.focus();
  }, []);

  /* ================= 🧠 SMART: live validation ================= */
  const identifierValid = useMemo(() => {
    if (!identifier) return null;
    return role === "patient"
      ? /^\S+@\S+\.\S+$/.test(identifier)
      : /^[A-Za-z0-9-]{4,}$/.test(identifier);
  }, [identifier, role]);

  const strength = useMemo(() => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 6) s++;
    if (password.length >= 10) s++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) s++;
    if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) s++;
    return Math.max(1, Math.min(4, s));
  }, [password]);

  /* ================= 🎯 Demo auto-fill ================= */
  const fillDemo = () => {
    setRole("patient");
    setIdentifier("demo@patient.com");
    setPassword("demo123");
    setError("");
    setNotice(L("Demo credentials filled ✓", "ডেমো তথ্য পূরণ হয়েছে ✓"));
    setTimeout(() => setNotice(""), 2500);
  };

  const socialTap = (name: string, bnName: string) => {
    setNotice(L(`Redirecting to ${name}…`, `${bnName}-এ পাঠানো হচ্ছে…`));
    setTimeout(() => setNotice(""), 2500);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!identifier) {
      setError(
        L("Please enter your email or staff ID.", "ইমেইল বা স্টাফ আইডি দিন।"),
      );
      return;
    }
    if (password.length < 6) {
      setError(t.errorPassword);
      return;
    }

    setIsSubmitting(true);
    setProgress(0);
    requestAnimationFrame(() => requestAnimationFrame(() => setProgress(100)));

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      setTimeout(() => {
        router.push(role === "patient" ? "/dashboard" : "/provider/dashboard");
      }, 900);
    }, 1400);
  };

  const testimonial = TESTIMONIALS[lang][tIdx];

  return (
    <div
      id="login-form"
      className={`min-h-screen bg-slate-100 antialiased lg:flex ${
        lang === "bn" ? "font-bengali" : ""
      }`}
    >
      {/* Custom keyframes */}
      <style>{`
        @keyframes dgm-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes dgm-spin-slow { to { transform: rotate(360deg) } }
        @keyframes dgm-shake { 10%,90%{transform:translateX(-1px)} 20%,80%{transform:translateX(2px)} 30%,50%,70%{transform:translateX(-3px)} 40%,60%{transform:translateX(3px)} }
        @keyframes dgm-fade { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes dgm-ping { 0%{transform:scale(1);opacity:.55} 80%,100%{transform:scale(1.4);opacity:0} }
        .dgm-float{animation:dgm-float 7s ease-in-out infinite}
        .dgm-spin-slow{animation:dgm-spin-slow 12s linear infinite}
        .dgm-shake{animation:dgm-shake .5s both}
        .dgm-fade{animation:dgm-fade .6s ease both}
        @keyframes dgm-shimmer { 0%{background-position:0% 0} 100%{background-position:200% 0} }
        .dgm-shimmer{background-size:200% 100%;animation:dgm-shimmer 3s linear infinite}
      `}</style>

      {/* ==================== LEFT: Visual Hero Panel ==================== */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-[55%] overflow-hidden">
        <img
          src={DOCTOR_IMAGE}
          alt={
            lang === "bn"
              ? "ডিজিএম হেলথকেয়ারে ডাক্তার রোগীর চিকিৎসা করছেন"
              : "Doctor treating a patient at DGM Healthcare"
          }
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/75 to-teal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 to-transparent" />

        {/* Floating decorative orbs */}
        <div className="pointer-events-none absolute -right-16 top-1/4 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl dgm-float" />
        <div className="pointer-events-none absolute -left-10 bottom-1/4 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl dgm-float [animation-delay:2s]" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 text-white xl:p-14">
          {/* Top Brand + Live availability */}
          <div className="flex items-center gap-3 animate-fade-up">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-800/70 shadow-inner backdrop-blur">
              <Stethoscope className="h-6 w-6 text-teal-300" aria-hidden />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">{t.brand}</p>
              <p className="text-[11px] font-medium uppercase tracking-widest text-teal-200/80">
                {t.brandTagline}
              </p>
            </div>

            <div className="ml-auto hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold">
                {L("142+ doctors online", "১৪২+ ডাক্তার অনলাইনে")}
              </span>
            </div>
          </div>

          {/* Middle Headline & Features */}
          <div className="max-w-lg animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-800/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t.badge}
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight xl:text-4xl">
              {t.headline1}
              <br />
              <span className="text-teal-300">{t.headline2}</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {t.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-300"
                    aria-hidden
                  />
                  <span className="text-teal-50/90">{feature}</span>
                </li>
              ))}
            </ul>

            {/* ⭐ NEW: Auto-rotating testimonial */}
            <figure
              key={`${lang}-${tIdx}`}
              className="dgm-fade mt-7 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
            >
              <Quote className="mb-1.5 h-4 w-4 text-teal-300" aria-hidden />
              <blockquote className="text-sm italic leading-relaxed text-teal-50/95">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-2.5 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-600/60 text-[11px] font-bold">
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-xs font-bold">
                    {testimonial.name}
                  </span>
                  <span className="block text-[10.5px] text-teal-200/70">
                    {testimonial.role}
                  </span>
                </span>
                <span className="ml-auto flex gap-1">
                  {TESTIMONIALS[lang].map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === tIdx ? "w-4 bg-teal-300" : "w-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Bottom Metrics + Emergency */}
          <div className="animate-fade-up">
            <div className="mb-6 grid grid-cols-3 gap-3">
              {t.stats.map((stat, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon
                      className="mb-1.5 h-4 w-4 text-teal-300"
                      aria-hidden
                    />
                    <p className="text-lg font-bold leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] text-teal-100/70">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+8801756959451"
                className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-red-500 active:scale-95"
              >
                <PhoneCall className="h-3.5 w-3.5" aria-hidden />
                {t.emergencyBtn}
              </a>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-100/70">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {L(
                  "DGM Tower, Gulshan-2, Dhaka",
                  "ডিজিএম টাওয়ার, গুলশান-২, ঢাকা",
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== RIGHT: Form Panel ==================== */}
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-white px-5 py-10 sm:px-10 lg:w-1/2 xl:w-[45%]">
        {/* Subtle grid texture + glow accents */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,118,110,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative z-10 w-full max-w-md animate-fade-up">
          {/* Mobile Header + mini stats */}
          <div className="mb-6 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
              <Stethoscope className="h-5 w-5 text-teal-300" aria-hidden />
            </div>
            <p className="text-lg font-bold tracking-tight text-teal-950">
              {t.brand}
            </p>
          </div>
          <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-700 p-3 text-white lg:hidden">
            {t.stats.map((stat, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={stat.label} className="text-center">
                  <Icon
                    className="mx-auto mb-1 h-4 w-4 text-teal-300"
                    aria-hidden
                  />
                  <p className="text-sm font-bold leading-none">{stat.value}</p>
                  <p className="mt-0.5 text-[9px] text-teal-100/80">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ---------- Top bar: ⬅️ Back to Home + Live clock + 🌐 3D POWER FLIP BUTTON ---------- */}
          <div className="mb-5 flex items-center justify-end gap-2">
            {/* ⬅️ Back to Home */}
            <button
              type="button"
              onClick={() => router.push("/")}
              aria-label={L("Back to home", "হোমে ফিরে যান")}
              className="group mr-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3.5 shadow-sm transition hover:border-teal-300 hover:shadow-md active:scale-95"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-600 transition group-hover:-translate-x-0.5 group-hover:bg-teal-50 group-hover:text-teal-700">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="text-[11px] font-bold text-slate-700">
                {L("Home", "হোম")}
              </span>
            </button>

            {now && (
              <span className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-semibold tabular-nums text-slate-600 sm:flex">
                <Clock className="h-3.5 w-3.5 text-teal-700" aria-hidden />
                {now.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            )}

            <button
              type="button"
              onClick={() => changeLang(lang === "en" ? "bn" : "en")}
              aria-label={t.langLabel || "Toggle Language"}
              className="group relative h-10 w-40 rounded-full transition-transform duration-300 hover:scale-[1.03] active:scale-95 [perspective:1000px] [transform-style:preserve-3d]"
            >
              <div
                className={`relative h-full w-full rounded-full transition-all duration-500 [transform-style:preserve-3d] ${
                  lang === "bn" ? "[transform:rotateX(180deg)]" : ""
                }`}
              >
                {/* FRONT (English) */}
                <div className="absolute inset-0 flex items-center justify-between rounded-full border border-teal-500/30 bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950 px-3.5 text-white shadow-md shadow-teal-950/20 [backface-visibility:hidden]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-bold tracking-wide">
                      English
                    </span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-800/80 text-teal-200 shadow-inner transition group-hover:bg-teal-700">
                    <Globe className="h-3.5 w-3.5" />
                  </div>
                </div>
                {/* BACK (বাংলা) */}
                <div className="absolute inset-0 flex items-center justify-between rounded-full border border-teal-400/40 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 px-3.5 text-white shadow-md shadow-teal-950/20 [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-bold tracking-wide">
                      বাংলা
                    </span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-700/80 text-teal-200 shadow-inner transition group-hover:bg-teal-600">
                    <Globe className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* ---------- ✨ Beautiful Welcome Header ---------- */}
          <div className="mt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-teal-700 shadow-sm">
              <ShieldCheck className="h-3 w-3" aria-hidden />
              {L("Secure Patient Portal", "সুরক্ষিত রোগী পোর্টাল")}
            </span>
            <h1 className="mt-2.5 text-[26px] font-black leading-tight tracking-tight text-slate-900">
              {t.welcome}
            </h1>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              <span className="h-1 w-3 rounded-full bg-teal-200" />
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
              {t.subtitle[role].before}
              <span className="rounded bg-teal-50 px-1 font-bold text-teal-800">
                {t.subtitle[role].highlight}
              </span>
              {t.subtitle[role].after}
            </p>
          </div>

          {/* Role Cards — circular icon medallions */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {ROLE_CARDS.map((card) => {
              const active = role === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => {
                    setRole(card.id);
                    setIdentifier("");
                    setError("");
                  }}
                  aria-pressed={active}
                  className={`rounded-2xl border p-3 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    active
                      ? "border-teal-700 bg-teal-50 shadow-md shadow-teal-900/5 ring-2 ring-teal-600/20"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`mb-2 grid h-9 w-9 place-items-center rounded-full transition-colors ${
                      active
                        ? "bg-teal-700 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <card.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p
                    className={`text-xs font-bold ${
                      active ? "text-teal-900" : "text-slate-700"
                    }`}
                  >
                    {t.roles[card.id].title}
                  </p>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-slate-500">
                    {t.roles[card.id].desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Feedback Banners (notice / error-shake / success) */}
          <div aria-live="polite">
            {notice && (
              <div className="dgm-fade mt-4 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs font-medium text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {notice}
              </div>
            )}

            {error && (
              <div
                key={error}
                role="alert"
                className="dgm-shake mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {error}
              </div>
            )}

            {success && (
              <div
                role="status"
                className="dgm-fade mt-4 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs font-medium text-emerald-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {t.successMsg[role]}
              </div>
            )}
          </div>

          {/* ================= LOGIN FORM ================= */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
            {/* Identifier — pill input with live validity check */}
            <div>
              <label
                htmlFor="identifier"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                {t.identifierLabel[role]}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {role === "patient" ? (
                    <Mail className="h-4 w-4" aria-hidden />
                  ) : (
                    <Hash className="h-4 w-4" aria-hidden />
                  )}
                </span>
                <input
                  ref={identifierRef}
                  id="identifier"
                  type="text"
                  required
                  autoComplete="username"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={t.identifierPlaceholder[role]}
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
                {identifierValid !== null && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    {identifierValid ? (
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-500"
                        aria-hidden
                      />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-400" aria-hidden />
                    )}
                  </span>
                )}
              </div>
            </div>

            {/* Password — pill input + live strength meter */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  {t.passwordLabel}
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800"
                >
                  {t.resetPassword}
                </Link>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="h-4 w-4" aria-hidden />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={(e) =>
                    setCapsLockOn(e.getModifierState?.("CapsLock") ?? false)
                  }
                  placeholder={t.passwordPlaceholder}
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={
                    showPassword
                      ? L("Hide password", "পাসওয়ার্ড লুকান")
                      : L("Show password", "পাসওয়ার্ড দেখান")
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" aria-hidden />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden />
                  )}
                </button>
              </div>

              {/* ⭐ Live strength meter */}
              {password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex flex-1 gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i <= strength
                            ? STRENGTH_META.colors[strength - 1]
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide ${
                      STRENGTH_META.text[strength - 1]
                    }`}
                  >
                    {STRENGTH_META.labels[lang][strength - 1]}
                  </span>
                </div>
              )}

              {capsLockOn && (
                <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-amber-600">
                  <AlertCircle className="h-3 w-3" aria-hidden />
                  {t.capsLock}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded-full border-slate-300 text-teal-700 focus:ring-teal-600"
                />
                <span className="text-xs font-medium text-slate-600">
                  {t.rememberDevice}
                </span>
              </label>
              <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                {t.sslSecured}
              </span>
            </div>

            {/* ⭐⭐ UNIQUE CIRCULAR SUBMIT BUTTON with progress ring */}
            <div className="flex flex-col items-center pt-2">
              <div className="relative h-20 w-20">
                {/* Dashed rotating orbit */}
                <div className="absolute -inset-[5px] rounded-full border-2 border-dashed border-teal-300/60 dgm-spin-slow" />

                {/* SVG progress ring */}
                <svg
                  viewBox="0 0 80 80"
                  className="absolute inset-0 h-full w-full -rotate-90"
                  aria-hidden
                >
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_R}
                    fill="none"
                    stroke="rgba(13,148,136,0.15)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_R}
                    fill="none"
                    stroke={success ? "#10b981" : "url(#dgmRing)"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={RING_C}
                    style={{
                      strokeDashoffset: RING_C * (1 - progress / 100),
                      transition: "stroke-dashoffset 1.4s linear",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="dgmRing"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Pulse halo on hover */}
                {!isSubmitting && !success && (
                  <span className="absolute inset-0 rounded-full border-2 border-teal-500/50 opacity-0 transition group-hover:opacity-100 [animation:dgm-ping_1.8s_ease-out_infinite]" />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || success}
                  aria-label={t.signIn}
                  className={`group absolute inset-[7px] grid place-items-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:cursor-not-allowed ${
                    success
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-600/30"
                      : "bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 shadow-teal-900/30"
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
                  ) : success ? (
                    <CheckCircle2 className="h-6 w-6" aria-hidden />
                  ) : (
                    <ArrowRight
                      className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  )}
                </button>
              </div>

              <p className="mt-2.5 text-sm font-bold text-slate-800">
                {isSubmitting
                  ? t.verifying
                  : success
                    ? t.loginSuccess
                    : t.signIn}
              </p>
              <p className="text-[10.5px] font-medium text-slate-400">
                {L(
                  "Protected session · Press Enter",
                  "সুরক্ষিত সেশন · Enter চাপুন",
                )}
              </p>
            </div>
          </form>

          {/* ⭐ Demo auto-fill helper */}
          <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
            <p className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Info
                className="h-3.5 w-3.5 shrink-0 text-teal-600"
                aria-hidden
              />
              <span className="truncate">
                {L("Demo", "ডেমো")}: demo@patient.com / demo123
              </span>
            </p>
            <button
              type="button"
              onClick={fillDemo}
              className="shrink-0 rounded-full bg-teal-700 px-2.5 py-1 text-[10.5px] font-bold text-white transition hover:bg-teal-800 active:scale-95"
            >
              {L("Autofill", "অটোফিল")}
            </button>
          </div>

          {/* ⭐ Social / OTP — circular icon buttons */}
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {L("or continue with", "অথবা চালিয়ে যান")}
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => socialTap("Google", "গুগল")}
                className="grid h-11 place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.97 10.97 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => socialTap("Facebook", "ফেসবুক")}
                className="grid h-11 place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="#1877F2"
                  aria-hidden
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  setNotice(
                    L("OTP login coming soon", "ওটিপি লগইন শীঘ্রই আসছে"),
                  )
                }
                className="grid h-11 place-items-center rounded-full border border-slate-200 bg-white text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                aria-label={L("Login with OTP", "ওটিপি দিয়ে লগইন")}
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          {/* ⭐⭐ CREATE PATIENT ACCOUNT — Eye-catching Gradient CTA */}
          <Link
            href="/Registration"
            className="group relative mt-6 block overflow-hidden rounded-2xl shadow-lg shadow-teal-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-600/20"
          >
            {/* Animated shimmering gradient border */}
            <div className="dgm-shimmer absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600" />

            {/* Card body */}
            <div className="relative m-[2px] flex items-center gap-3.5 rounded-[14px] bg-white px-4 py-4 transition-colors duration-300 group-hover:bg-teal-50/50">
              {/* Pulsing icon medallion */}
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-500 text-white shadow-lg shadow-teal-600/30">
                <span className="absolute inset-0 animate-ping rounded-full bg-teal-400 opacity-25" />
                <UserPlus className="relative h-5 w-5" aria-hidden />
              </span>

              {/* Text */}
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-1.5">
                  <span className="text-sm font-black tracking-tight text-slate-900">
                    {L("Create Patient Account", "রোগী অ্যাকাউন্ট তৈরি করুন")}
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-amber-700">
                    {L("Free", "ফ্রি")}
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-[11px] font-medium text-slate-500">
                  {t.freeReg} · {L("Takes 30 seconds", "মাত্র ৩০ সেকেন্ড")}
                </span>
              </span>

              {/* Arrow */}
              <ArrowRight
                className="h-5 w-5 shrink-0 text-teal-700 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </div>
          </Link>

          {/* ⭐ Trust badge chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              { icon: Lock, label: "256-bit SSL" },
              { icon: ShieldCheck, label: "HIPAA" },
              { icon: BadgeCheck, label: "ISO 27001" },
              {
                icon: Fingerprint,
                label: L("Biometric ready", "বায়োমেট্রিক রেডি"),
              },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500"
              >
                <chip.icon className="h-3 w-3 text-teal-600" aria-hidden />
                {chip.label}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
              {t.hipaa}
            </span>
            <a
              href="tel:+8801756959451"
              className="flex items-center gap-1.5 font-medium text-slate-600 transition hover:text-teal-700"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden />
              {t.needHelp}
            </a>
          </div>

          {/* ⭐ System status + version footer */}
          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {L("All systems operational", "সব সিস্টেম স্বাভাবিক")}
            </span>
            <span>© 2025 {t.brand} · v2.4.1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
