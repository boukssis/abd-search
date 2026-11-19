import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/abd-logo.jpg"
                alt="ABD Search logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.1em]">
                  ABD SEARCH
                </p>
                <p className="text-xs text-white/60">
                  Specialists in Rare Disease Talent
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A founder-led boutique search partner focused exclusively on rare
              disease and orphan drug talent across the full development
              lifecycle.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-white/45 uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-white/45 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE.linkedInFounder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                >
                  Lewis Nutley on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedInCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                >
                  ABD Search on LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="focus-ring rounded-sm text-sm text-white/75 transition-colors hover:text-white"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/45">
            © 2026 ABD Search. All rights reserved.
          </p>
          <a
            href="https://bakseezlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-3 rounded-sm"
          >
            <Image
              src="/bakseez-labs-logo.jpg"
              alt="Bakseez Labs"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain bg-white"
            />
            <span className="text-xs tracking-wide text-white/65 transition-colors group-hover:text-white">
              Designed & Developed by Bakseez Labs
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
