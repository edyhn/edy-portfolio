"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/constants";

const SOCIAL_ICONS = [
    { label: "GitHub", href: SITE.socials.github, Icon: GithubIcon },
    { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinIcon },
    { label: "Instagram", href: SITE.socials.instagram, Icon: InstagramIcon },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-zinc-950 py-10 px-6">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Branding */}
                <p className="text-sm text-zinc-500">
                    Built with{" "}
                    <Heart size={13} className="inline text-rose-500 mx-0.5" />
                    {" "}by{" "}
                    <span className="text-indigo-400 font-medium">{SITE.name}</span>
                    {" "}· {new Date().getFullYear()}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200 hover:scale-110 transform"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
