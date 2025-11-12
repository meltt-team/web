"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

// UI Components
import Button from "../atoms/Button";
import { usePlausible } from "next-plausible";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { events } from "@/lib/plausible/events";

function JoinTheWaitList() {
  const searchParams = useSearchParams();
  const plausible = usePlausible();

  const t = useTranslations("landing");

  const attribution = useMemo(() => {
    const params = Object.fromEntries(searchParams.entries());
    return params;
  }, [searchParams]);

  const handleJoinTheWaitList = () => {
    plausible?.(events.waitlist_cta_clicked, { props: attribution });
    // Scroll to the bottom of the page
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="flex w-full md:w-[400px]">
      <Button variant="primary" onClick={handleJoinTheWaitList}>
        {t("joinTheWaitList")}
      </Button>
    </div>
  );
}

export default JoinTheWaitList;
