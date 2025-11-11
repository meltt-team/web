"use client";

// External modules and React-related imports
import Image from "next/image";
import { useTranslations } from "next-intl";

function Story() {
  const t = useTranslations("story");
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        {/* Heart Icon with Glow Effect */}
        <div className="relative z-10 flex items-center justify-center h-full mb-8">
          <Image
            src="/hearty.png"
            alt={t("heartAlt")}
            width={130}
            height={130}
          />
        </div>

        {/* Main Heading */}
        <h2 className="font-vollkorn font-bold text-2xl md:text-4xl text-primary max-w-3xl">
          {t("heading")}
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl md:text-center pt-4 text-gray-500 max-w-2xl">
          {t("subheading")}
        </p>
      </div>
    </div>
  );
}

export default Story;
