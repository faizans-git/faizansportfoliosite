import Link from "next/link";
import Image from "next/image";
import { featuredProjects, type Project } from "@/lib/site";

function StatusBadge({ status }: { status: Project["status"] }) {
  return status === "complete" ? (
    <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-muted">
      COMPLETE
    </span>
  ) : (
    <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-accent">
      IN PROGRESS
    </span>
  );
}

function ImageArea({ project }: { project: Project }) {
  return (
    <div
      className="w-full relative overflow-hidden bg-cream-subtle"
      style={{
        height: "clamp(160px, 18vw, 280px)",
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 27px,var(--color-rule) 27px,var(--color-rule) 28px),repeating-linear-gradient(90deg,transparent,transparent 27px,var(--color-rule) 27px,var(--color-rule) 28px)`,
          }}
        >
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-rule">
            {project.type === "Backend / Systems"
              ? "ARCHITECTURE DIAGRAM"
              : "PROJECT IMAGE"}
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isRightCol = index % 2 !== 0;
  const isBottomRow = index >= 2;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={[
        "group flex flex-col hover:bg-cream-subtle transition-colors duration-200",
        "[border-bottom:1.5px_solid_var(--color-rule-strong)]",
        !isRightCol
          ? "[border-right:1.5px_solid_var(--color-rule-strong)]"
          : "",
        isBottomRow ? "sm:[border-bottom:none]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <span className="font-mono text-[0.625rem] text-accent tracking-[0.08em]">
          {project.number}
        </span>
        <span className="font-mono text-[0.625rem] text-ink-muted uppercase tracking-[0.1em]">
          {project.type}
        </span>
      </div>

      <ImageArea project={project} />

      <div className="flex flex-col flex-1 px-5 py-5">
        <h3 className="font-display font-black text-[1.25rem] leading-[1.1] tracking-[-0.03em] text-ink uppercase mb-3">
          {project.title}
        </h3>
        <p className="text-[0.8125rem] text-ink-subtle leading-[1.75] flex-1 mb-5">
          {project.description}
        </p>
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[0.625rem] text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="border-rule-b"
    >
      <div
        className="flex items-center justify-between px-[clamp(1rem,5vw,2.5rem)] py-5"
        style={{ borderBottom: "1.5px solid var(--color-rule-strong)" }}
      >
        <div className="flex items-center gap-2">
          <span className="section-label text-ink-muted">05</span>
          <span className="section-label text-ink-muted">/</span>
          <span className="section-label text-accent">FEATURED PROJECTS</span>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-accent hover:opacity-70 transition-opacity duration-150"
        >
          VIEW ALL PROJECTS
          <span className="text-[0.875rem] leading-none">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
