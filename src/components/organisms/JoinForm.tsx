"use client";

// External modules and React-related imports
import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

// Application utilities and constants
import { submitWaitlistEmail } from "@/services/waitlist";
import { useRouter } from "@/i18n/navigation";
import { events } from "@/lib/plausible/events";

// UI Components
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { usePlausible } from "next-plausible";

interface JoinFormProps {
  attribution?: Record<string, string | undefined>;
}

export default function JoinForm({ attribution }: JoinFormProps) {
  const t = useTranslations("landing");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const plausible = usePlausible();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");

    const result = await submitWaitlistEmail(email, attribution);

    if (result.ok) {
      // fire Plausible: waitlist_email_submitted
      // @ts-ignore
      plausible?.(events.waitlist_email_submitted, {
        props: attribution || {},
      });
      setState("done");
      setEmail("");
      router.push("/success");
    } else {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="email"
        required
        placeholder={t("emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === "loading" || state === "done"}
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <Button type="submit" disabled={state === "loading" || state === "done"}>
        {state === "loading" ? t("joining") : t("joinButton")}
      </Button>
      {state === "done" && (
        <p className="text-success text-sm">{t("joinSuccess")}</p>
      )}
      {state === "error" && (
        <p className="text-error text-sm">{t("joinError")}</p>
      )}
    </form>
  );
}
