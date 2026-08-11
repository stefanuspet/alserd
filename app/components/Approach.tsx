import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";

export default function Approach({ t }: { t: Dictionary["approach"] }) {
  return (
    <section id="approach" className="bg-panel px-4 py-20 sm:px-8 sm:py-28">
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

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-16 md:grid-cols-2">
          {t.principles.map((principle) => (
            <div key={principle.num} className="bg-panel-alt p-8 sm:p-11">
              <div className="mb-2.5 text-sm font-extrabold tracking-[0.1em] text-gold">
                {principle.num}
              </div>
              <h4 className="mb-3 font-serif text-xl font-bold text-white-bright sm:text-2xl">
                {principle.title}
              </h4>
              <p className="text-base text-text sm:text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
