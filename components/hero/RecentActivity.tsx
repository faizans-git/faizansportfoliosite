import Link from "next/link";
import { getRecentCommits, timeAgo, GITHUB_USERNAME } from "@/lib/github";

const DUMMY_COMMITS = [
  {
    sha: "a7f3c9e",
    message: "feat: dental AI booking flow",
    repo: "dental-ai",
    time: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    sha: "d4b2e1a",
    message: "refactor: api gateway layer",
    repo: "farmfolks",
    time: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    sha: "9c8f1b3",
    message: "fix: redis cache invalidation",
    repo: "social-msvc",
    time: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
  },
  {
    sha: "1e7a9d0",
    message: "init: arch visualizer 3d render",
    repo: "arch-viz",
    time: new Date(Date.now() - 1000 * 60 * 60 * 75).toISOString(),
  },
  {
    sha: "b3d6f2c",
    message: "feat: rabbitmq dead letter queue handler",
    repo: "ecom-msvc",
    time: new Date(Date.now() - 1000 * 60 * 60 * 98).toISOString(),
  },
  {
    sha: "7e1c4a8",
    message: "perf: pg query plan + composite index on orders",
    repo: "ecom-msvc",
    time: new Date(Date.now() - 1000 * 60 * 60 * 130).toISOString(),
  },
];

export default async function RecentActivity() {
  const fetched = await getRecentCommits();
  const commits = fetched.length ? fetched : DUMMY_COMMITS;

  return (
    <div>
      <div className="divide-y divide-rule/40">
        {commits.map((commit) => (
          <div
            key={`${commit.sha}-${commit.time}`}
            className="grid grid-cols-[52px_1fr_auto] gap-2 items-start py-[0.5rem]"
          >
            <span className="font-mono text-[0.625rem] text-accent tracking-[0.03em] leading-[1.4]">
              {commit.sha}
            </span>
            <span className="font-mono text-[0.625rem] text-ink tracking-[0.02em] leading-[1.4] truncate">
              {commit.message}
            </span>
            <span className="font-mono text-[0.625rem] text-ink-muted tracking-[0.02em] whitespace-nowrap leading-[1.4]">
              {timeAgo(commit.time)}
            </span>
          </div>
        ))}
      </div>

      <Link
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-4 font-mono text-[0.625rem]
                   text-ink-muted uppercase tracking-[0.1em] hover:text-accent transition-colors duration-150"
      >
        VIEW ON GITHUB
        <span className="text-[0.75rem] leading-none" aria-hidden="true">
          ↗
        </span>
      </Link>
    </div>
  );
}
