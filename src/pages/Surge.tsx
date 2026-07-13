// src/pages/Surge.tsx
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

export default function Surge() {
    return (
        <>
            {/* HERO */}
            <section className="mx-auto max-w-7xl px-4 pt-16">
                <div className="card p-8 md:p-12">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-3">
                            <h1 className="font-display text-4xl md:text-5xl">Surge</h1>
                            <p className="mt-4 text-zinc-300 leading-relaxed">
                                Our latest high-performance FTC robot built for <span className="text-blue-400">speed</span>, <span className="text-blue-400">precision</span>, and <span className="text-blue-400">advanced autonomy</span>.
                            </p>

                            {/* Stats */}
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <Stat label="Drivetrain" value="Swerve" />
                                <Stat label="Robot Type" value="Worlds" />
                            </div>

                            {/* Feature pills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Pill>Shooter</Pill>
                                <Pill>Turret</Pill>
                                <Pill>Transfer</Pill>
                                <Pill>Intake</Pill>
                                <Pill>Fast Cycle Times</Pill>
                                <Pill>Precision Shooting</Pill>
                                <Pill>Advanced Autonomy</Pill>
                            </div>
                        </div>

                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src={`${PUB}images/robots/Robot.webp`}
                                alt="Surge Robot Hero"
                                width={2411}
                                height={996}
                                fetchPriority="high"
                                decoding="async"
                                className="aspect-square w-full h-full object-cover rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <Section kicker="Overview" title={<span>High Performance Design</span>}>
                <div className="max-w-3xl">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                        Surge is our advanced FTC robot built around a swerve drivetrain, turreted shooter, and high-performance autonomous systems. It is designed for fast cycle times, accurate shooting, smooth path following, and reliable on-field performance. Communicating strong mechanical design, control precision, and software sophistication.
                    </p>
                </div>
            </Section>

            {/* SYSTEMS GRID */}
            <Section kicker="Systems" title={<span>Engineering Breakdown</span>}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            label: "Drivetrain",
                            src: `${PUB}images/robots/driveBase.webp`,
                            width: 3840,
                            height: 1586,
                            desc: "Swerve drive implementation for unmatched omnidirectional movement and agility on the field."
                        },
                        {
                            label: "Shooter / Turret",
                            src: `${PUB}images/robots/Turret.webp`,
                            width: 3840,
                            height: 1586,
                            desc: "Precision turreted aiming system paired with a high-velocity shooter for accurate scoring from any angle."
                        },
                        {
                            label: "Transfer + Intake",
                            src: `${PUB}images/robots/transfer.webp`,
                            width: 3840,
                            height: 1586,
                            desc: "Seamless handoff between intake and shooter mechanisms ensuring minimum downtime and maximum reliability."
                        },
                        {
                            label: "Chassis / Underside",
                            src: `${PUB}images/robots/robot under.webp`,
                            width: 2411,
                            height: 996,
                            desc: "Robust chassis design with low centre of gravity and protected electronics for peak durability."
                        },
                    ].map((sys) => (
                        <div key={sys.label} className="card p-4 flex flex-col group hover:ring-2 hover:ring-blue-400/20 transition-all">
                            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 mb-4">
                                <img
                                    src={sys.src}
                                    alt={sys.label}
                                    width={sys.width}
                                    height={sys.height}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="font-display text-xl text-white">{sys.label}</h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{sys.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* HIGHLIGHTS */}
            <Section kicker="Performance" title={<span>Engineering Highlights</span>}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Callout title="Omnidirectional Movement">
                        Custom swerve drive modules allow for fluid, multi-directional motion, enabling Surge to outmaneuver opponents and line up shots faster than ever.
                    </Callout>
                    <Callout title="Turreted Precision">
                        A full 360-degree turret system allows the robot to track the goal regardless of chassis orientation, maintaining a constant scoring threat.
                    </Callout>
                    <Callout title="Advanced Localization">
                        Utilizing AprilTag vision and advanced sensor fusion for millimetre-perfect positioning and autonomous reliability.
                    </Callout>
                    <Callout title="Autonomous Intelligence">
                        Sophisticated pathing algorithms and custom-built autonomous routines designed to maximize scoring during the first 30 seconds of the match.
                    </Callout>
                    <Callout title="Rapid Cycle Times">
                        Optimized transfer pathways and high-speed intake ensure that every second on the field is spent either scoring or moving to score.
                    </Callout>
                    <Callout title="Robust Control">
                        Precision PID loops and feedforward control ensure that every mechanism moves with intentional speed and accuracy.
                    </Callout>
                </div>
            </Section>

            {/* CTA SECTION */}
            <Section kicker="Next Steps" title={<span>Explore More</span>}>
                <div className="grid sm:grid-cols-3 gap-4">
                    <a href="/robots/mufasa" className="card p-6 text-center hover:bg-white/5 transition-colors">
                        <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Previous Robot</div>
                        <div className="font-display text-xl text-white">View Mufasa</div>
                    </a>
                    <a href="/achievements" className="card p-6 text-center hover:bg-white/5 transition-colors">
                        <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Our Record</div>
                        <div className="font-display text-xl text-white">View Achievements</div>
                    </a>
                    <a href="/contact" className="card p-6 text-center hover:bg-white/5 transition-colors">
                        <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Get in Touch</div>
                        <div className="font-display text-xl text-white">Contact Us</div>
                    </a>
                </div>
            </Section>
        </>
    );
}
