import NavLinks from "./NavLinks";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────
   Navbar — Server Component
   Renders the brand and build metadata on the server.
   NavLinks is the only Client Component (needs usePathname
   for active state and useState for mobile menu toggle).

   Layout (3-column grid):
   [Brand]  [Nav Links — centered]  [Build Meta]
   ───────────────────────────────────────────────────────────── */
export default function Navbar() {
  const { name, title, build } = siteConfig;

  return (
    <header className="sticky top-0 z-50 bg-cream border-rule-b">
      <div
        className="relative grid grid-cols-[auto_1fr_auto] items-start
                      gap-4 py-4 px-[clamp(1rem,5vw,2.5rem)]"
      >
        {/* ── Brand ─────────────────────────────────────────── */}
        <Link href="/" className="group flex-shrink-0">
          <span
            className="block font-display text-[1.2rem] font-black
                           tracking-[-0.04em] text-ink leading-none
                           group-hover:text-accent transition-colors duration-150"
          >
            {name}
          </span>
          <span
            className="block font-mono text-[0.625rem] text-ink-muted
                           uppercase tracking-[0.1em] mt-1 leading-[1.7]"
          >
            {/* Split on space before ENGINEER to always force 2 lines */}
            FULL-STACK
            <br />
            SYSTEMS ENGINEER
          </span>
        </Link>

        {/* ── Nav links — Client Component ──────────────────── */}
        {/* Handles active highlighting, mobile hamburger + menu */}
        <NavLinks />

        {/* ── Build metadata — desktop only ─────────────────── */}
        <div
          className="hidden lg:flex flex-col items-end font-mono
                        text-[0.625rem] pt-[0.15rem]"
        >
          <div className="flex gap-3 leading-[2.1]">
            <span className="text-ink-muted uppercase tracking-[0.05em]">
              CURRENT BUILD
            </span>
            <span className="text-ink uppercase tracking-[0.05em]">
              {build.version}
            </span>
          </div>
          <div className="flex gap-3 leading-[2.1]">
            <span className="text-ink-muted uppercase tracking-[0.05em]">
              LAST UPDATED
            </span>
            <span className="text-ink uppercase tracking-[0.05em]">
              {build.lastUpdated}
            </span>
          </div>
          <div className="flex gap-3 leading-[2.1]">
            <span className="text-ink-muted uppercase tracking-[0.05em]">
              STATUS
            </span>
            <span className="text-accent uppercase tracking-[0.05em]">
              {build.status}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
