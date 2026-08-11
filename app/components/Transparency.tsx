import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";

export default function Transparency({ t }: { t: Dictionary["transparency"] }) {
  return (
    <section className="bg-panel px-4 py-20 text-center sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center justify-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          {t.eyebrow}
        </div>
        <h2 className="font-serif text-3xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          {t.titleStart} <em className="text-gold italic">{t.titleEm}</em>
        </h2>
        <p className="mt-5 text-base text-text sm:text-lg">{t.description}</p>
      </Reveal>
    </section>
  );
}
