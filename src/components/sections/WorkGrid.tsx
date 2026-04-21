import WorkGridClient from "./WorkGridClient";
import { getAllProjects } from "@/sanity/queries";
import type { SanityProject } from "@/lib/types";

// Fallback projects jika Sanity kosong
const FALLBACK_PROJECTS: SanityProject[] = [
  {
    _id: "ppdb-system",
    title: "Sistem PPDB Online",
    slug: "ppdb-system",
    description:
      "Platform penerimaan peserta didik baru berbasis web dengan fitur registrasi otomatis, verifikasi dokumen, dan dashboard admin real-time.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://ppdb.example.com",
    github: "https://github.com/edyhn/ppdb",
    featured: true,
    order: 1,
  },
  {
    _id: "asset-management",
    title: "Work Order Management",
    slug: "asset-management",
    description:
      "Sistem manajemen work order berbasis web dengan glassmorphism UI, role-based auth (Admin & User), dan laporan aset digital.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    href: "https://assets.example.com",
    github: "https://github.com/edyhn/assets",
    featured: true,
    order: 2,
  },
  {
    _id: "portfolio",
    title: "Portfolio Website",
    slug: "portfolio",
    description:
      "Website portfolio personal yang dibangun dengan Next.js 16, Framer Motion untuk animasi halus, dan desain yang rich & modern.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/edyhn/portfolio",
    featured: false,
    order: 3,
  },
];

// Server Component — hanya fetch data, rendering diserahkan ke WorkGridClient
export default async function WorkGrid() {
  let projects: SanityProject[] = [];

  try {
    projects = await getAllProjects();
  } catch {
    // Sanity belum dikonfigurasi atau network error — pakai fallback
  }

  if (!projects || projects.length === 0) {
    projects = FALLBACK_PROJECTS;
  }

  return (
    <section id="work" className="relative bg-zinc-950 py-24 px-6">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[90px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-56 w-56 rounded-full bg-indigo-600/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <WorkGridClient projects={projects} />
      </div>
    </section>
  );
}
