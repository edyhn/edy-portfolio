"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
                    >
                        <span className="text-indigo-400">&lt;</span>
                        {SITE.name.split(" ")[0]}
                        <span className="text-indigo-400"> /&gt;</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/30"
                        >
                            Hire Me
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        id="mobile-menu-btn"
                        className="md:hidden text-zinc-300 hover:text-white transition-colors p-2"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-semibold text-zinc-200 hover:text-indigo-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: NAV_LINKS.length * 0.07 }}
                        >
                            <Link
                                href="/#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-4 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all inline-block"
                            >
                                Hire Me
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
