import Link from "next/link";

const PublicNavbar = () => {
  return (
    <header>
      <nav className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-black">
            DGM_HealCare
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PublicNavbar;
