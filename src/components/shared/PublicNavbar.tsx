/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, PhoneCall } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import logoImg from "../../../public/LogoImg/DGM2.png";
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Consultation", href: "/consultation" },
  { name: "Health Plans", href: "/health-plans" },
  { name: "Diagnosis", href: "/diagnosis" },
  { name: "NGOs", href: "/ngos" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* ----------------------------- Main navbar ----------------------------- */}
      <div className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <img src={logoImg.src} alt="DGM Logo" className="h-14 w-auto" />

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive(item.href)
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="outline" className="rounded-full">
              <Link href="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile: menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader className="border-b border-slate-100 pb-4 text-left">
                <SheetTitle>
                  <div>
                    <img
                      src={logoImg.src}
                      alt="DGM Logo"
                      className="h-14 w-auto"
                    />
                  </div>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu
                </SheetDescription>
              </SheetHeader>

              {/* Mobile links */}
              <nav aria-label="Mobile navigation" className="px-4 pt-4">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
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
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-2 px-4 pt-6">
                <Button className="w-full rounded-full bg-sky-600 hover:bg-sky-500">
                  <Link href="/appointments" onClick={() => setOpen(false)}>
                    <CalendarCheck className="mr-1.5 h-4 w-4" aria-hidden />
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" className="w-full rounded-full">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>

              {/* Mobile emergency */}
              <div className="mt-6 border-t border-slate-100 px-4 pt-4 pb-6">
                <a
                  href="tel:+8801756959451"
                  className="flex items-center justify-center gap-2 rounded-full bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  Emergency: +880 1756-959451
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
