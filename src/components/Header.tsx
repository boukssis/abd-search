"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "border-b border-border/80 bg-surface"
          : scrolled
            ? "border-b border-border/80 bg-surface/95 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="container-site relative z-[60] flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/abd-logo.jpg"
            alt="ABD Search logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
            priority
          />
          <span className="hidden text-sm font-semibold tracking-[0.08em] text-ink sm:inline">
            ABD SEARCH
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm text-ink-muted transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.linkedInFounder}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            Start a Conversation
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-surface transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col px-6 pb-10 pt-24"
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col justify-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-3 font-display text-3xl font-medium tracking-tight text-ink transition-colors hover:text-brand"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="focus-ring rounded-md px-2 py-3 font-display text-3xl font-medium tracking-tight text-ink transition-colors hover:text-brand"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>

          <a
            href={SITE.linkedInFounder}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-4 text-sm font-medium text-white"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Start a Conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
