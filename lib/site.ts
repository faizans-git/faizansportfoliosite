/* ─────────────────────────────────────────────────────────────
   lib/site.ts — Single source of truth for site-wide constants
   Update this file to reflect changes across the entire site.
   ───────────────────────────────────────────────────────────── */

export const siteConfig = {
  /* ── Identity ─────────────────────────────────────────────── */
  name: "Faizan Ali", // ← update
  title: "Full-Stack  Engineer",
  description:
    "Full-stack developer focused on systems architecture, scalable backends, and clean web products. Based in Pakistan.",
  url: "https://yourname.dev", // ← update
  twitterHandle: "@yourhandle", // ← update

  /* ── Location ─────────────────────────────────────────────── */
  location: "Pakistan",
  timezone: "PKT (UTC +5)",

  /* ── Build metadata (shown in navbar) ────────────────────── */
  build: {
    version: "REV 1.0.0",
    lastUpdated: "MAY 19, 2025", // ← update on deploy
    status: "AVAILABLE" as "AVAILABLE" | "BUSY" | "NOT AVAILABLE",
  },

  /* ── Navigation links ────────────────────────────────────── */
  navLinks: [
    { label: "PROJECTS", href: "/projects" },
    { label: "ARCHIVE", href: "/archive" },
    { label: "NOTES", href: "/notes" },
    { label: "STACK", href: "/stack" },
    { label: "CONTACT", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
