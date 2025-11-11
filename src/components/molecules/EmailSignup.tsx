"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

// Application utilities and constants
// (none)

// UI Components
import JoinForm from "../organisms/JoinForm";

// Types
// (none)

function EmailSignup({
  attribution,
}: {
  attribution: Record<string, string | undefined>;
}) {
  const t = useTranslations("landing");

  

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-3xl font-vollkorn mb-4 text-black leading-none">💫</p>
      <h2 className="text-3xl font-vollkorn mb-2 text-black px-5 md:text-5xl">{t("joinTitle")}</h2>
      <p className="text-base text-gray mb-10 md:text-2xl">{t("joinSubtitle")}</p>
      <div className="w-full max-w-md mt-4">
        <JoinForm attribution={attribution} />
      </div>
    </div>
  );
}

export default EmailSignup;
