import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-maroon-deep to-[#430f16] px-4 py-8 sm:px-8">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-4 text-center sm:grid-cols-3 sm:text-left">
        <div className="flex items-center justify-center sm:justify-start">
          <Image
            src="/assets/images/logo/New_Logo.png"
            alt="Alserd"
            width={448}
            height={307}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>

        <div className="text-sm text-white-bright/70 text-center">
          © 2026 - Alserd
        </div>

        <div className="flex flex-col items-center gap-1 sm:items-end">
          <div className="text-xs font-semibold tracking-[0.08em] text-white-bright/60 uppercase">
            Reliable Products. Fair Partnerships.
          </div>
          <div className="flex gap-5">
            <Link
              href="/#contact"
              className="text-sm font-bold text-white-bright/85 transition-colors hover:text-gold"
            >
              Kontakt
            </Link>
            <Link
              href="/impressum"
              className="text-sm font-bold text-white-bright/85 transition-colors hover:text-gold"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm font-bold text-white-bright/85 transition-colors hover:text-gold"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
