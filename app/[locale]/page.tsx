import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Approach from "../components/Approach";
import WhyAlserd from "../components/WhyAlserd";
import Transparency from "../components/Transparency";
import CtaBand from "../components/CtaBand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { isLocale, locales, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return locale === "de"
    ? {
        title: "Alserd | Zuverlässige Versorgung für Europa",
        description:
          "Alserd verbindet europäische Einkäufer mit hochwertig beschaffter Vanille und Holzkohle aus Südostasien.",
      }
    : {
        title: "Alserd | Reliable Supply for Europe",
        description:
          "Alserd connects European buyers with quality-sourced vanilla and charcoal from Southeast Asia, built on direct sourcing, clear communication, and a partnership-first approach.",
      };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const t = getDictionary(typedLocale);

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={typedLocale} />
      <main className="flex-1">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Products t={t.products} locale={typedLocale} />
        <Approach t={t.approach} />
        <WhyAlserd t={t.whyAlserd} />
        <Transparency t={t.transparency} />
        <CtaBand t={t.ctaBand} />
        <Contact />
      </main>
      <Footer locale={typedLocale} />
    </div>
  );
}
