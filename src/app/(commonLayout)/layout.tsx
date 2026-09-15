import Footer from "@/components/modules/Footer/Footer";
import Hero from "@/components/modules/Home/Hero";
import PublicNavbar from "@/components/shared/PublicNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbar />
      <Hero />
      <Footer />
      {children}
    </>
  );
};

export default CommonLayout;
