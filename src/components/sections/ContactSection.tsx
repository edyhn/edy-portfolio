"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const SOCIAL_ICONS = [
    { label: "GitHub", href: SITE.socials.github, Icon: GithubIcon },
    { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinIcon },
    { label: "Instagram", href: SITE.socials.instagram, Icon: InstagramIcon },
];

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-zinc-900 py-24 px-6">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Contact
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                        Let&apos;s Collaborate
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-zinc-400">
                        Have an interesting project or collaboration opportunity? I&apos;m always happy to hear it.
                        Don&apos;t hesitate to reach out!
                    </p>
                </motion.div>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-10"
                >
                    <Button href={`mailto:${SITE.email}`} size="lg">
                        <Mail size={18} />
                        Send Email
                    </Button>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="my-10 flex items-center gap-4"
                >
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-sm text-zinc-500">or find me on</span>
                    <div className="h-px flex-1 bg-white/10" />
                </motion.div>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-5"
                >
                    {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 hover:-translate-y-1"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </motion.div>

                {/* Email text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 text-sm text-zinc-500"
                >
                    Or drop a line at{" "}
                    <a
                        href={`mailto:${SITE.email}`}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        {SITE.email}
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
