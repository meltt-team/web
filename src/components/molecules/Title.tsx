"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

interface TitleProps {
  color?: "white" | "black";
}

function Title({ color = "black" }: TitleProps) {
  const t = useTranslations("landing");
  const textColor = color === "white" ? "text-white" : "text-black";

  return (
    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-vollkorn leading-tight ${textColor} text-left`}>
      {t("titleLine1")}
      <br />
      {t("titleLine2")}<span className="italic font-bold">{t("titleLine3")}</span>
      <br />
    </h1>
  );
}

export default Title;

