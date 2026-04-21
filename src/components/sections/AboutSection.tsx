"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import type { SanityExperience } from "@/lib/types";

const SKILLS_WITH_LEVELS = [
  { name: "AI Prompting & Collaboration", level: 92, category: "tool" as const },
  { name: "Graphic Design", level: 85, category: "design" as const },
  { name: "UI / UX Design", level: 82, category: "design" as const },
  { name: "Branding & Visual Identity", level: 80, category: "design" as const },
  { name: "Figma", level: 78, category: "design" as const },
  { name: "Web App Building (AI-assisted)", level: 88, category: "tool" as const },
  { name: "Product Ideation", level: 85, category: "tool" as const },
] as const;

const CATEGORY_COLORS = {
  tool: "bg-indigo-500",
  design: "bg-rose-500",
} as const;

const CATEGORY_LABELS = {
  tool: "Tools & Workflow",
  design: "Design",
} as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// Komponen ini menerima experiences dari Server Component parent
export default function AboutSection({
  experiences,
}: {
  experiences: SanityExperience[];
}) {
  return (
    <section id="about" className="relative bg-zinc-900 py-24 px-6">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-full max-w-lg -translate-x-1/2 rounded-full bg-indigo-700/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            About
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Bio + Info + Experience */}
          <div className="flex flex-col gap-8">
            {/* Bio card */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-base leading-relaxed text-zinc-300">
                {SITE.description}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin size={15} className="text-indigo-400 shrink-0" />
                  Indonesia
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Mail size={15} className="text-indigo-400 shrink-0" />
                  {SITE.email}
                </div>
                <div className="flex items-center gap-2 text-sm col-span-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-400">Available for freelance</span>
                </div>
              </div>
            </motion.div>

            {/* Experience — dari Sanity */}
            <motion.div {...fadeUp(0.15)}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-500">
                <Briefcase size={14} />
                Experience
              </h3>
              <div className="relative flex flex-col gap-6 pl-5">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 to-transparent" />
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp._id}
                    {...fadeUp(0.2 + i * 0.1)}
                    className="relative"
                  >
                    <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-zinc-900" />
                    <p className="text-xs text-indigo-400 font-medium mb-0.5">
                      {exp.period}
                    </p>
                    <h4 className="font-semibold text-white">
                      {exp.role}{" "}
                      <span className="text-zinc-400">@ {exp.company}</span>
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <motion.div {...fadeUp(0.2)}>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Tech Stack & Skills
            </h3>

            {/* Legend */}
            <div className="mb-5 flex flex-wrap gap-3">
              {(Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>).map((key) => (
                <div key={key} className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className={`h-2 w-2 rounded-full ${CATEGORY_COLORS[key]}`} />
                  {CATEGORY_LABELS[key]}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {SKILLS_WITH_LEVELS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-200">{skill.name}</span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.8, ease: "easeOut" as const }}
                      className={`h-full rounded-full ${CATEGORY_COLORS[skill.category]}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {SKILLS_WITH_LEVELS.map((skill) => (
                <Badge key={skill.name} variant="default">{skill.name}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
