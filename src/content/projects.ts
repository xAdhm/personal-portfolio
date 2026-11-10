import type { StaticImageData } from "next/image";
import dawamShot from "@/assets/dawam.png";
import turaathShot from "@/assets/turaath-books.png";

export type ProjectLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Project = {
  slug: string;
  title: string;
  qualifier?: string; // "case study", "in progress"
  hook: string;
  stack?: string[];
  body: string;
  bullets?: string[];
  links?: ProjectLink[];
  screenshot?: { src: StaticImageData; alt: string };
  footnote?: string;
  background: "ground" | "surface" | "accent";
};

export const projects: Project[] = [
  {
    slug: "turaath-books",
    title: "Turaath Books",
    hook: "A bookstore built end to end.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Resend"],
    body: "An e-commerce site for an Islamic bookstore, with a filterable catalog of 395+ Arabic and English books and an admin dashboard for managing books and orders.",
    bullets: [
      "Two ways to pay: Stripe checkout with Apple Pay and Google Pay, or a manual Zelle flow for customers who prefer a bank transfer.",
      "Stripe webhooks confirm payments and update order status, and customers get confirmation emails.",
      "Role-based admin and customer accounts, secured with Row-Level Security on every table.",
    ],
    links: [
      { label: "Live site", href: "https://turaathbooks.com/", variant: "primary" },
    ],
    screenshot: {
      src: turaathShot,
      alt: "Turaath Books Arabic books catalog, with subject, author and price filters, a grid of books, and new arrivals and best sellers in the sidebar.",
    },
    background: "ground",
  },
  {
    slug: "dawam",
    title: "Dawam",
    hook: "A task and habit tracker.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Spring Boot", "PostgreSQL", "Supabase", "Docker"],
    body: "A full-stack tracker for daily tasks and recurring habits, with a 13-endpoint Spring Boot API behind a Next.js frontend.",
    bullets: [
      "A calendar view with month and week navigation that highlights overdue tasks.",
      "Drag-and-drop reordering within a section and across sections.",
      "One login across two separately deployed services: the API validates Supabase tokens, and the backend runs in a container on Render.",
    ],
    links: [
      { label: "Live site", href: "https://dawam-tasks.vercel.app/", variant: "primary" },
      { label: "GitHub", href: "https://github.com/xAdhm/Dawam-Tasks-Web", variant: "secondary" },
    ],
    screenshot: {
      src: dawamShot,
      alt: "Dawam task view, with tasks grouped into General and Tech sections, an empty Tasks section, and a button to add a new section.",
    },
    background: "surface",
  },
  {
    slug: "rise-and-shine",
    title: "Rise and Shine HR Platform",
    qualifier: "case study",
    hook: "A secure internal HR system, designed for 100+ employees.",
    stack: ["Next.js", "TypeScript", "Prisma", "Zod", "Supabase Postgres", "Resend"],
    body: "I built the backend API for an HR platform that replaces spreadsheets and email for onboarding and compliance at an ABA therapy organization. It handles sensitive data like SSNs and pay rates, so security shaped the whole design.",
    bullets: [
      "Two layers of access control: role-based checks in the API, backed by Postgres Row-Level Security.",
      "Field-level encryption: AES-256-GCM on 5 sensitive fields.",
      "Tamper-evident audit log: 30 event types, each entry linked to the last with a SHA-256 hash so edits can’t go unnoticed.",
    ],
    // No links yet: add { label: "Architecture diagram", ... } here once a diagram exists.
    footnote: "Built on test data, not live employee records.",
    background: "accent",
  },
  {
    slug: "luqmah",
    title: "Luqmah",
    qualifier: "in progress",
    hook: "Ingredient checking for Muslim shoppers.",
    body: "Scan a barcode, and the app flags ambiguous ingredients like gelatin and enzymes, then emails the manufacturer to ask whether they’re animal-derived. I’m building it with friends.",
    background: "ground",
  },
];
