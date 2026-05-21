import Link from "next/link";

import NavLinks from "./NavLinks";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const { name, build } = siteConfig;

  return (
    <header className="sticky top-0 z-50 border-rule-b bg-cream">
      <div className="relative grid grid-cols-[auto_1fr_auto] items-start gap-4 px-[clamp(1rem,5vw,2.5rem)] py-4">
        <Link href="/" className="group shrink-0">
          <span className="font-display block text-[1.2rem] leading-none font-black tracking-[-0.04em] text-ink transition-colors duration-150 group-hover:text-accent">
            {name}
          </span>

          <span className="font-mono mt-1 block text-[0.625rem] leading-[1.7] uppercase tracking-wider text-ink-muted">
            FULL-STACK
            <br />
            SYSTEMS ENGINEER
          </span>
        </Link>

        <NavLinks />

        <div className="font-mono hidden flex-col items-end pt-[0.15rem] text-[0.625rem] lg:flex">
          <div className="flex gap-3 leading-[2.1]">
            <span className="uppercase tracking-wider text-ink-muted">
              CURRENT BUILD
            </span>

            <span className="uppercase tracking-wider text-ink">
              {build.version}
            </span>
          </div>

          <div className="flex gap-3 leading-[2.1]">
            <span className="uppercase tracking-wider text-ink-muted">
              LAST UPDATED
            </span>

            <span className="uppercase tracking-wider text-ink">
              {build.lastUpdated}
            </span>
          </div>

          <div className="flex gap-3 leading-[2.1]">
            <span className="uppercase tracking-wider text-ink-muted">
              STATUS
            </span>

            <span className="uppercase tracking-wider text-accent">
              {build.status}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
