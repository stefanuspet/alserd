import type { Dictionary } from "../i18n/dictionaries";

export default function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="bg-bg px-4 py-24 text-center sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          {t.eyebrow}
        </div>

        <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-bold text-white-bright sm:text-6xl md:text-7xl lg:text-[5.2rem]">
          {t.titleLine1}
          <br />
          <em className="text-gold italic">{t.titleLine2}</em>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base font-medium text-white-bright sm:text-xl">
          {t.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#products"
            className="w-full rounded-sm border border-gold bg-gold px-7 py-3.5 text-sm font-extrabold tracking-[0.06em] text-[#241a12] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(217,178,106,0.35)] sm:w-auto"
          >
            {t.viewProducts}
          </a>
          <a
            href="#contact"
            className="w-full rounded-sm border-[1.5px] border-white-bright px-7 py-3.5 text-sm font-extrabold tracking-[0.06em] text-white-bright uppercase transition-transform hover:-translate-y-0.5 hover:bg-white-bright hover:text-maroon-deep sm:w-auto"
          >
            {t.becomePartner}
          </a>
        </div>
      </div>
    </section>
  );
}
