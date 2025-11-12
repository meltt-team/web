"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

function Facts() {
  const t = useTranslations("facts");

  const facts = [t("fact1"), t("fact2"), t("fact3")];

  return (
    <div className="w-full max-w-3xl mx-auto px-2 pb-[50px]">
      <div className="flex flex-col gap-4">
        {facts.map((fact, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Fact text */}
            <h3 className="font-vollkorn text-center font-semibold text-xl md:text-2xl text-primary">
              {fact}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facts;