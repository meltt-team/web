// External modules and React-related imports
import { Locale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

// UI Components
import JoinTheWaitList from "@/components/molecules/JoinTheWaitList";
import EmailSignup from "@/components/molecules/EmailSignup";
import Title from "@/components/molecules/Title";
import { getAttributionFromURL } from "@/utils/getAttribution";
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
    // WRAPPER CONTAINER
    <main className={`bg-white`}>
      {/* VIEWPORT SECTION */}
      <div className="min-h-screen flex flex-col">
        {/* SPACER - Grows to push content to bottom */}
        {/* Mobile - Phone Background */}
        <div
          className="flex-grow relative bg-cover bg-center bg-no-repeat block md:hidden"
          style={{ backgroundImage: "url('/phone-image.png')" }}
        >
          <div className="flex justify-center w-full absolute bottom-0 translate-y-[2px]">
            <Image
              src="/phone-vector-2.svg"
              alt="Phone"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Tablet - Tablet Background */}
        <div
          className="flex-grow relative bg-cover bg-center bg-no-repeat hidden md:block lg:hidden"
          style={{ backgroundImage: "url('/tablet-image.png')" }}
        >
          <div className="flex justify-center w-full absolute bottom-0 translate-y-[2px]">
            <Image
              src="/tablet-vector-2.svg"
              alt="Phone"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Desktop - Desktop Background */}
        <div
          className="flex-grow relative bg-cover bg-center bg-no-repeat hidden lg:block"
          style={{ backgroundImage: "url('/desktop-image.png')" }}
        >
          <div className="flex justify-center w-full absolute bottom-0 translate-y-[2px]">
            <Image
              src="/desktop-vector-2.svg"
              alt="Phone"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="w-full">
          {/* PHONE VECTOR IMAGE */}

          <div>
            <div className="max-w-3xl mx-auto flex flex-col px-6 pb-10 gap-6">
              <div className="flex flex-col text-left">
                <Title />
                <p className="text-base text-gray">{t("description")}</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col text-base font-medium w-full">
                <JoinTheWaitList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 pt-12 sm:px-16 sm:py-24 flex flex-col gap-16">
          <Story />
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 sm:px-16 flex flex-col gap-16">
          <Facts />
        </div>
      </section>

      {/* Deck Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 sm:px-16 flex flex-col gap-16">
          <Deck />
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 sm:px-16 flex flex-col gap-16">
          <HowItWorks />
        </div>
      </section>

      {/* Conversation Section */}
      <section className="bg-white w-full flex items-center justify-center">
        <div className="container mx-auto px-6 sm:px-16 flex flex-col gap-16">
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
