import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "../products/data";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="bg-panel px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          <span className="h-0.5 w-10 bg-gold" />
          What We Offer
        </div>
        <h2 className="mb-4 font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          Our <em className="text-gold italic">Products</em>
        </h2>
        <p className="max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
          Quality-focused sourcing from Indonesia, prepared to meet import
          requirements for Germany and the European Union.
        </p>

        <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-lg border border-line p-8 transition-transform hover:-translate-y-1 sm:min-h-[420px] sm:p-10"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />

              <div className="relative">
                <div className="mb-2.5 text-xs font-extrabold tracking-[0.18em] text-gold uppercase">
                  {product.tag}
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-white-bright sm:text-3xl">
                  {product.title}
                </h3>
                <p className="mb-4 text-base text-text-dim sm:text-lg">
                  {product.summary}
                </p>
                <span className="text-sm font-extrabold tracking-[0.06em] text-gold uppercase group-hover:underline">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
