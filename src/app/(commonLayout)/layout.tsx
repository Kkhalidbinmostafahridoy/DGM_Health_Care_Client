// import Footer from "@/components/modules/Footer/Footer";
// import Hero from "@/components/modules/Home/Hero";
// import PublicNavbar from "@/components/shared/PublicNavbar";

// const CommonLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <PublicNavbar />
//       <Hero />
//       <Footer />
//       {children}
//     </>
//   );
// };

// export default CommonLayout;

"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/modules/Footer/Footer";
import Hero from "@/components/modules/Home/Hero";
import PublicNavbar from "@/components/shared/PublicNavbar";

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
