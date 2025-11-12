"use client";

// External modules and React-related imports
import Image from "next/image";
import { useTranslations } from "next-intl";

const colorMap = {
  pink: "#FAC2EA",
  yellow: "#EFDE4E",
  white: "#FFFFFF",
};

function Deck() {
  const t = useTranslations("deck");

  const interests = [
    { label: t("festival"), color: "yellow" },
    { label: t("club"), color: "white" },
    { label: t("bar"), color: "pink" },
    { label: t("events"), color: "white" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Container for the deck */}
      <div className="relative flex justify-center items-center">
        {/* Back card - slightly rotated */}
        <div className="relative md:w-1/2">
          <Image
            src="/couple.png"
            alt={t("profileAlt")}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
          />
        </div>

        {/* Interest tags - Left side */}
        <div
          className={`px-4 py-1 text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[-00px] z-30 translate-x-[16px]`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["yellow"],
          }}
        >
          <p>{interests[0].label}</p>
        </div>
        <div
          className={`px-4 py-1 border border-border text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[40px] z-30 translate-x-[-16px]`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["white"],
          }}
        >
          <p>{interests[1].label}</p>
        </div>

        <div
          className={`px-4 py-1 text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[80px] z-30 translate-x-[16px]`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["pink"],
          }}
        >
          <p>{interests[2].label}</p>
        </div>
        <div
          className={`px-4 py-1 border border-border text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[120px] z-30 translate-x-[-16px]`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["white"],
          }}
        >
          <p>{interests[3].label}</p>
        </div>
      </div>
    </div>
  );
}

export default Deck;
