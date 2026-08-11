import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="about" className="bg-bg px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3.5 text-base font-extrabold tracking-[0.22em] text-gold uppercase sm:text-lg">
            {t.eyebrow}
          </div>
          <p className="mx-auto text-lg font-medium text-white-bright sm:text-xl">
            {t.description}
          </p>
        </Reveal>

        <Reveal className="mx-auto flex max-w-2xl flex-col gap-12">
          <div>
            <div className="mb-5 text-base text-center font-extrabold tracking-[0.18em] text-gold uppercase sm:text-lg">
              {t.visionLabel}
            </div>
            <p className="font-serif text-center text-lg leading-snug font-medium text-white-bright italic sm:text-xl">
              {t.visionQuote}
            </p>
          </div>

          <div>
            <div className="mb-5 text-base font-extrabold tracking-[0.18em] text-gold uppercase text-center sm:text-lg">
              {t.servicesLabel}
            </div>
            <ul className="text-center">
              {t.services.map((service, i) => (
                <li
                  key={service}
                  className={`py-4 text-lg font-medium text-white-bright sm:text-xl ${
                    i !== t.services.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-base font-extrabold tracking-[0.18em] text-gold uppercase text-center sm:text-lg">
              {t.missionLabel}
            </div>
            <ul className="space-y-4 text-justify md:text-center ">
              {t.mission.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 text-lg font-medium text-text sm:text-xl"
                >
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
