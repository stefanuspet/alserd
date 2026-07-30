import Reveal from "./Reveal";

const SERVICES = [
  "Import & Export",
  "Product Sourcing",
  "Marketing Support",
  "Strategic Partnerships",
];

const MISSION = [
  "Deliver reliable products and honest communication to European customers.",
  "Build transparent, long-term partnerships, not one-off transactions.",
  "Support supplier growth and access to European markets.",
  "Grow sustainably, at a pace that protects quality and trust.",
];

export default function About() {
  return (
    <section id="about" className="bg-bg px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3.5 text-base font-extrabold tracking-[0.22em] text-gold uppercase sm:text-lg">
            About Alserd
          </div>
          <p className="mx-auto text-lg font-medium text-white-bright sm:text-xl">
            Alserd is an independent, Germany-based trade business specializing
            in import and export, product sourcing, and partnership-building
            between Europe and Southeast Asia, with the goal of creating lasting
            value for customers, suppliers, and the communities we work with.
          </p>
        </Reveal>

        <Reveal className="mx-auto flex max-w-2xl flex-col gap-12">
          <div>
            <div className="mb-5 text-base text-center font-extrabold tracking-[0.18em] text-gold uppercase sm:text-lg">
              Our Vision
            </div>
            <p className="font-serif text-center text-lg leading-snug font-medium text-white-bright italic sm:text-xl">
              &ldquo;To become a trusted bridge between producers in Southeast
              Asia and European markets, through responsible trade and fair
              partnerships.&rdquo;
            </p>
          </div>

          <div>
            <div className="mb-5 text-base font-extrabold tracking-[0.18em] text-gold uppercase text-center sm:text-lg">
              Our Services
            </div>
            <ul className="text-center">
              {SERVICES.map((service, i) => (
                <li
                  key={service}
                  className={`py-4 text-lg font-medium text-white-bright sm:text-xl ${
                    i !== SERVICES.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-base font-extrabold tracking-[0.18em] text-gold uppercase text-center sm:text-lg">
              Our Mission
            </div>
            <ul className="space-y-4 text-justify md:text-center ">
              {MISSION.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 text-lg font-medium text-text sm:text-xl"
                >
                  {/* <span className="absolute left-0 text-gold">•</span> */}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
