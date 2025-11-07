import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Geist,
  Geist_Mono,
  Inter,
  Luckiest_Guy,
  Vollkorn,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/molecules/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const vollkorn = Vollkorn({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-vollkorn",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "landing",
  });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body
        className={`${inter.variable} ${vollkorn.variable} bg-[#333333]! antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
