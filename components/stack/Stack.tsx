const CATEGORIES = [
  {
    id: "frontend",
    label: "FRONTEND",
    principle:
      "The interface is the product. Speed and clarity over clever abstractions.",
    items: [
      { name: "Next.js", level: 3 },
      { name: "React", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "HTML / CSS", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "TypeScript", level: 2 },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    principle:
      "Designed to fail gracefully, scale horizontally, and be debugged at 2am.",
    items: [
      { name: "Node.js", level: 3 },
      { name: "Express.js", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "Python", level: 2 },
      { name: "RabbitMQ", level: 2 },
      { name: "Microservices", level: 2 },
    ],
  },
  {
    id: "database",
    label: "DATABASE",
    principle:
      "Pick the right model for the data shape, not the popular choice.",
    items: [
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "Redis", level: 2 },
      { name: "Prisma ORM", level: 2 },
    ],
  },
  {
    id: "infrastructure",
    label: "INFRASTRUCTURE",
    principle: "Boring infrastructure is good infrastructure.",
    items: [
      { name: "Git / GitHub", level: 3 },
      { name: "Vercel", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Stripe API", level: 2 },
      { name: "OpenAI API", level: 2 },
    ],
  },
] as const;

type Level = 1 | 2 | 3;

function ProfDots({ level }: { level: Level }) {
  return (
    <span className="flex gap-[4px] flex-shrink-0" aria-hidden="true">
      {([1, 2, 3] as Level[]).map((i) => (
        <span
          key={i}
          className={`w-[8px] h-[8px] rounded-full ${i <= level ? "bg-ink" : "bg-rule"}`}
        />
      ))}
    </span>
  );
}

function CategoryBlock({ cat }: { cat: (typeof CATEGORIES)[number] }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-5 [border-bottom:1px_solid_var(--color-rule)]">
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ink-muted">
          {cat.label}
        </span>
      </div>
      <div className="flex flex-col">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-6 py-[0.65rem] [border-bottom:1px_solid_var(--color-rule)] last:border-b-0"
          >
            <span className="font-mono text-[0.8125rem] text-ink">
              {item.name}
            </span>
            <ProfDots level={item.level as Level} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" aria-label="Stack" className="w-full border-rule-b">
      <div className="flex items-center justify-between px-[clamp(1rem,5vw,2.5rem)] py-5 border-rule-b">
        <div className="flex items-center gap-2">
          <span className="section-label text-ink-muted">04</span>
          <span className="section-label text-ink-muted">/</span>
          <span className="section-label text-accent">STACK</span>
        </div>
        <span className="section-label text-ink-muted hidden sm:block">
          TOOLS & TECHNOLOGIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Col 1 — Philosophy */}
        <div
          className="flex flex-col px-8 py-10 lg:py-14 border-rule-b lg:border-b-0"
          style={{ borderRight: "1.5px solid var(--color-rule-strong)" }}
        >
          <h2 className="font-display font-black text-[clamp(1.75rem,2.2vw,2.5rem)] leading-[1] tracking-[-0.04em] text-ink mb-6">
            Tools chosen
            <br />
            for the
            <br />
            problem<span className="text-accent">.</span>
          </h2>
          <p className="text-[0.9375rem] text-ink-subtle leading-[1.8] mb-8">
            No framework loyalty. Every tool here was picked because it solved a
            real constraint — latency, scale, or developer speed.
          </p>
          <div className="flex flex-col mt-auto">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="py-4 [border-top:1px_solid_var(--color-rule)]"
              >
                <span className="block section-label text-accent mb-1">
                  {cat.label}
                </span>
                <span className="text-[0.875rem] text-ink-muted leading-[1.6]">
                  {cat.principle}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col border-rule-b lg:border-b-0"
          style={{ borderRight: "1.5px solid var(--color-rule-strong)" }}
        >
          <div className="flex-1">
            <CategoryBlock cat={CATEGORIES[0]} />
          </div>
          <div
            className="flex-1"
            style={{ borderTop: "1.5px solid var(--color-rule-strong)" }}
          >
            <CategoryBlock cat={CATEGORIES[2]} />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex-1">
            <CategoryBlock cat={CATEGORIES[1]} />
          </div>
          <div
            className="flex-1"
            style={{ borderTop: "1.5px solid var(--color-rule-strong)" }}
          >
            <CategoryBlock cat={CATEGORIES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
