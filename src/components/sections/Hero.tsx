"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const SKILLS = [
    "Vibe Coding",
    "AI Collaboration",
    "Graphic Design",
    "UI / UX",
    "Branding",
] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center"
        >
            {/* ── Background ambience ───────────────────────────── */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
            </div>

            {/* ── Grid overlay ─────────────────────────────────── */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                }}
            />

            {/* ── Content ──────────────────────────────────────── */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* ━━━ Left — Identity ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                <div className="flex flex-col gap-6">

                    {/* Eyebrow */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="flex items-center gap-3"
                    >
                        {/* Ping dot */}
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-sm font-medium tracking-wide text-zinc-400">
                            Vibe Coder &amp; Graphic Designer
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-white"
                    >
                        Edy{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Hartono
                        </span>
                        <br />
                        Nasrah
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
                    >
                        {SITE.description}
                    </motion.p>

                    {/* Available badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={3}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Available for freelance
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={4}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/40 active:scale-95"
                        >
                            View Work
                        </Link>
                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10 active:scale-95"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* ━━━ Right — Photo + Pills ━━━━━━━━━━━━━━━━━━━━━━ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-8"
                >
                    {/* Photo */}
                    <div className="relative">
                        <div className="relative h-72 w-64 sm:h-80 sm:w-72 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/40">
                            <Image
                                src="/edy.png"
                                alt="Edy Hartono Nasrah"
                                fill
                                sizes="(max-width: 640px) 256px, 288px"
                                className="object-cover object-top"
                                priority
                            />
                            {/* Subtle dark gradient at bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                        </div>
                        {/* Glow ring */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-xl -z-10" />
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                    </div>

                    {/* Skill pills */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                        {SKILLS.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-colors duration-200 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll hint ───────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600"
            >
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="h-4 w-[1px] bg-zinc-600 rounded-full"
                />
            </motion.div>
        </section>
    );
}
