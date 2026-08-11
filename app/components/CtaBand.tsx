import type { Dictionary } from "../i18n/dictionaries";

export default function CtaBand({ t }: { t: Dictionary["ctaBand"] }) {
  return (
    <section className="bg-gradient-to-br from-maroon-bright to-maroon-deep px-4 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="mb-2 font-serif text-2xl leading-tight font-bold text-white-bright sm:text-3xl md:text-4xl">
            {t.title}
          </h2>
          <p className="text-sm text-white-bright/85 sm:text-base">
            {t.subtitle}
          </p>
        </div>
        <a
          href="#contact"
          className="w-full rounded-sm border-[1.5px] border-white-bright/55 px-7 py-3.5 text-center text-sm font-extrabold tracking-[0.06em] text-white-bright uppercase transition-colors hover:bg-white-bright hover:text-maroon-deep sm:w-auto"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
