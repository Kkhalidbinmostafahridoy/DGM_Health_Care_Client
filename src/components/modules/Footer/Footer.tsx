"use client";

import { useState } from "react";
import type { FormEvent } from "react";
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
  HeartPulse,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ------------------------------ Data & Types ------------------------------ */

type FooterLink = { label: string; href: string };

type SocialLink = { icon: IconType; label: string; href: string };

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

type NavSection = {
  title: string;
  ariaLabel: string;
  links: FooterLink[];
};

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Quick Links",
    ariaLabel: "Quick links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Doctors", href: "/doctors" },
      { label: "Services", href: "/services" },
      { label: "Health Packages", href: "/packages" },
      { label: "Health Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Specialties",
    ariaLabel: "Specialties",
    links: [
      { label: "Cardiology", href: "/specialties/cardiology" },
      { label: "Neurology", href: "/specialties/neurology" },
      { label: "Orthopedics", href: "/specialties/orthopedics" },
      { label: "Pediatrics", href: "/specialties/pediatrics" },
      { label: "Ophthalmology", href: "/specialties/ophthalmology" },
      { label: "Dermatology", href: "/specialties/dermatology" },
    ],
  },
  {
    title: "For Patients",
    ariaLabel: "For patients",
    links: [
      { label: "Book Appointment", href: "/appointments" },
      { label: "Online Consultation", href: "/consultation" },
      { label: "Insurance & Billing", href: "/insurance" },
      { label: "Patient Portal", href: "/portal" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "https://x.com" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "DGM Health Campus, 42 MG Road, Bengaluru, Karnataka 560001",
  },
  {
    icon: PhoneCall,
    label: "Appointments",
    value: "+8801756-959451",
    href: "tel:+8801756959451",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@dgmhealthcare.com",
    href: "mailto:care@dgmhealthcare.com",
  },
  {
    icon: Clock,
    label: "OPD Hours",
    value: "Mon–Sat: 8 AM – 8 PM · Sun: Emergency only",
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" },
];

/* ------------------------------ Sub-component ----------------------------- */

function FooterNav({ title, ariaLabel, links }: NavSection) {
  return (
    <nav aria-label={ariaLabel}>
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

/* -------------------------------- Component ------------------------------- */

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    // TODO: connect to your newsletter API
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* ----------------------- Emergency strip ----------------------- */}
      <div className="bg-linear-to-r from-red-600 to-rose-600">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 sm:justify-between sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm font-medium text-white">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Medical emergency? We&apos;re here for you 24/7.
          </p>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-red-600 shadow transition hover:bg-red-50"
            aria-label="Call emergency number"
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            Call +8801756959451
          </a>
        </div>
      </div>

      {/* ------------------------- Newsletter row ------------------------ */}
      <div className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white">
              Health tips, straight to your inbox
            </h3>
            <p className="mt-1 text-sm">
              Monthly wellness advice and hospital updates. No spam —
              unsubscribe anytime.
            </p>
          </div>

          {subscribed ? (
            <p
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              You&apos;re subscribed. Stay healthy!
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
                placeholder="Enter your email address"
                aria-label="Email address"
                className="border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-sky-500"
              />
              <Button
                type="submit"
                className="shrink-0 bg-sky-600 hover:bg-sky-500"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* --------------------------- Main grid --------------------------- */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-emerald-500 shadow-lg shadow-sky-500/25"
                aria-hidden
              >
                <HeartPulse className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                DGM <span className="font-medium text-sky-400">HealthCare</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Compassionate, world-class healthcare since 2000. Advanced
              diagnostics, expert specialists, and care that puts you first.
            </p>

            {/* Socials — external links stay as <a> */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DGM HealthCare on ${label}`}
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
                NABH Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium">
                <Award className="h-3.5 w-3.5 text-sky-400" aria-hidden />
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Link columns — rendered from one array */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="lg:col-span-3">
              <FooterNav {...section} />
            </div>
          ))}
        </div>

        {/* ------------------------- Contact block ------------------------ */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-500/10">
                <item.icon className="h-5 w-5 text-sky-400" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-0.5 block text-sm text-slate-300 transition hover:text-sky-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm leading-snug text-slate-300">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------- Bottom bar -------------------------- */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} DGM HealthCare. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition hover:text-sky-400"
                >
                  {link.label}
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
