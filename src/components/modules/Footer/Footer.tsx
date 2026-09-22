"use client";

import { useState } from "react";
import type { FormEvent, Key } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import {
  Award,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImg from "../../../../public/LogoImg/DGM3.png";
import { useLanguage } from "../../../Translations/language-provider";
import type { Dictionary } from "../../../Translations/translations";

/* hrefs stay in the component — only labels get translated (order must match dictionary) */
const SECTION_HREFS: string[][] = [
  ["/about", "/doctors", "/services", "/packages", "/blog", "/careers"],
  [
    "/specialties/cardiology",
    "/specialties/neurology",
    "/specialties/orthopedics",
    "/specialties/pediatrics",
    "/specialties/ophthalmology",
    "/specialties/dermatology",
  ],
  [
    "/appointments",
    "/consultation",
    "/insurance",
    "/portal",
    "/testimonials",
    "/faqs",
  ],
];
const LEGAL_HREFS = ["/privacy", "/terms", "/cookies", "/sitemap"];

const SOCIAL_LINKS: { icon: IconType; label: string; href: string }[] = [
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "https://x.com" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

type ContactLabelKey = "visit" | "appointments" | "emailLabel" | "opd";
type ContactValueKey = "address" | "phone" | "emailValue" | "opdValue";

const CONTACT_ITEMS: {
  icon: LucideIcon;
  labelKey: ContactLabelKey;
  valueKey: ContactValueKey;
  href?: string;
}[] = [
  { icon: MapPin, labelKey: "visit", valueKey: "address" },
  {
    icon: PhoneCall,
    labelKey: "appointments",
    valueKey: "phone",
    href: "tel:+8801756959451",
  },
  {
    icon: Mail,
    labelKey: "emailLabel",
    valueKey: "emailValue",
    href: "mailto:care@dgmhealthcare.com",
  },
  { icon: Clock, labelKey: "opd", valueKey: "opdValue" },
];

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm transition hover:text-sky-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-400">
      {/* Logo watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={logoImg.src}
          alt=""
          className="absolute -right-24 -bottom-24 h-96 w-auto rotate-12 opacity-[0.04] select-none"
        />
      </div>

      {/* Emergency strip */}
      <div className="relative bg-linear-to-r from-red-600 to-rose-600">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 sm:justify-between sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm font-medium text-white">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {t.footer.emergencyLine}
          </p>
          <a
            href="tel:+8801756959451"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-red-600 shadow transition hover:bg-red-50"
            aria-label={t.footer.callNow}
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            {t.footer.callNow}
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              {t.footer.newsletterTitle}
            </h3>
            <p className="mt-1 text-sm">{t.footer.newsletterDesc}</p>
          </div>

          {subscribed ? (
            <p
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              {t.footer.subscribed}
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md gap-2"
            >
              <Input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                aria-label={t.footer.emailPlaceholder}
                className="border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-sky-500"
              />
              <Button
                type="submit"
                className="shrink-0 bg-sky-600 hover:bg-sky-500"
              >
                {t.footer.subscribe}
                <Send className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="DGM HealthCare — Home"
            >
              <span className="flex h-14 shrink-0 items-center justify-center rounded-2xl bg-white px-4 shadow-lg shadow-sky-500/10 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sky-500/25">
                <img
                  src={logoImg.src}
                  alt="DGM HealthCare Logo"
                  className="h-11 w-auto object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white">
                  HealthCare
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {t.footer.about}
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.footer.socialAriaPrefix} ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 bg-slate-800 transition hover:border-sky-500 hover:bg-sky-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-emerald-400"
                  aria-hidden
                />
                {t.hero.certified.split(" · ")[1]}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium">
                <Award className="h-3.5 w-3.5 text-sky-400" aria-hidden />
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Link columns — labels translated, hrefs zipped by index */}
          {t.footer.sections.map(
            (
              section: { title: Key | null | undefined; links: any[] },
              i: string | number,
            ) => (
              <div key={section.title} className="lg:col-span-3">
                <FooterNav
                  title={String(section.title ?? "")}
                  links={section.links.map((label, j) => ({
                    label,
                    href: SECTION_HREFS[i][j],
                  }))}
                />
              </div>
            ),
          )}
        </div>

        {/* Contact block */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.labelKey} className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-500/10">
                <item.icon className="h-5 w-5 text-sky-400" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t.footer.contact[item.labelKey]}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-0.5 block text-sm text-slate-300 transition hover:text-sky-400"
                  >
                    {t.footer.contact[item.valueKey]}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm leading-snug text-slate-300">
                    {t.footer.contact[item.valueKey]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <img
              src={logoImg.src}
              alt="DGM"
              className="h-5 w-auto opacity-80"
            />
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {t.footer.legal.map((label, i) => (
              <li key={label}>
                <Link
                  href={LEGAL_HREFS[i]}
                  className="transition hover:text-sky-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
