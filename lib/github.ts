export interface Commit {
  sha: string;
  message: string;
  repo: string;
  time: string;
}

//  api response wasnt as exxpected

export const GITHUB_USERNAME = "your-github-username";

export function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;

  return `${Math.floor(diff / 604800)}w ago`;
}

export async function getRecentCommits(
  username = GITHUB_USERNAME,
  count = 4,
): Promise<Commit[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return [];

    const events = (await res.json()) as Record<string, unknown>[];

    return events
      .filter((e) => e.type === "PushEvent")
      .flatMap((e) => {
        const payload = e.payload as {
          commits?: { sha: string; message: string }[];
        };

        const repoName = (e.repo as { name: string }).name.split("/")[1];
        const createdAt = e.created_at as string;

        return (payload.commits ?? []).map((c) => ({
          sha: c.sha.slice(0, 7),
          message: c.message.split("\n")[0].slice(0, 52),
          repo: repoName,
          time: createdAt,
        }));
      })
      .slice(0, count);
  } catch {
    return [];
  }
}
