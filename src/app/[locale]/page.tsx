import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import JoinTheWaitList from "@/components/modules/JoinTheWaitList";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("landing");

  return (
    <div className="flex items-center h-[calc(100vh+200px)] justify-center font-sans">
      <main className="flex h-screen max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white font-luckiest">
            {t("title")}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-300">
              {t("description")}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium w-full">
          <JoinTheWaitList />
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-white/20 px-5 text-white transition-colors hover:border-white/40 hover:bg-white/10 md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("notInterested")}
          </a>
        </div>
      </main>
    </div>
  );
}
