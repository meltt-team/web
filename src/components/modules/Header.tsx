"use client";

// React-related imports
import { useEffect, useState } from "react";
import Image from "next/image";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background after scrolling 10px
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down past 100px, show only when near top
      if (currentScrollY <= 100) {
        // Near the top - always show
        setIsHidden(false);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down past 100px - hide
        setIsHidden(true);
      }
      // If scrolling up but still past 100px, keep it hidden

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center">
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={30}
            priority
            className="dark:invert"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

