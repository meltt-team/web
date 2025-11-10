"use client";

// External modules and React-related imports
import { useTranslations } from "next-intl";

// UI Components
import Button from "../atoms/Button";

function JoinTheWaitList() {
  const t = useTranslations("landing");

  const handleJoinTheWaitList = () => {
    const emailSection = document.getElementById("email-signup");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex w-full">
      <Button variant="primary" onClick={handleJoinTheWaitList}>{t("joinTheWaitList")}</Button>
    </div>
  );
}

export default JoinTheWaitList;
