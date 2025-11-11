"use client";

// External modules and React-related imports
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <Image src="/logo.svg" alt={t("logoAlt")} width={100} height={30} />

          {/* Copyright Text */}
          <div className="text-center text-md font-inter font-bold">
            {t("tagline")}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
