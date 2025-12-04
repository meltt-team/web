"use client";

// External modules and React-related imports
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

// Animation variants
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      number: "1",
      title: t("step1Title"),
      description: t("step1Description"),
    },
    {
      number: "2",
      title: t("step2Title"),
      description: t("step2Description"),
    },
    {
      number: "3",
      title: t("step3Title"),
      description: t("step3Description"),
    },
  ];

  return (
    <section className="w-full bg-background pt-16">
      <div className="container mx-auto sm:px-16 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-vollkorn text-primary text-center font-semibold mb-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-20% 0px -20% 0px" }}
        >
          {t("title")}
        </motion.h2>

        <div className="flex flex-col gap-12 sm:gap-16">
          {steps.map((step, index) => {
            const marginPercent = 15 + index * 10; // 15%, 25%, 35%
            return (
              <motion.div
                key={step.number}
                className="flex gap-4 items-start"
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.8,
                  margin: `-${marginPercent}% 0px -${marginPercent}% 0px`,
                }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 rounded-full border border-border flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-vollkorn text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-base sm:text-xl font-inter font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;