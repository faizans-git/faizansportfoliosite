import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import RecentActivity from "./RecentActivity";

const STATUS_ROWS = [
  { key: "FOCUS", value: "Full-Stack / Backend Systems", accent: false },
  { key: "STACK", value: "Node · Python · React", accent: false },
  { key: "AVAILABLE", value: "Open to projects", accent: true },
  { key: "BUILDING", value: "Microservices · Distributed", accent: false },
  { key: "LOCATION", value: siteConfig.location, accent: false },
] as const;

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grid lg:grid-cols-[57fr_43fr] border-rule-b"
    >
      <div className="flex flex-col justify-center px-[clamp(1rem,5vw,2.5rem)] py-12 lg:py-16 border-rule-b lg:border-b-0 lg:border-rule-r">
        <div className="flex items-center gap-2 mb-5" aria-hidden="true">
          <span className="section-label text-ink-muted">01</span>
          <span className="section-label text-ink-muted">/</span>
          <span className="section-label text-accent">INTRODUCTION</span>
        </div>

        <h1 className="text-hero text-ink mb-4">
          Building
          <br />
          structured
          <br />
          digital systems
          <br />
          for modern
          <br />
          products<span className="text-accent">.</span>
        </h1>

        <div className="w-9 h-[2px] bg-ink mb-4" aria-hidden="true" />

        <p className="text-[0.9375rem] text-ink-subtle leading-[1.8] max-w-[38ch] mb-8">
          Focused on systems that hold up under pressure and interfaces worth
          using. Clean APIs, distributed architecture, and frontends that dont
          lie about what the backend can do.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            VIEW PROJECTS
            <span className="text-[1.1rem] leading-none" aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/#stack" className="btn-outline">
            EXPLORE STACK
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start px-[clamp(1rem,4vw,1.5rem)] pt-12 lg:pt-16 pb-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4" aria-hidden="true">
            <span className="section-label text-ink-muted">02</span>
            <span className="section-label text-ink-muted">/</span>
            <span className="section-label text-accent">SYSTEM STATUS</span>
          </div>

          <table
            className="w-full border border-rule"
            aria-label="System status"
          >
            <tbody>
              {STATUS_ROWS.map(({ key, value, accent }) => (
                <tr key={key} className="border-b border-rule last:border-b-0">
                  <td className="font-mono text-[0.625rem] text-ink-muted uppercase tracking-wider py-[0.5rem] px-3 w-[44%]">
                    {key}
                  </td>
                  <td
                    className={`font-mono text-[0.625rem] tracking-[0.03em] py-[0.5rem] px-3 text-right ${accent ? "text-accent" : "text-ink"}`}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4" aria-hidden="true">
            <span className="section-label text-ink-muted">03</span>
            <span className="section-label text-ink-muted">/</span>
            <span className="section-label text-ink-muted">
              RECENT ACTIVITY
            </span>
          </div>

          <Suspense fallback={<ActivitySkeleton />}>
            <RecentActivity />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function ActivitySkeleton() {
  return (
    <div
      className="divide-y divide-rule/40"
      aria-label="Loading recent activity"
      aria-busy="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-[52px_1fr_auto] gap-2 py-[0.5rem]"
        >
          <div className="h-3 w-12 bg-rule/60 rounded-sm animate-pulse" />
          <div className="h-3 bg-rule/60 rounded-sm animate-pulse" />
          <div className="h-3 w-10 bg-rule/60 rounded-sm animate-pulse" />
        </div>
      ))}
    </div>
  );
}
