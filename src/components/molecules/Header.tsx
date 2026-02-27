"use client";

// React-related imports
import { useEffect, useState } from "react";
import Image from "next/image";

// Application utilities and constants
import { Link, usePathname } from "@/i18n/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isSubpage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY + 500;

      // Change logo color after scrolling 10px
      if (currentScrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logo = isSubpage || isScrolled ? "/logo.svg" : "/logo_white.svg";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={30}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;

