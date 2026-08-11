import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li
          key={item}
          className={`relative py-4 pl-9 text-lg font-semibold text-white-bright ${
            i !== items.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <span className="absolute left-0 text-lg font-extrabold text-gold">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function WhyAlserd({ t }: { t: Dictionary["whyAlserd"] }) {
  return (
    <section id="why-alserd" className="bg-panel px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          <span className="h-0.5 w-10 bg-gold" />
          {t.eyebrow}
        </div>
        <h2 className="mb-4 font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          {t.titleStart} <em className="text-gold italic">{t.titleEm}</em>
        </h2>
        <p className="max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
          {t.description}
        </p>

        <Reveal className="mt-12 grid grid-cols-1 gap-11 sm:mt-16 md:grid-cols-2">
          <CheckList items={t.checklist1} />
          <CheckList items={t.checklist2} />
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
            {t.forWhomLabel}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {t.whom.map((whom) => (
              <div key={whom.title}>
                <h4 className="mb-1.5 text-lg font-extrabold text-white-bright">
                  {whom.title}
                </h4>
                <p className="text-base text-text-dim">{whom.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
