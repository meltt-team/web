// External modules and React-related imports
import { Locale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

// UI Components
import Button from "@/components/atoms/Button";
import JoinTheWaitList from "@/components/molecules/JoinTheWaitList";
import EmailSignup from "@/components/molecules/EmailSignup";
import FeatureCard from "@/components/molecules/FeatureCard";
import Title from "@/components/molecules/Title";
import { getAttributionFromURL } from "@/utils/getAttribution";
import Flare from "@/components/atoms/Flare";
import HowItWorks from "@/components/templates/HowItWorks";

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
      {/* Hero Section */}
      <section className="relative flex items-center justify-center font-sans overflow-hidden h-screen w-full bg-background">
        {/* Flare Overlay */}
        <div className="absolute inset-0">
          <Flare />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col max-w-3xl w-full h-full">
          {/* Hero Image - Natural height */}
          <div className="w-full">
            <Image
              src="/landing_mobile_v2.png"
              alt="Landing page hero"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
              quality={100}
            />
          </div>

          {/* Content - Fills remaining space */}
          <div className="flex-1 flex flex-col justify-end px-6 pb-10 gap-6">
            <div className="flex flex-col gap-4 text-left">
              <Title />
              <p className="text-base font-medium">{t("description")}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 text-base font-medium w-full">
              <JoinTheWaitList />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white min-h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <HowItWorks />
        </div>
      </section>

      {/* Email Signup Section */}
      <section
        id="email-signup"
        className="bg-white min-h-screen w-full flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 max-w-2xl">
          <EmailSignup attribution={attribution} />
        </div>
      </section>
    </main>
  );
}
