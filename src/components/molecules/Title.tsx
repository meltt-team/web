"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

interface TitleProps {
  color?: "white" | "black";
}

function Title({ color = "black" }: TitleProps) {
  const t = useTranslations();
  const textColor = color === "white" ? "text-white" : "text-black";

  return (
    <h1
      className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-vollkorn leading-tight ${textColor} text-center md:text-center`}
    >
      {t.rich("landing.titleLine1", {
        bold: (chunks) => <strong>{chunks}</strong>,
      })}
      <br />
      {t.rich("landing.titleLine2", {
        bold: (chunks) => <span className="italic">{chunks}</span>,
      })}
      <br />
    </h1>
  );
}

export default Title;
