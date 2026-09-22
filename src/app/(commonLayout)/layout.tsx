"use client";

import { usePathname } from "next/navigation";

import PublicNavbar from "@/components/shared/PublicNavbar";
import Hero from "@/components/modules/home/Hero";
import Footer from "@/components/modules/footer/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      {isHomePage && <Hero />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
