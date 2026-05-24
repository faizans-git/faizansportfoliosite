export const siteConfig = {
  name: "Faizan Ali",
  title: "Full-Stack  Engineer",
  description:
    "Full-stack developer focused on systems architecture, scalable backends, and clean web products. Based in Pakistan.",
  url: "https://yourname.dev",
  twitterHandle: "@yourhandle",

  location: "Pakistan",
  timezone: "PKT (UTC +5)",

  build: {
    version: "REV 1.0.0",
    lastUpdated: "MAY 19, 2025",
    status: "AVAILABLE" as "AVAILABLE" | "BUSY" | "NOT AVAILABLE",
  },

  navLinks: [
    { label: "PROJECTS", href: "/projects" },
    { label: "ARCHIVE", href: "/archive" },
    { label: "NOTES", href: "/notes" },
    { label: "STACK", href: "/stack" },
    { label: "CONTACT", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export type ProjectStatus = "complete" | "in-progress";
export type ProjectType =
  | "Full-Stack"
  | "Backend / Systems"
  | "Full-Stack · E-Commerce";

export interface Project {
  slug: string;
  number: string;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  featured: boolean;
  description: string;
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "dental-ai-platform",
    number: "01",
    title: "Dental AI Platform",
    type: "Full-Stack",
    status: "complete",
    featured: true,
    description:
      "AI-powered dental clinic with appointment booking, assistant chat, and Stripe payment integration.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: undefined,
    github: "https://github.com/faizanali/",
    live: undefined,
  },
  {
    slug: "social-microservices",
    number: "02",
    title: "Social Microservices",
    type: "Backend / Systems",
    status: "complete",
    featured: true,
    description:
      "Decoupled social platform using event-driven architecture with RabbitMQ, Redis, and distributed services.",
    stack: ["Node.js", "RabbitMQ", "Redis", "MongoDB"],
    image: undefined,
    github: "https://github.com/faizanali/",
    live: undefined,
  },
  {
    slug: "architectural-visualizer",
    number: "03",
    title: "Architectural Visualizer",
    type: "Full-Stack",
    status: "complete",
    featured: true,
    description:
      "Upload a floor plan and generate interactive 3D renders with furniture and realistic lighting.",
    stack: ["Next.js", "Three.js", "Python", "PostgreSQL"],
    image: undefined,
    github: "https://github.com/faizanali/",
    live: undefined,
  },
  {
    slug: "farmfolks",
    number: "04",
    title: "Farmfolks",
    type: "Full-Stack · E-Commerce",
    status: "in-progress",
    featured: true,
    description:
      "Microservices-based e-commerce platform for farm produce with distributed order and inventory management.",
    stack: ["React", "Node.js", "MongoDB", "Redis"],
    image: undefined,
    github: "https://github.com/faizanali/",
    live: undefined,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
