import DesignSectionClient from "./DesignSectionClient";
import { getAllDesigns } from "@/sanity/queries";

// Server Component — fetch design items dari Sanity
export default async function DesignSection() {
  let designs: import("@/lib/types").SanityDesign[] = [];

  try {
    designs = await getAllDesigns();
  } catch {
    // Sanity fetch error — tampilkan placeholder
    designs = [];
  }

  return (
    <section id="design" className="relative bg-zinc-900 py-24 px-6">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-64 w-64 rounded-full bg-rose-600/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-violet-600/10 blur-[70px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <DesignSectionClient designs={designs} />
      </div>
    </section>
  );
}
