"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Badge } from "@/components/ui/Badge";
import { urlFor } from "@/sanity/image";
import type { SanityProject } from "@/lib/types";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

function ProjectCard({ project, index }: { project: SanityProject; index: number }) {
  const imageUrl = project.image
    ? urlFor(project.image).width(800).height(450).url()
    : null;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 text-xs font-medium text-amber-400">
            <Star size={10} fill="currentColor" />
            Featured
          </span>
        </div>
      )}

      {imageUrl ? (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </div>
      ) : (
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon size={15} />
              <span>Code</span>
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live`}
              className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkGridClient({ projects }: { projects: SanityProject[] }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Portofolio
        </span>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Proyek Terpilih
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-zinc-400">
          Beberapa proyek yang telah saya bangun — dari ide hingga produk nyata.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project._id} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
