import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    num: "01",
    title: "Quality First",
    description:
      "Consistent product quality and reliable communication with every supplier, treated as a baseline, not an afterthought.",
  },
  {
    num: "02",
    title: "Flexible Sourcing",
    description:
      "Certified and non-certified sourcing options, matched to what each buyer actually needs.",
  },
  {
    num: "03",
    title: "European Market Focus",
    description:
      "A dedicated focus on understanding German and EU import requirements as we grow.",
  },
  {
    num: "04",
    title: "Partnership Approach",
    description:
      "Long-term cooperation over transactional selling, relationships that grow alongside our partners.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-panel px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          <span className="h-0.5 w-10 bg-gold" />
          How We Work
        </div>
        <h2 className="mb-4 font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          Our <em className="text-gold italic">Approach</em>
        </h2>
        <p className="max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
          The principles that guide how we source, trade, and build
          partnerships across Europe and Southeast Asia.
        </p>

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-16 md:grid-cols-2">
          {PRINCIPLES.map((principle) => (
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
