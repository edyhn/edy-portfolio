"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Palette } from "lucide-react";
import { urlFor } from "@/sanity/image";
import type { SanityDesign } from "@/lib/types";

const CATEGORY_LABELS: Record<SanityDesign["category"], string> = {
  branding: "Branding",
  uiux: "UI / UX",
  poster: "Poster & Print",
  social: "Social Media",
  illustration: "Illustration",
  other: "Other",
};

const CATEGORY_COLORS: Record<SanityDesign["category"], string> = {
  branding: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  uiux: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  poster: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  social: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  illustration: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  other: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
};

function DesignCard({ item, index }: { item: SanityDesign; index: number }) {
  const imageUrl = urlFor(item.coverImage).width(800).height(600).url();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay — always present, deeper on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
              CATEGORY_COLORS[item.category]
            }`}
          >
            <Palette size={11} />
            {CATEGORY_LABELS[item.category]}
          </span>
        </div>

        {/* Featured star */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs">
              ★
            </span>
          </div>
        )}

        {/* Content overlay — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-base font-bold text-white leading-tight">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-1 text-xs text-zinc-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {item.description}
            </p>
          )}

          {/* Tools + Link */}
          <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div className="flex flex-wrap gap-1">
              {item.tools?.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
            {item.behanceUrl && (
              <a
                href={item.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-indigo-600/90 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors shrink-0"
              >
                View
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Placeholder card untuk saat Sanity masih kosong
function PlaceholderCard({
  index,
  label,
  color,
}: {
  index: number;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-[4/3] flex items-center justify-center"
    >
      <div
        className={`absolute inset-0 opacity-10 ${color}`}
        style={{
          background: `radial-gradient(circle at 50% 50%, currentColor 0%, transparent 70%)`,
        }}
      />
      <div className="text-center px-6">
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
          <Palette size={20} className="text-zinc-500" />
        </div>
        <p className="text-sm font-medium text-zinc-500">{label}</p>
        <p className="mt-1 text-xs text-zinc-600">Tambahkan di Sanity Studio</p>
      </div>
    </motion.div>
  );
}

const PLACEHOLDER_ITEMS = [
  { label: "Logo & Branding", color: "text-rose-500" },
  { label: "UI / UX Design", color: "text-indigo-500" },
  { label: "Poster & Print", color: "text-amber-500" },
  { label: "Social Media Kit", color: "text-cyan-500" },
  { label: "Illustration", color: "text-violet-500" },
  { label: "More Work...", color: "text-zinc-500" },
];

export default function DesignSectionClient({
  designs,
}: {
  designs: SanityDesign[];
}) {
  const isEmpty = designs.length === 0;

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
          Design Work
        </span>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Hasil Desain
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-zinc-400">
          Karya visual yang saya buat — branding, UI/UX, poster, dan ilustrasi.
        </p>
      </motion.div>

      {/* Grid */}
      {isEmpty ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_ITEMS.map((item, i) => (
            <PlaceholderCard
              key={item.label}
              index={i}
              label={item.label}
              color={item.color}
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, i) => (
            <DesignCard key={design._id} item={design} index={i} />
          ))}
        </div>
      )}

      {isEmpty && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-zinc-600"
        >
          Buka{" "}
          <a
            href="/studio"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            /studio
          </a>{" "}
          untuk menambahkan karya desain kamu
        </motion.p>
      )}
    </>
  );
}
