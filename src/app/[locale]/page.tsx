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
    <>
      {/* Hero Section with Background Image */}
      <div className="relative flex items-center justify-center font-sans overflow-hidden h-screen w-full">
        <Image
          src="/landing_v3.png"
          alt="Landing background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <main className="relative z-10 flex max-w-3xl flex-col items-center justify-between py-16 px-6 sm:px-16 sm:py-32 h-full w-full">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <Title color="white" />
          </div>
          <div className="flex flex-col gap-4 text-base font-medium w-full">
            <JoinTheWaitList />
          </div>
        </main>
      </div>

      {/* Feature Section */}
      <section className="bg-white min-h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <FeatureCard />
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

      {/* Cards Section */}
      <section className="bg-white min-h-screen w-full">
        <div className="container mx-auto px-6 py-12 sm:px-16 sm:py-24">
          {/* Add your cards here */}
        </div>
      </section>
    </>
  );
}
