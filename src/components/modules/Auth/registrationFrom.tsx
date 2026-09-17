"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  Mail,
  Phone,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  Users,
  Clock,
  AlertCircle,
  Sparkles,
  Globe,
  User,
  Calendar,
  MapPin,
  ChevronDown,
  Droplets,
  XCircle,
  Info,
  BadgeCheck,
  Fingerprint,
  RefreshCw,
  UserPlus,
} from "lucide-react";
import { type Language } from "@/translations/loginTranslations";
import { registerTranslations } from "@/Translations/registerTranslations";

/* ============================================================
   🌐 TRANSLATIONS (move to @/translations/registerTranslations if you prefer)
============================================================ */
export interface RegisterTranslations {
  brand: string;
  brandTagline: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  benefits: string[];
  stats: { value: string; label: string }[];
  title: string;
  subtitle: { before: string; highlight: string; after: string };
  haveAccount: string;
  signIn: string;
  steps: [string, string, string];
  labels: {
    fullName: string;
    fullNamePh: string;
    email: string;
    emailPh: string;
    phone: string;
    phonePh: string;
    dob: string;
    gender: string;
    bloodGroup: string;
    district: string;
    districtPh: string;
    password: string;
    passwordPh: string;
    confirmPassword: string;
    confirmPasswordPh: string;
  };
  genders: [string, string, string];
  districts: string[];
  bloodNote: string;
  passwordHint: string;
  matchOk: string;
  matchBad: string;
  suggest: string;
  ageWord: string;
  yearsWord: string;
  terms: {
    before: string;
    tos: string;
    and: string;
    privacy: string;
    after: string;
  };
  strength: { labels: string[]; colors: string[]; text: string[] };
  errors: {
    step1: string;
    step2: string;
    passwordLen: string;
    match: string;
    terms: string;
  };
  continueBtn: string;
  back: string;
  create: string;
  creating: string;
  protectedNote: string;
  success: {
    title: string;
    msg: string;
    resend: string;
    resent: string;
    goLogin: string;
  };
  trustBio: string;
  needHelp: string;
  allSystems: string;
  langLabel?: string;
}

/* ============================================================ */
const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80";

const STAT_ICONS = [Users, Stethoscope, Clock];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

/* Circular progress ring geometry */
const RING_R = 37;
const RING_C = 2 * Math.PI * RING_R;

export const RegistrationForm: React.FC = () => {
  const router = useRouter();

  /* ================= 🌐 LANGUAGE ================= */
  const [lang, setLang] = useState<Language>("en");
  const t = registerTranslations[lang];
  const L = (en: string, bn: string) => (lang === "bn" ? bn : en);

  useEffect(() => {
    const saved = window.localStorage.getItem("dgm-lang");
    if (saved === "bn" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = L(
      "Create Account — DGM Healthcare",
      "অ্যাকাউন্ট তৈরি — ডিজিএম হেলথকেয়ার",
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const changeLang = (l: Language) => {
    setLang(l);
    window.localStorage.setItem("dgm-lang", l);
  };

  /* ================= ⏱ LIVE CLOCK (hydration-safe) ================= */
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  /* ================= FORM STATE ================= */
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [genderIdx, setGenderIdx] = useState<number | null>(null);
  const [blood, setBlood] = useState("");
  const [districtIdx, setDistrictIdx] = useState<number | "">("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [done, setDone] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  /* ================= 🧠 LIVE VALIDATION ================= */
  const nameOk = name.trim().length >= 3;
  const emailOk = /^\S+@\S+\.\S+$/.test(email);
  const phoneOk = /^(\+?880|0)1[3-9]\d{8}$/.test(phone.replace(/[\s-]/g, ""));

  const age = useMemo(() => {
    if (!dob) return null;
    return Math.floor(
      (Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365.25),
    );
  }, [dob]);

  const step1Ok = nameOk && emailOk && phoneOk && !!dob && genderIdx !== null;
  const step2Ok = !!blood && districtIdx !== "";

  const strength = useMemo(() => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 6) s++;
    if (password.length >= 10) s++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) s++;
    if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) s++;
    return Math.max(1, Math.min(4, s));
  }, [password]);

  const matchOk = confirmPassword.length > 0 && password === confirmPassword;

  /* ================= SMART: strong-password generator ================= */
  const suggestPassword = () => {
    const pool =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
    let pw = "Dgm7!x";
    for (let i = 0; i < 8; i++)
      pw += pool[Math.floor(Math.random() * pool.length)];
    setPassword(pw);
    setConfirmPassword(pw);
    setNotice(
      L("Strong password generated ✓", "শক্তিশালী পাসওয়ার্ড তৈরি হয়েছে ✓"),
    );
    setTimeout(() => setNotice(""), 2500);
  };

  const resendEmail = () => {
    setNotice(t.success.resent);
    setTimeout(() => setNotice(""), 2500);
  };

  /* ================= NAVIGATION & SUBMIT ================= */
  const next = () => {
    setError("");
    if (step === 0 && !step1Ok) return setError(t.errors.step1);
    if (step === 1 && !step2Ok) return setError(t.errors.step2);
    setStep((s) => s + 1);
  };

  const handleFinal = () => {
    setError("");
    if (password.length < 6) return setError(t.errors.passwordLen);
    if (!matchOk) return setError(t.errors.match);
    if (!agree) return setError(t.errors.terms);

    setIsSubmitting(true);
    setProgress(0);
    requestAnimationFrame(() => requestAnimationFrame(() => setProgress(100)));

    setTimeout(() => {
      setIsSubmitting(false);
      setDone(true);
    }, 1600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) next();
    else handleFinal();
  };

  /* ================= SUCCESS VIEW ================= */
  if (done) {
    return (
      <div
        id="Registration-From"
        className={`min-h-screen bg-slate-100 antialiased lg:flex ${lang === "bn" ? "font-bengali" : ""}`}
      >
        <style>{`@keyframes dgm-pop{0%{transform:scale(0)}70%{transform:scale(1.15)}100%{transform:scale(1)}}@keyframes dgm-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes dgm-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.dgm-pop{animation:dgm-pop .6s cubic-bezier(.34,1.56,.64,1) both}.dgm-fade{animation:dgm-fade .6s ease both}.dgm-float{animation:dgm-float 6s ease-in-out infinite}`}</style>

        <div className="flex w-full items-center justify-center px-5 py-10">
          <div className="dgm-fade w-full max-w-md">
            {/* Brand */}
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
                <Stethoscope className="h-5 w-5 text-teal-300" aria-hidden />
              </div>
              <p className="text-lg font-bold tracking-tight text-teal-950">
                {t.brand}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 text-center shadow-xl shadow-emerald-900/5">
              {/* Confetti dots */}
              {[
                "bg-teal-400",
                "bg-amber-400",
                "bg-rose-400",
                "bg-sky-400",
                "bg-emerald-400",
              ].map((c, i) => (
                <span
                  key={i}
                  className={`dgm-float pointer-events-none absolute h-2 w-2 rounded-full ${c}`}
                  style={{
                    top: `${12 + i * 16}%`,
                    left: `${8 + (i % 3) * 38}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}

              <div className="dgm-pop relative mx-auto mb-4 h-20 w-20">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-40" />
                <span className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/30">
                  <CheckCircle2 className="h-9 w-9" aria-hidden />
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                {t.success.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t.success.msg}{" "}
                <span className="font-bold text-teal-800">{email}</span>
              </p>

              {notice && (
                <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  <Info className="h-3.5 w-3.5" aria-hidden />
                  {notice}
                </div>
              )}

              <div className="mt-6 flex flex-col items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="w-full rounded-full bg-teal-800 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-teal-900 active:scale-95"
                >
                  {t.success.goLogin}
                </button>
                <button
                  type="button"
                  onClick={resendEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 transition hover:text-teal-900"
                >
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                  {t.success.resend}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= MAIN REGISTRATION VIEW ================= */
  return (
    <div
      className={`min-h-screen bg-slate-100 antialiased lg:flex ${lang === "bn" ? "font-bengali" : ""}`}
    >
      <style>{`
        @keyframes dgm-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes dgm-spin-slow { to { transform: rotate(360deg) } }
        @keyframes dgm-shake { 10%,90%{transform:translateX(-1px)} 20%,80%{transform:translateX(2px)} 30%,50%,70%{transform:translateX(-3px)} 40%,60%{transform:translateX(3px)} }
        @keyframes dgm-fade { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        .dgm-float{animation:dgm-float 7s ease-in-out infinite}
        .dgm-spin-slow{animation:dgm-spin-slow 12s linear infinite}
        .dgm-shake{animation:dgm-shake .5s both}
        .dgm-fade{animation:dgm-fade .6s ease both}
      `}</style>

      {/* ==================== LEFT: Visual Hero Panel ==================== */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-[55%] overflow-hidden">
        <img
          src={DOCTOR_IMAGE}
          alt={L(
            "Doctor treating a patient at DGM Healthcare",
            "ডিজিএম হেলথকেয়ারে ডাক্তার রোগীর চিকিৎসা করছেন",
          )}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/75 to-teal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 to-transparent" />

        <div className="pointer-events-none absolute -right-16 top-1/4 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl dgm-float" />
        <div className="pointer-events-none absolute -left-10 bottom-1/4 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl dgm-float [animation-delay:2s]" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 text-white xl:p-14">
          {/* Brand */}
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
          </div>

          {/* Headline + Benefits */}
          <div className="max-w-lg animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-800/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t.heroBadge}
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight xl:text-4xl">
              {t.heroTitle1}
              <br />
              <span className="text-teal-300">{t.heroTitle2}</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-300"
                    aria-hidden
                  />
                  <span className="text-teal-50/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats + Emergency */}
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
            <a
              href="tel:+8801756959451"
              className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-red-500 active:scale-95"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden />
              {L(
                "Emergency: +880 1756-959451",
                "ইমার্জেন্সি: +880 1756-959451",
              )}
            </a>
          </div>
        </div>
      </div>

      {/* ==================== RIGHT: Form Panel ==================== */}
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-white px-5 py-10 sm:px-10 lg:w-1/2 xl:w-[45%]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,118,110,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative z-10 w-full max-w-md animate-fade-up">
          {/* Mobile header + stats */}
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

          {/* Clock + 🌐 3D FLIP BUTTON */}
          <div className="mb-5 flex items-center justify-end gap-2">
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
              aria-label={t.langLabel}
              className="group relative h-10 w-40 rounded-full transition-transform duration-300 hover:scale-[1.03] active:scale-95 [perspective:1000px] [transform-style:preserve-3d]"
            >
              <div
                className={`relative h-full w-full rounded-full transition-all duration-500 [transform-style:preserve-3d] ${lang === "bn" ? "[transform:rotateX(180deg)]" : ""}`}
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

          {/* Title */}
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.title}
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            {t.subtitle.before}
            <span className="font-semibold text-teal-800">
              {t.subtitle.highlight}
            </span>
            {t.subtitle.after}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-400">
            {t.haveAccount}{" "}
            <Link
              href="/login"
              className="font-bold text-teal-700 hover:text-teal-900"
            >
              {t.signIn}
            </Link>
          </p>

          {/* ---------- ⭕ CIRCULAR STEPPER ---------- */}
          <div className="mb-6 mt-6 flex items-start">
            {t.steps.map((label, i) => {
              const isDone = i < step;
              const active = i === step;
              return (
                <div
                  key={label}
                  className={i === 0 ? "flex-none" : "flex flex-1 items-start"}
                >
                  {i > 0 && (
                    <div className="mr-2 mt-[17px] h-0.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full bg-teal-600 transition-all duration-500 ${i <= step ? "w-full" : "w-0"}`}
                      />
                    </div>
                  )}
                  <div className="flex w-16 flex-col items-center gap-1">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                        isDone
                          ? "border-teal-600 bg-teal-600 text-white"
                          : active
                            ? "border-teal-600 bg-teal-50 text-teal-700 ring-4 ring-teal-600/10"
                            : "border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4" aria-hidden />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span
                      className={`text-center text-[9.5px] font-bold leading-tight ${active ? "text-teal-800" : "text-slate-400"}`}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banners */}
          <div aria-live="polite">
            {notice && (
              <div className="dgm-fade mb-3 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs font-medium text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {notice}
              </div>
            )}
            {error && (
              <div
                key={error}
                role="alert"
                className="dgm-shake mb-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {error}
              </div>
            )}
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* ---------- STEP 1: Personal Info ---------- */}
            {step === 0 && (
              <div className="dgm-fade space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="reg-name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.labels.fullName}
                  </label>
                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.labels.fullNamePh}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                    {name && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        {nameOk ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-400" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="reg-email"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.labels.email}
                  </label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.labels.emailPh}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                    {email && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        {emailOk ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-400" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="reg-phone"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.labels.phone}
                  </label>
                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.labels.phonePh}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                    {phone && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        {phoneOk ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-400" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* DOB + age chip */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="reg-dob"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.labels.dob}
                    </label>
                    {age !== null && (
                      <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-700">
                        {t.ageWord}: {age} {t.yearsWord}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Calendar
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-dob"
                      type="date"
                      required
                      max={today}
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-800 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                  </div>
                </div>

                {/* Gender pills */}
                <div>
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t.labels.gender}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {t.genders.map((g, i) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGenderIdx(i)}
                        aria-pressed={genderIdx === i}
                        className={`rounded-full border py-2 text-xs font-bold transition-all ${
                          genderIdx === i
                            ? "border-teal-700 bg-teal-700 text-white shadow-md shadow-teal-700/25"
                            : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-teal-50/50"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------- STEP 2: Health Profile ---------- */}
            {step === 1 && (
              <div className="dgm-fade space-y-5">
                {/* Blood group — circular red chips */}
                <div>
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Droplets className="h-4 w-4 text-red-500" aria-hidden />
                    {t.labels.bloodGroup}
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {BLOOD_GROUPS.map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setBlood(bg)}
                        aria-pressed={blood === bg}
                        className={`grid h-11 place-items-center rounded-full border text-xs font-bold transition-all ${
                          blood === bg
                            ? "scale-105 border-red-500 bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md shadow-red-500/30"
                            : "border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:bg-red-50/40"
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* District */}
                <div>
                  <label
                    htmlFor="reg-district"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.labels.district}
                  </label>
                  <div className="relative">
                    <MapPin
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <select
                      id="reg-district"
                      required
                      value={districtIdx}
                      onChange={(e) =>
                        setDistrictIdx(
                          e.target.value === "" ? "" : Number(e.target.value),
                        )
                      }
                      className="w-full appearance-none rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-10 text-sm text-slate-800 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    >
                      <option value="" disabled>
                        {t.labels.districtPh}
                      </option>
                      {t.districts.map((d, i) => (
                        <option key={d} value={i}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Why we ask */}
                <div className="flex items-start gap-2 rounded-xl border border-teal-200 bg-teal-50/60 px-3.5 py-3">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                    aria-hidden
                  />
                  <p className="text-[11px] leading-relaxed text-teal-900/80">
                    {t.bloodNote}
                  </p>
                </div>
              </div>
            )}

            {/* ---------- STEP 3: Security ---------- */}
            {step === 2 && (
              <div className="dgm-fade space-y-4">
                {/* Password + strength */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="reg-password"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      {t.labels.password}
                    </label>
                    <button
                      type="button"
                      onClick={suggestPassword}
                      className="inline-flex items-center gap-1 text-[10.5px] font-bold text-teal-700 transition hover:text-teal-900"
                    >
                      <Sparkles className="h-3 w-3" aria-hidden />
                      {t.suggest}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-password"
                      type={showPw ? "text" : "password"}
                      required
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyUp={(e) =>
                        setCapsLockOn(e.getModifierState?.("CapsLock") ?? false)
                      }
                      placeholder={t.labels.passwordPh}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      aria-label={
                        showPw
                          ? L("Hide password", "পাসওয়ার্ড লুকান")
                          : L("Show password", "পাসওয়ার্ড দেখান")
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    >
                      {showPw ? (
                        <EyeOff className="h-4 w-4" aria-hidden />
                      ) : (
                        <Eye className="h-4 w-4" aria-hidden />
                      )}
                    </button>
                  </div>

                  {password && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex flex-1 gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <span
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                              i <= strength
                                ? t.strength.colors[strength - 1]
                                : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wide ${t.strength.text[strength - 1]}`}
                      >
                        {t.strength.labels[strength - 1]}
                      </span>
                    </div>
                  )}

                  {capsLockOn && (
                    <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-amber-600">
                      <AlertCircle className="h-3 w-3" aria-hidden />
                      {L("Caps Lock is ON", "ক্যাপস লক চালু আছে")}
                    </p>
                  )}
                  <p className="mt-1.5 text-[10.5px] text-slate-400">
                    {t.passwordHint}
                  </p>
                </div>

                {/* Confirm password + match check */}
                <div>
                  <label
                    htmlFor="reg-confirm"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    {t.labels.confirmPassword}
                  </label>
                  <div className="relative">
                    <KeyRound
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      id="reg-confirm"
                      type={showPw2 ? "text" : "password"}
                      required
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onKeyUp={(e) =>
                        setCapsLockOn(e.getModifierState?.("CapsLock") ?? false)
                      }
                      placeholder={t.labels.confirmPasswordPh}
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw2((s) => !s)}
                      aria-label={
                        showPw2
                          ? L("Hide password", "পাসওয়ার্ড লুকান")
                          : L("Show password", "পাসওয়ার্ড দেখান")
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    >
                      {showPw2 ? (
                        <EyeOff className="h-4 w-4" aria-hidden />
                      ) : (
                        <Eye className="h-4 w-4" aria-hidden />
                      )}
                    </button>
                  </div>

                  {confirmPassword.length > 0 && (
                    <p
                      className={`mt-1.5 flex items-center gap-1 text-[11px] font-semibold ${matchOk ? "text-emerald-600" : "text-red-500"}`}
                    >
                      {matchOk ? (
                        <CheckCircle2 className="h-3 w-3" aria-hidden />
                      ) : (
                        <XCircle className="h-3 w-3" aria-hidden />
                      )}
                      {matchOk ? t.matchOk : t.matchBad}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
                  />
                  <span className="text-[11px] leading-relaxed text-slate-600">
                    {t.terms.before}
                    <Link
                      href="/terms"
                      className="font-bold text-teal-700 hover:underline"
                    >
                      {t.terms.tos}
                    </Link>
                    {t.terms.and}
                    <Link
                      href="/privacy"
                      className="font-bold text-teal-700 hover:underline"
                    >
                      {t.terms.privacy}
                    </Link>
                    {t.terms.after}
                  </span>
                </label>
              </div>
            )}

            {/* ---------- ⭕ CIRCULAR ACTION BUTTONS ---------- */}
            <div className="flex items-center justify-between pt-4">
              {/* Back / Help circle (left) */}
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    setStep((s) => s - 1);
                    setError("");
                  }}
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-4 shadow-sm transition hover:border-teal-300 hover:shadow-md active:scale-95 disabled:opacity-50"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 transition group-hover:bg-teal-50 group-hover:text-teal-700">
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {t.back}
                  </span>
                </button>
              ) : (
                <a
                  href="tel:+8801756959451"
                  aria-label={t.needHelp}
                  className="group grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-teal-300 hover:text-teal-700 active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden />
                </a>
              )}

              {/* Main circular button with orbit + progress ring (right) */}
              <div className="flex flex-col items-center">
                <div className="relative h-20 w-20">
                  <div className="dgm-spin-slow absolute -inset-[5px] rounded-full border-2 border-dashed border-teal-300/60" />

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
                      stroke="url(#dgmRegRing)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={RING_C}
                      style={{
                        strokeDashoffset: RING_C * (1 - progress / 100),
                        transition: "stroke-dashoffset 1.6s linear",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="dgmRegRing"
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

                  <button
                    type={step === 2 ? "submit" : "button"}
                    onClick={step === 2 ? undefined : next}
                    disabled={isSubmitting}
                    aria-label={step === 2 ? t.create : t.continueBtn}
                    className="group absolute inset-[7px] grid place-items-center rounded-full bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white shadow-xl shadow-teal-900/30 transition-all duration-300 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
                    ) : step === 2 ? (
                      <UserPlus
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden
                      />
                    ) : (
                      <ArrowRight
                        className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-sm font-bold text-slate-800">
                  {isSubmitting
                    ? t.creating
                    : step === 2
                      ? t.create
                      : t.continueBtn}
                </p>
                <p className="text-[10px] font-medium text-slate-400">
                  {L("Step", "ধাপ")} {step + 1}/3 · {t.steps[step]}
                </p>
              </div>
            </div>
          </form>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { icon: Lock, label: "256-bit SSL" },
              { icon: ShieldCheck, label: "HIPAA" },
              { icon: BadgeCheck, label: "ISO 27001" },
              { icon: Fingerprint, label: t.trustBio },
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

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
              {L("Your data is encrypted", "আপনার ডেটা এনক্রিপ্টেড")}
            </span>
            <a
              href="tel:+8801756959451"
              className="flex items-center gap-1.5 font-medium text-slate-600 transition hover:text-teal-700"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden />
              {t.needHelp}
            </a>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {t.allSystems}
            </span>
            <span>© 2025 {t.brand} · v2.4.1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
