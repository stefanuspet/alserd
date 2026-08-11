import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductSpecTable from "../../../components/ProductSpecTable";
import BriquetteSpecSheet from "../../../components/BriquetteSpecSheet";
import { isLocale, locales, type Locale } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { getProduct, getProducts, type GalleryImage } from "../../../products/data";

function GalleryBlock({
  chunks,
  alt,
  size = "md",
}: {
  chunks: GalleryImage[][];
  alt: string;
  size?: "md" | "lg";
}) {
  if (!chunks.length) return null;
  const imageClassName =
    size === "lg"
      ? "h-auto w-full max-w-[360px] rounded-md sm:max-w-[440px]"
      : "h-auto w-full max-w-[260px] rounded-md sm:max-w-[320px]";
  const sizes =
    size === "lg" ? "(min-width: 640px) 440px, 60vw" : "(min-width: 640px) 320px, 45vw";
  return (
    <div className="my-10 space-y-6 sm:my-12">
      {chunks.map((chunk, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-center gap-4 sm:gap-5"
        >
          {chunk.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={alt}
              width={image.width}
              height={image.height}
              className={imageClassName}
              sizes={sizes}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function UniformGrid({
  images,
  alt,
  columns,
  aspect = "portrait",
}: {
  images?: GalleryImage[];
  alt: string;
  columns: 2 | 3;
  aspect?: "portrait" | "landscape";
}) {
  if (!images?.length) return null;
  return (
    <div
      className={`mx-auto my-10 grid max-w-full gap-4 sm:my-12 sm:gap-5 ${
        columns === 2 ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      {images.map((image) => (
        <div
          key={image.src}
          className={`relative overflow-hidden rounded-md ${
            aspect === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
          }`}
        >
          <Image
            src={image.src}
            alt={alt}
            fill
            className="object-cover"
            sizes={
              columns === 2
                ? "(min-width: 640px) 50vw, 50vw"
                : "(min-width: 640px) 33vw, 33vw"
            }
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-bg)_0%,transparent_18%,transparent_82%,var(--color-bg)_100%)]" />
        </div>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProducts(locale).map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getProduct(locale, slug);
  if (!product) return {};
  return {
    title: `${product.title} | Alserd`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const t = getDictionary(typedLocale);
  const product = getProduct(typedLocale, slug);
  if (!product) notFound();

  const gallerySlots: GalleryImage[][][] = [[], [], [], []];
  if (product.galleryImages) {
    const chunks: GalleryImage[][] = [];
    for (let i = 0; i < product.galleryImages.length; i += 2) {
      chunks.push(product.galleryImages.slice(i, i + 2));
    }
    if (chunks.length > 1 && chunks[chunks.length - 1].length === 1) {
      const lonely = chunks.pop()!;
      chunks[chunks.length - 1].push(...lonely);
    }
    chunks.forEach((chunk, i) => gallerySlots[i % gallerySlots.length].push(chunk));
  }
  const topChunks = product.galleryTop ? [product.galleryTop] : gallerySlots[0];
  const bottomChunks = product.galleryBottom
    ? [product.galleryBottom]
    : gallerySlots[3];

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={typedLocale} />
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
              href={`/${typedLocale}#products`}
              className="mb-6 inline-block text-sm font-bold tracking-[0.06em] text-gold uppercase hover:underline"
            >
              {t.productDetail.backToProducts}
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

            {product.galleryTop ? (
              <UniformGrid
                images={product.galleryTop}
                alt={product.title}
                columns={2}
                aspect="landscape"
              />
            ) : (
              <GalleryBlock chunks={topChunks} alt={product.title} />
            )}

            {product.forms ? (
              <div className="mt-12 sm:mt-14">
                <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
                  {t.productDetail.availableForms}
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

            <GalleryBlock chunks={gallerySlots[1]} alt={product.title} />

            {product.specTable ? (
              <ProductSpecTable table={product.specTable} t={t.specTable} />
            ) : null}

            {product.briquetteSheets ? (
              <BriquetteSpecSheet
                sheets={product.briquetteSheets}
                t={t.briquetteSheet}
              />
            ) : null}

            <UniformGrid
              images={product.featuredGrid}
              alt={product.title}
              columns={3}
            />

            <GalleryBlock chunks={gallerySlots[2]} alt={product.title} />

            <div className="mt-12 sm:mt-14">
              <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
                {t.productDetail.applications}
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

            {product.galleryBottom ? (
              <UniformGrid
                images={product.galleryBottom}
                alt={product.title}
                columns={3}
              />
            ) : (
              <GalleryBlock chunks={bottomChunks} alt={product.title} />
            )}

            <div className="mt-12 flex flex-col items-start gap-4 sm:mt-14 sm:flex-row sm:items-center">
              <Link
                href={`/${typedLocale}#contact`}
                className="w-full rounded-sm border border-gold bg-gold px-7 py-3.5 text-center text-sm font-extrabold tracking-[0.06em] text-[#241a12] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(217,178,106,0.35)] sm:w-auto"
              >
                {t.productDetail.requestQuote}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={typedLocale} />
    </div>
  );
}
