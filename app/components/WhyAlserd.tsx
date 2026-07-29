import Reveal from "./Reveal";

const CHECKLIST_1 = [
  "Germany-based business",
  "Direct sourcing from origin",
  "Transparent communication",
];

const CHECKLIST_2 = [
  "Custom specifications available",
  "Sustainable sourcing approach",
  "Long-term business mindset",
];

const WHOM = [
  {
    title: "Importers & Wholesalers",
    description: "Reliable supply at competitive terms.",
  },
  {
    title: "Food Industry & Retailers",
    description: "Vanilla and charcoal with clear origin and traceability.",
  },
  {
    title: "Private Label & Shisha Brands",
    description:
      "Custom packaging and OEM sourcing arrangements, on request.",
  },
];

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

export default function WhyAlserd() {
  return (
    <section id="why-alserd" className="bg-panel px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          <span className="h-0.5 w-10 bg-gold" />
          Why Work With Us
        </div>
        <h2 className="mb-4 font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          Why <em className="text-gold italic">Alserd</em>
        </h2>
        <p className="max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
          Built for European buyers who value direct communication, clear
          sourcing, and a partner who grows with them.
        </p>

        <Reveal className="mt-12 grid grid-cols-1 gap-11 sm:mt-16 md:grid-cols-2">
          <CheckList items={CHECKLIST_1} />
          <CheckList items={CHECKLIST_2} />
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
            For Whom?
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {WHOM.map((whom) => (
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
