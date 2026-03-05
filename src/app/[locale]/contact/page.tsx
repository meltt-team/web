import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("contact");

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-primary mb-4">{t("title")}</h1>
          <p className="text-gray leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-10 text-primary">

          {/* Get in Touch */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">{t("getInTouch")}</h2>
            <p className="text-gray leading-relaxed mb-3">
              {t("getInTouchDescription")}
            </p>
            <a href="mailto:it@meltt.app" className="text-brand underline font-semibold">
              it@meltt.app
            </a>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">{t("faqTitle")}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">{t("faq1Question")}</h3>
                <p className="text-gray leading-relaxed">{t("faq1Answer")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("faq2Question")}</h3>
                <p className="text-gray leading-relaxed">{t("faq2Answer")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("faq3Question")}</h3>
                <p className="text-gray leading-relaxed">{t("faq3Answer")}</p>
              </div>
            </div>
          </section>

          {/* Helpful Links */}
          <section>
            <h2 className="text-xl md:text-lg font-bold mb-4">{t("helpfulLinks")}</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-brand underline">
                  {t("privacyPolicyLink")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand underline">
                  {t("termsLink")}
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-brand underline">
                  {t("safetyLink")}
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
