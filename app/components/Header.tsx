"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = getDictionary(locale);

  const home = `/${locale}`;
  const navLinks = [
    { href: `${home}#home`, label: t.header.nav.home },
    { href: `${home}#about`, label: t.header.nav.about },
    { href: `${home}#products`, label: t.header.nav.products },
    { href: `${home}#contact`, label: t.header.nav.contact },
  ];

  const otherLocale: Locale = locale === "en" ? "de" : "en";
  const onLocalizedPath = pathname ? /^\/(en|de)(\/|$)/.test(pathname) : false;
  const switchedPath = onLocalizedPath
    ? pathname!.replace(/^\/(en|de)/, `/${otherLocale}`)
    : null;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-maroon to-maroon-deep shadow-lg shadow-black/40">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4 sm:px-8">
        <Link href={home} className="flex items-center">
          <Image
            src="/assets/images/logo/New_Logo.png"
            alt="Alserd"
            width={448}
            height={307}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold tracking-[0.08em] text-white-bright/90 uppercase transition-colors hover:text-gold hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {switchedPath ? (
            <Link
              href={switchedPath}
              className="text-sm font-bold tracking-[0.08em] text-white-bright/70 uppercase transition-colors hover:text-gold"
            >
              {otherLocale.toUpperCase()}
            </Link>
          ) : null}
          <Link
            href={`${home}#contact`}
            className="rounded-sm border border-gold bg-gold px-6 py-3.5 text-sm font-extrabold tracking-[0.06em] text-[#241a12] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(217,178,106,0.35)]"
          >
            {t.header.becomePartner}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-white-bright/30 text-white-bright md:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-bold tracking-[0.08em] text-white-bright/90 uppercase transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          {switchedPath ? (
            <Link
              href={switchedPath}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-bold tracking-[0.08em] text-white-bright/70 uppercase transition-colors hover:bg-white/5 hover:text-gold"
            >
              {otherLocale.toUpperCase()}
            </Link>
          ) : null}
          <Link
            href={`${home}#contact`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm border border-gold bg-gold px-6 py-3.5 text-center text-sm font-extrabold tracking-[0.06em] text-[#241a12] uppercase"
          >
            {t.header.becomePartner}
          </Link>
        </nav>
      </div>
    </header>
  );
}
