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
    title: React.ReactNode;
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
                                <Stat label="Close Zone Auto" value="15" />
                                <Stat label="Farzone Auto" value="12" />
                                <Stat label="Rapid Fire" value="3 in ≤1s" />
                            </div>

                            {/* Feature pills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Pill>Full Metal Build</Pill>
                                <Pill>Auto Align to Goal</Pill>
                                <Pill>Custom 3D Printed Shooter and Variable Hood</Pill>
                            </div>
                        </div>

                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src={`${PUB}images/robots/DECODEREGIONALSROBOT.webp`}
                                alt="Mufasa Robot"
                                className="aspect-square w-full h-full object-cover rounded-2xl border border-white/10 bg-white/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW / DIMENSIONS */}
            <Section kicker="Overview" title={<span>Details</span>}>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="card p-5 md:p-6">
                        <div className="aspect-video rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 mb-4 overflow-hidden">
                            <img
                                src={`${PUB}images/robots/DECODEREGIONALSBACK.webp`}
                                alt="Mufasa Back View"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                            <Stat label="Width" value="350mm" />
                            <Stat label="Height" value="360mm" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Callout title={<>First attempt at <span className="text-blue-400">Airsort</span></>}>
                            Sorting mechanisms are slow, heavy, and huge. We proposed an alternative system that requires no <span className="text-blue-400 font-bold">additional hardware</span>, sorting the balls midair. Powered by <span className="text-blue-400 font-bold">3D projectile motion math</span>, <span className="text-blue-400 font-bold">Airsort</span> was made into reality.
                        </Callout>

                        <Callout title="Shooting While Moving">
                            Vector calculus approximation to lead shots to counteract robot's motion and score.
                        </Callout>
                    </div>
                </div>
            </Section>
        </>
    );
}
