"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site";

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav
        className="hidden lg:flex items-center justify-center gap-6 h-full"
        aria-label="Primary navigation"
      >
        {siteConfig.navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`font-mono text-[0.6875rem] uppercase tracking-[0.12em]
                        transition-colors duration-150 hover:text-accent
                        ${isActive(href) ? "text-accent" : "text-ink"}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="lg:hidden absolute right-[clamp(1rem,5vw,2.5rem)]
                   top-1/2 -translate-y-1/2 p-2 flex flex-col
                   justify-center items-center gap-[5px]"
      >
        {/* Three lines → animated X on open */}
        <span
          className={`block w-[18px] h-[1.5px] bg-ink origin-center
                      transition-transform duration-200
                      ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span
          className={`block w-[18px] h-[1.5px] bg-ink
                      transition-opacity duration-150
                      ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block w-[18px] h-[1.5px] bg-ink origin-center
                      transition-transform duration-200
                      ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`lg:hidden absolute top-full left-0 right-0 z-40
                    bg-cream border-rule-b overflow-hidden
                    transition-[max-height,opacity] duration-300 ease-in-out
                    ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav
          className="flex flex-col px-[clamp(1rem,5vw,2.5rem)]"
          aria-label="Mobile navigation links"
          tabIndex={open ? 0 : -1}
        >
          {siteConfig.navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`font-mono text-[0.6875rem] uppercase tracking-[0.12em]
                          py-5 border-rule-b last:border-b-0
                          transition-colors duration-150
                          ${isActive(href) ? "text-accent" : "text-ink hover:text-accent"}`}
            >
              {label}
            </Link>
          ))}

          <div className="py-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[0.625rem] uppercase
                               tracking-[0.1em] text-ink-muted"
              >
                CURRENT BUILD
              </span>
              <span
                className="font-mono text-[0.625rem] uppercase
                               tracking-[0.1em] text-ink"
              >
                {siteConfig.build.version}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[0.625rem] uppercase
                               tracking-[0.1em] text-ink-muted"
              >
                STATUS
              </span>
              <span
                className="font-mono text-[0.625rem] uppercase
                               tracking-[0.1em] text-accent"
              >
                {siteConfig.build.status}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
