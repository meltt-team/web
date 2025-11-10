// External modules and React-related imports
import { Locale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

// UI Components
import Button from "@/components/atoms/Button";
import JoinTheWaitList from "@/components/molecules/JoinTheWaitList";
import EmailSignup from "@/components/molecules/EmailSignup";
import Title from "@/components/molecules/Title";
import { getAttributionFromURL } from "@/utils/getAttribution";
import Flare from "@/components/atoms/Flare";
import HowItWorks from "@/components/templates/HowItWorks";
import Conversation from "@/components/templates/Conversation";
import Deck from "@/components/templates/Deck";
import Facts from "@/components/templates/Facts";
import Story from "@/components/templates/Story";

export default async function IndexPage({
  params,
  searchParams,
}: PageProps<"/[locale]"> & {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const attribution = getAttributionFromURL(
    new URLSearchParams(resolvedSearchParams as any)
  );

  const { locale } = resolvedParams;

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = await getTranslations("landing");

  return (
    <main>
      {/* Hero Section with Fixed Background */}
      <section className="relative w-full">
        {/* Fixed Background Image */}
        <div className="w-full relative hero-background">
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Responsive Vectors - Full screen width */}
            <div className="w-screen translate-y-[2px]">
              <img
                src="/phone-vector.svg"
                alt="Logo"
                className="w-full h-auto phone-vector"
              />
              <img
                src="/tablet-vector.svg"
                alt="Logo"
                className="w-full h-auto tablet-vector"
              />
              <img
                src="/desktop-vector.svg"
                alt="Logo"
                className="w-full h-auto desktop-vector"
              />
            </div>

            {/* Content below */}
            <div className="w-full bg-white">
              <div className="max-w-3xl mx-auto flex flex-col px-6 pb-10 gap-6">
                <div className="flex flex-col gap-4 text-left">
                  <Title />
                  <p className="text-base text-gray">{t("description")}</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4 text-base font-medium w-full">
                  <JoinTheWaitList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 pt-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <Story />
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 sm:px-16 sm:py-24 flex flex-col gap-16">
          <Facts />
        </div>
      </section>

      {/* Deck Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <Deck />
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <HowItWorks />
        </div>
      </section>

      {/* Conversation Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <Conversation />
        </div>
      </section>

      {/* Email Signup Section */}
      <section
        id="email-signup"
        className="bg-white w-full flex items-center justify-center pb-16"
      >
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 max-w-2xl">
          <EmailSignup attribution={attribution} />
        </div>
      </section>
    </main>
  );
}
