import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductSpecTable from "../../components/ProductSpecTable";
import BriquetteSpecSheet from "../../components/BriquetteSpecSheet";
import { PRODUCTS, getProduct } from "../data";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Alserd`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />

          <div className="relative mx-auto max-w-[1180px]">
            <Link
              href="/#products"
              className="mb-6 inline-block text-sm font-bold tracking-[0.06em] text-gold uppercase hover:underline"
            >
              ← Back to Products
            </Link>
            <div className="mb-3 text-xs font-extrabold tracking-[0.18em] text-gold uppercase sm:text-sm">
              {product.tag}
            </div>
            <h1 className="font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
              {product.summary}
            </p>
          </div>
        </section>

        <section className="bg-bg px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1180px]">
            <p className="max-w-3xl text-base text-text sm:text-lg">
              {product.intro}
            </p>

            {product.forms ? (
              <div className="mt-12 sm:mt-14">
                <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
                  Available Forms
                </div>
                <ul>
                  {product.forms.map((form, i) => (
                    <li
                      key={form}
                      className={`py-4 text-lg font-semibold text-white-bright ${
                        i !== (product.forms?.length ?? 0) - 1
                          ? "border-b border-line"
                          : ""
                      }`}
                    >
                      {form}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {product.galleryImages?.length ? (
              <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-5">
                {product.galleryImages.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={product.title}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full self-start rounded-md"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                ))}
              </div>
            ) : null}

            {product.specTable ? (
              <ProductSpecTable table={product.specTable} />
            ) : null}

            {product.briquetteSheets ? (
              <BriquetteSpecSheet sheets={product.briquetteSheets} />
            ) : null}

            <div className="mt-12 sm:mt-14">
              <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
                Applications
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {product.applications.map((app) => (
                  <li key={app} className="relative pl-6 text-base text-text">
                    <span className="absolute left-0 text-gold">•</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-md border-l-4 border-gold bg-panel-alt p-8 text-base text-text-dim sm:mt-14 sm:p-10 sm:text-lg">
              {product.note}
            </div>

            <div className="mt-12 flex flex-col items-start gap-4 sm:mt-14 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="w-full rounded-sm border border-gold bg-gold px-7 py-3.5 text-center text-sm font-extrabold tracking-[0.06em] text-[#241a12] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(217,178,106,0.35)] sm:w-auto"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
