"use client";

// External modules and React-related imports
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1] as const, // Spring-like easeOut for popup effect
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const, // Custom cubic-bezier for easeOut
    },
  },
};

function Story() {
  const t = useTranslations("story");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-[50px]">
      <motion.div
        className="flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
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
        <motion.h2
          className="font-vollkorn font-bold text-2xl md:text-4xl text-primary max-w-3xl"
          variants={itemVariants}
        >
          {t("heading")}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg lg:text-xl md:text-center pt-4 text-gray-500 max-w-2xl"
          variants={itemVariants}
        >
          {t("subheading")}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Story;
