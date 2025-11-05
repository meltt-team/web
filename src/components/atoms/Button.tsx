"use client";

import { useTranslations } from "next-intl";

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-black transition-colors hover:bg-zinc-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
