"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

function Facts() {
  const t = useTranslations("facts");

  const facts = [t("fact1"), t("fact2"), t("fact3")];

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-2">
      <div className="flex flex-col gap-6 md:gap-8">
        {facts.map((fact, index) => (
          <div key={index} className="flex justify-center items-center gap-4">
            {/* Fact text */}
            <h3 className="font-vollkorn text-center font-semibold text-xl md:text-5xl text-primary">
              {fact}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facts;