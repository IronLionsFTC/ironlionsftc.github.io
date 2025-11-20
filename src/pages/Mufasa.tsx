// src/pages/Mufasa.tsx
import * as React from "react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

/**
 * Use Vite's base URL so images work both locally and on GitHub Pages/custom domains.
 * Everything in /public is served from `${import.meta.env.BASE_URL}` at runtime.
 */
const PUB = import.meta.env.BASE_URL;

/* ---------- small local UI ---------- */

function Stat({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-left">
            <div className="text-[11px] uppercase tracking-widest text-zinc-400/90 font-medium">
                {label}
            </div>
            <div className="mt-1 font-display text-2xl md:text-3xl leading-none text-white">
                {value}
            </div>
        </div>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
            {children}
        </span>
    );
}

function Callout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    // Unified to site-blue theme, removed title dot
    return (
        <div className="card p-5 md:p-6 ring-4 ring-blue-400/20">
            <div>
                <div className="font-display text-xl md:text-2xl text-white">{title}</div>
                <div className="mt-2 text-zinc-300 text-[15px] leading-relaxed">{children}</div>
            </div>
        </div>
    );
}

/* --------------------------------- PAGE --------------------------------- */

export default function Mufasa() {
    return (
        <>
            {/* HERO */}
            <section className="mx-auto max-w-7xl px-4 pt-16">
                <div className="card p-8 md:p-12">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-3">
                            <h1 className="font-display text-4xl md:text-5xl">Mufasa</h1>
                            <p className="mt-4 text-zinc-300 leading-relaxed">
                                Coming soon...
                            </p>

                            {/* Stats */}
                            <div className="mt-8 grid sm:grid-cols-3 gap-3">
                                <Stat label="Stat 1" value="Value" />
                                <Stat label="Stat 2" value="Value" />
                                <Stat label="Stat 3" value="Value" />
                            </div>

                            {/* Feature pills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Pill>Feature 1</Pill>
                                <Pill>Feature 2</Pill>
                                <Pill>Feature 3</Pill>
                            </div>
                        </div>

                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="aspect-square rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500">
                                Image Placeholder
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW / DIMENSIONS */}
            <Section kicker="Overview" title={<span>Details</span>}>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="card p-5 md:p-6">
                        <div className="aspect-video rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 mb-4">
                            Image Placeholder
                        </div>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                            <Stat label="Width" value="-- cm" />
                            <Stat label="Height" value="-- cm" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Callout title="Feature Highlight">
                            Description of a key feature of Mufasa.
                        </Callout>

                        <Callout title="Another Feature">
                            Description of another feature.
                        </Callout>
                    </div>
                </div>
            </Section>
        </>
    );
}
