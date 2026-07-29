import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Reveal from "./Reveal";

const CONTACT_CARDS = [
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    content: (
      <a
        href="https://wa.me/4915203584891"
        className="font-normal text-text-dim transition-colors hover:text-gold"
      >
        +49 1520 3584891
      </a>
    ),
  },
  {
    label: "Email",
    icon: FaEnvelope,
    content: (
      <a
        href="mailto:info@alserd.com"
        className="font-normal text-text-dim transition-colors hover:text-gold"
      >
        info@alserd.com
      </a>
    ),
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    content: (
      <a
        href="https://www.linkedin.com/company/alserd/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-normal text-text-dim transition-colors hover:text-gold"
      >
        linkedin.com/company/alserd
      </a>
    ),
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    content: (
      <a
        href="https://www.instagram.com/alserd.global"
        target="_blank"
        rel="noopener noreferrer"
        className="font-normal text-text-dim transition-colors hover:text-gold"
      >
        @alserd.global
      </a>
    ),
  },
];

const INPUT_CLASS =
  "w-full rounded-md border border-line bg-panel-alt px-4.5 py-4 text-base text-white-bright placeholder:text-text-dim focus:border-gold focus:outline-none";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-center gap-3.5 text-xs font-extrabold tracking-[0.22em] text-gold uppercase sm:text-sm">
          <span className="h-0.5 w-10 bg-gold" />
          Get In Touch
        </div>
        <h2 className="mb-4 font-serif text-4xl leading-tight font-bold text-white-bright sm:text-5xl md:text-6xl">
          Contact
        </h2>
        <p className="max-w-2xl text-lg font-medium text-white-bright sm:text-xl">
          We welcome inquiries from distributors, wholesalers, retailers, and
          private label brands. Reach out any time.
        </p>

        <Reveal className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 md:grid-cols-4">
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-line bg-panel-alt p-7"
            >
              <card.icon className="mb-3 text-2xl text-gold" />
              <div className="mb-3 text-xs font-extrabold tracking-[0.14em] text-gold uppercase">
                {card.label}
              </div>
              <p className="text-base font-semibold text-white-bright">
                {card.content}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-16">
          <h3 className="mb-6 font-serif text-2xl font-bold text-white-bright">
            Send us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2.5 block text-xs font-extrabold tracking-[0.1em] text-gold uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="mb-2.5 block text-xs font-extrabold tracking-[0.1em] text-gold uppercase">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="mb-2.5 block text-xs font-extrabold tracking-[0.1em] text-gold uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="mb-2.5 block text-xs font-extrabold tracking-[0.1em] text-gold uppercase">
                  Area of Interest
                </label>
                <select className={INPUT_CLASS}>
                  <option>Select an option</option>
                  <option>Vanilla Products</option>
                  <option>Charcoal Products</option>
                  <option>Private Label / OEM</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2.5 block text-xs font-extrabold tracking-[0.1em] text-gold uppercase">
                Message
              </label>
              <textarea
                placeholder="Tell us about your sourcing needs or inquiry..."
                className={`min-h-[150px] resize-y ${INPUT_CLASS}`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm border border-gold bg-gold px-7 py-4.5 text-base font-extrabold tracking-[0.06em] text-[#241a12] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(217,178,106,0.35)]"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
