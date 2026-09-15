import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PublicNavbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Consultation", href: "/consultation" },
    { name: "Health Plans", href: "/health-plans" },
    { name: "Diagnosis", href: "/diagnosis" },
    { name: "NGO's", href: "/ngo's" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0">
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-white font-bold text-xl ">
                  DGM_HealCare
                </Link>
              </div>
              <nav className="hidden md:block">
                <ul className="flex space-x-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="hidden md:block">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Button>Login</Button>
                </Link>
                {/* <Link
                href="/register"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <Button>Register</Button>
              </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* mobile menu button */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 px-4 py-2">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">Open</Button>} />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Name</Label>
                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Username</Label>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose render={<Button variant="outline">Close</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default PublicNavbar;
