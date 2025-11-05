"use client";

import Button from "../atoms/Button";
import { useTranslations } from "next-intl";

function JoinTheWaitList() {
  const t = useTranslations("landing");

  const handleJoinTheWaitList = () => {
    console.log("Join the wait list");
  };

  return (
    <div className="flex w-full">
      <Button onClick={handleJoinTheWaitList}>{t("joinTheWaitList")}</Button>
    </div>
  );
}

export default JoinTheWaitList;
