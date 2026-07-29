import Reveal from "./Reveal";

export default function Transparency() {
  return (
    <section className="bg-panel px-4 py-20 text-center sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center justify-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          Transparency
        </div>
        <h2 className="font-serif text-3xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          We believe{" "}
          <em className="text-gold italic">trust comes from transparency.</em>
        </h2>
        <p className="mt-5 text-base text-text sm:text-lg">
          We welcome questions about product origins, sourcing, and our
          supplier relationships, openly and honestly, at every stage of
          growth.
        </p>
      </Reveal>
    </section>
  );
}
