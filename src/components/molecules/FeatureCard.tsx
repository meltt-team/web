"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";
import Image from "next/image";

// UI Components
import Card from "../atoms/Card";

function FeatureCard() {
  const t = useTranslations("landing");

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square rounded-md overflow-hidden">
            <Image
              src="/landing_v3.png"
              alt={t("featureImageAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-vollkorn font-bold text-black">
            {t("featureTitle")}
          </h3>
          <p className="text-black/70 text-base leading-relaxed">
            {t("featureDescription")}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default FeatureCard;

