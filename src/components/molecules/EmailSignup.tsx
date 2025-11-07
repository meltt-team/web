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

function EmailSignup({ attribution }: { attribution: Record<string, string | undefined> }) {
  const t = useTranslations("landing");

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h2 className="text-3xl font-vollkorn text-black">
        {t("joinTitle")}
      </h2>
      <p className="text-black/70 text-lg max-w-md">
        {t("joinDescription")}
      </p>
      <div className="w-full max-w-md">
        <JoinForm attribution={attribution} />
      </div>
    </div>
  );
}

export default EmailSignup;

