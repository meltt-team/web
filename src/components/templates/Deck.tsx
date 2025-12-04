"use client";

// External modules and React-related imports
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const colorMap = {
  pink: "#FAC2EA",
  yellow: "#EFDE4E",
  white: "#FFFFFF",
};

// Animation variants
const interestVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.34, 1.56, 0.64, 1] as const, // Spring-like easeOut for popup effect
    },
  },
};

function Deck() {
  const t = useTranslations("deck");

  const interests = [
    { label: t("festival"), color: "yellow" },
    { label: t("club"), color: "white" },
    { label: t("bar"), color: "pink" },
    { label: t("events"), color: "white" },
  ];

  const positions = [
    "top-[-00px] translate-x-[16px]",
    "top-[40px] translate-x-[-16px]",
    "top-[80px] translate-x-[16px]",
    "top-[120px] translate-x-[-16px]",
  ];

  return (
    <div className="relative w-full">
      {/* Container for the deck */}
      <div className="relative flex justify-center">
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

        {/* Interest tags */}
        {interests.map((interest, index) => {
          const marginPercent = 15 + index * 10; // 15%, 25%, 35%, 45%
          return (
            <motion.div
              key={index}
              className={`px-4 py-1 ${
                interest.color === "white" ? "border border-border" : ""
              } text-center rounded-full font-inter font-bold text-sm text-primary absolute ${
                positions[index]
              } z-30`}
              style={{
                boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
                backgroundColor: colorMap[interest.color as keyof typeof colorMap],
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.8,
                margin: `-${marginPercent}% 0px -${marginPercent}% 0px`,
              }}
              variants={interestVariants}
            >
              <p>{interest.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Deck;
