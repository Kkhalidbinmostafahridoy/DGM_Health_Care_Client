"use client";

import { useState } from "react";
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
  Loader2,
  CheckCircle2,
  Users,
  Clock,
  FileHeart,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export type UserRole = "patient" | "provider";

/* ---------------- Left panel content ---------------- */
const DOCTOR_IMAGE =
  // ⬇️ Replace with your own: "/images/doctor-patient.jpg"
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80";

const TRUST_STATS = [
  { icon: Users, value: "50K+", label: "Happy Patients" },
  { icon: Stethoscope, value: "200+", label: "Expert Doctors" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
];

const FEATURES = [
  "Access your medical records anytime, anywhere",
  "Book & manage appointments in one tap",
  "HIPAA-compliant, end-to-end encrypted platform",
];

/* ---------------- Right panel: role cards ---------------- */
const ROLE_CARDS: {
  id: UserRole;
  title: string;
  desc: string;
  icon: React.ElementType;
}[] = [
  {
    id: "patient",
    title: "Patient",
    desc: "Records, reports & appointments",
    icon: FileHeart,
  },
  {
    id: "provider",
    title: "Provider / Staff",
    desc: "Clinical & staff dashboard",
    icon: Stethoscope,
  },
];

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const [role, setRole] = useState<UserRole>("patient");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);

    // Simulate DGM Healthcare portal authentication call
    setTimeout(() => {
      console.log("Authenticating:", { role, identifier, rememberMe });
      setIsSubmitting(false);
      setSuccess(true);

      setTimeout(() => {
        router.push(role === "patient" ? "/dashboard" : "/provider/dashboard");
      }, 900);
    }, 1400);
  };

  return (
    <div
      id="login-form"
      className="min-h-screen bg-slate-100 antialiased lg:flex"
    >
      {/* ==================== LEFT: Doctor Image Panel ==================== */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-[55%]">
        <img
          src={DOCTOR_IMAGE}
          alt="Doctor treating a patient at DGM Healthcare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/75 to-teal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 to-transparent" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 text-white xl:p-14">
          {/* Top — Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-800/70 shadow-inner backdrop-blur">
              <Stethoscope className="h-6 w-6 text-teal-300" aria-hidden />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">DGM Healthcare</p>
              <p className="text-[11px] font-medium uppercase tracking-widest text-teal-200/80">
                Trusted Care Since 2009
              </p>
            </div>
          </div>

          {/* Middle — Headline + Features */}
          <div className="max-w-lg">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-800/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              One Portal. Complete Care.
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight xl:text-4xl">
              Caring for Life,
              <br />
              <span className="text-teal-300">Every Single Moment.</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300"
                    aria-hidden
                  />
                  <span className="text-teal-50/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom — Stats + Emergency */}
          <div>
            <div className="mb-6 grid grid-cols-3 gap-3">
              {TRUST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md"
                >
                  <stat.icon
                    className="mb-1.5 h-4 w-4 text-teal-300"
                    aria-hidden
                  />
                  <p className="text-lg font-bold leading-none">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-teal-100/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="tel:+8801756959451"
              className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-red-500"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden />
              24/7 Emergency: +880 1756-959451
            </a>
          </div>
        </div>
      </div>

      {/* ==================== RIGHT: Login Form Panel ==================== */}
      <div className="flex w-full items-center justify-center bg-white px-5 py-10 sm:px-10 lg:w-1/2 xl:w-[45%]">
        <div className="w-full max-w-md">
          {/* Mobile-only brand (left panel hidden on small screens) */}
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
              <Stethoscope className="h-5 w-5 text-teal-300" aria-hidden />
            </div>
            <p className="text-lg font-bold tracking-tight text-teal-950">
              DGM Healthcare
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Welcome Back 👋
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Sign in to securely access your{" "}
            <span className="font-semibold text-teal-800">
              {role === "patient" ? "health records" : "clinical dashboard"}
            </span>
            .
          </p>

          {/* ---------- Role selector cards ---------- */}
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
                  className={`rounded-xl border p-3 text-left transition-all duration-200 ${
                    active
                      ? "border-teal-700 bg-teal-50 ring-2 ring-teal-600/20"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <card.icon
                    className={`mb-1.5 h-5 w-5 ${
                      active ? "text-teal-700" : "text-slate-400"
                    }`}
                    aria-hidden
                  />
                  <p
                    className={`text-xs font-bold ${
                      active ? "text-teal-900" : "text-slate-700"
                    }`}
                  >
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-slate-500">
                    {card.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* ---------- Error banner ---------- */}
          {error && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {error}
            </div>
          )}

          {/* ---------- Success banner ---------- */}
          {success && (
            <div
              role="status"
              className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs font-medium text-emerald-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Verified successfully! Redirecting to your{" "}
              {role === "patient" ? "dashboard" : "staff console"}…
            </div>
          )}

          {/* ---------- Form ---------- */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
            {/* Identifier */}
            <div>
              <label
                htmlFor="identifier"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                {role === "patient"
                  ? "Email or Medical Record # (MRN)"
                  : "Staff ID or Clinical Email"}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  {role === "patient" ? (
                    <Mail className="h-4 w-4" aria-hidden />
                  ) : (
                    <Hash className="h-4 w-4" aria-hidden />
                  )}
                </span>
                <input
                  id="identifier"
                  type="text"
                  required
                  autoComplete="username"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={
                    role === "patient"
                      ? "e.g., MRN-88391 or you@email.com"
                      : "e.g., DGM-40912"
                  }
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3.5 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800"
                >
                  Reset Password?
                </Link>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
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
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-11 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4.5 w-4.5" aria-hidden />
                  ) : (
                    <Eye className="h-4.5 w-4.5" aria-hidden />
                  )}
                </button>
              </div>

              {/* Caps lock hint */}
              {capsLockOn && (
                <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-amber-600">
                  <AlertCircle className="h-3 w-3" aria-hidden />
                  Caps Lock is ON
                </p>
              )}
            </div>

            {/* Remember + secure note */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
                />
                <span className="text-xs font-medium text-slate-600">
                  Remember this device
                </span>
              </label>
              <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                SSL Secured
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || success}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-800 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-teal-900 active:bg-teal-950 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Verifying Credentials…
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Login Successful
                </>
              ) : (
                <>
                  Sign In Securely
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </form>

          {/* ---------- Register CTA ---------- */}
          <div className="mt-5 rounded-xl border border-dashed border-teal-300 bg-teal-50/50 px-4 py-3 text-center">
            <p className="text-xs text-slate-600">
              New to DGM Healthcare?{" "}
              <Link
                href="/register"
                className="font-bold text-teal-700 transition-colors hover:text-teal-900"
              >
                Create a Patient Account →
              </Link>
            </p>
            <p className="mt-1 text-[10.5px] text-slate-400">
              Free registration · Takes less than 2 minutes
            </p>
          </div>

          {/* ---------- Compliance footer ---------- */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
              HIPAA Compliant
            </span>
            <a
              href="tel:+8801756959451"
              className="flex items-center gap-1.5 font-medium text-slate-600 transition hover:text-teal-700"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden />
              Need Help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
