// src/pages/Robots.tsx
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

export default function Valor() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h1 className="font-display text-4xl md:text-5xl">Valor v3</h1>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                Our 2024–2025 robot built around{" "}
                <span className="text-blue-300 font-medium">Computer Vision–led Design</span>
                : Fast Cycles, Reliable Autonomous, and Robust Hardware
              </p>

              {/* Stats */}
              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                <Stat label="Cycle (Samples)" value="2–4 s" />
                <Stat label="Cycle (Specimens)" value="5–8 s" />
                <Stat label="Autonomous Modes" value="2" />
                <Stat label="Max Auto Points" value="128" />
                <Stat label="Motors" value="8" />
                <Stat label="Servos" value="9" />
              </div>

              {/* Feature pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Strung Linear Slides</Pill>
                <Pill>3D-Printed Claws Moulded to Sample</Pill>
                <Pill>Virtual Four-Bar Linkage</Pill>
                <Pill>Sprung Odometry</Pill>
                <Pill>Mecanum Chassis</Pill>
                <Pill>Computer Vision</Pill>
              </div>
            </div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={`${PUB}images/robots/valorv3render.webp`}
                alt="Valor v3 render"
                className="rounded-2xl border border-white/10 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW / DIMENSIONS */}
      <Section kicker="Overview" title={<span>Chassis &amp; Dimensions</span>}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-5 md:p-6">
            <img
              src={`${PUB}images/robots/robotsize.webp`}
              alt="Valor v3 dimensions and layout"
              className="rounded-xl border border-white/10"
            />
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <Stat label="Width" value="43 cm" />
              <Stat label="Height" value="39.5 cm" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Mecanum Wheels</Pill>
              <Pill>Intake Motor Space</Pill>
              <Pill>Vertical &amp; Horizontal Odometry</Pill>
              <Pill>Cable Management</Pill>
            </div>
          </div>

          <div className="space-y-4">
            <Callout title="APOC Subsystem Redesign">
              Nationals upgrade focused on{" "}
              <span className="text-blue-300 font-medium">Computer Vision</span>
              . Limelight moved to the main chassis and the intake was completely redesigned with
              strung slides, more than doubling extension speed and tripling retraction rate. The new
              mechanism supports linear motion profiling and a tighter CV pickup envelope
            </Callout>

            <Callout title="Redundancy &amp; Control">
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Integrated colour sensor feeds a driver LED panel in real time</li>
                <li>Driver is prevented from grabbing if colour or sample is invalid</li>
                <li>Sensor verifies all Computer Vision pickups</li>
              </ul>
            </Callout>

            <Callout title="Outtake: Results">
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  Extension speed: <span className="text-blue-300 font-semibold">3× faster</span> (1.5s → 0.5s)
                </li>
                <li>
                  Transfer accuracy: <span className="text-blue-300 font-semibold">95% → 99%+</span>
                </li>
                <li>
                  Outtake arm pivot: <span className="text-blue-300 font-semibold">3× faster</span> (1s → 0.3s)
                </li>
                <li>Enables 8-sample autonomous with minimal power draw</li>
              </ul>
            </Callout>
          </div>
        </div>
      </Section>

      {/* COMPUTER VISION — EMPHASISED */}
      <Section kicker="Computer Vision" title={<span>Pipeline &amp; Autonomy</span>}>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-5 md:p-6 ring-4 ring-blue-400/20">
              <div className="font-display text-2xl md:text-3xl text-white">Vision Pipeline</div>
              <p className="mt-2 text-zinc-300">
                Described by many teams as the <span className="font-semibold text-blue-300">best in the world</span>
              </p>
              <p className="mt-3 text-zinc-200">
                <span className="text-blue-300">Colour Profiling</span> → Canny Edge Detection → Erosion → Dilation →{" "}
                <span className="text-blue-300">Watershed Algorithm</span> → Segmentation → Contouring → Filtering →{" "}
                <span className="text-blue-300">Regression Application</span>
              </p>

              {/* Smaller + centered image */}
              <img
                src={`${PUB}images/robots/pipelines.webp`}
                alt="Pipeline visualisation"
                className="mt-5 mx-auto block w-full max-w-2xl rounded-xl border border-white/10"
              />
            </div>

            <div className="card p-5 md:p-6">
              <div className="font-display text-xl md:text-2xl text-white">Regression Application</div>
              <p className="mt-2 text-zinc-300">
                Multiple mathematical regressions built in Desmos align hardware motion with vision outputs for precise
                translational and rotational sample alignment — a unique and highly effective mapping from vision to
                actuation
              </p>
              <img
                src={`${PUB}images/robots/regressionplot.webp`}
                alt="Regression plots"
                className="mt-4 rounded-xl border border-white/10"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Right-column card 1 */}
            <div className="card p-5 md:p-6">
              <div className="text-[11px] uppercase tracking-widest text-zinc-400/90 font-medium">Application</div>
              <div className="font-display text-xl md:text-2xl text-white mt-1">Autonomous Submersible Intake</div>
              <ul className="mt-3 space-y-2 text-zinc-300 list-disc pl-5">
                <li>Scan submersible for sample positions</li>
                <li>
                  Use <span className="font-medium">inverse kinematics</span> to compute lateral motion and slide lengths
                </li>
                <li>Perform motion; confirm presence and colour via integrated sensor</li>
                <li>On failure, re-scan and repeat ensuring success every time</li>
              </ul>
              <img
                src={`${PUB}images/robots/autograb.webp`}
                alt="Autonomous intake sequence"
                className="mt-4 rounded-xl border border-white/10"
              />
              <div className="mt-3 text-sm text-blue-300">Outperforms a human driver with 100+ hours of experience</div>
            </div>

            {/* Right-column card 2 — PID with two text blocks side-by-side and image below */}
            <div className="card p-5 md:p-6">
              <div className="font-display text-xl md:text-2xl text-white">PID</div>

              {/* two text blocks across the top */}
              <div className="mt-3 grid md:grid-cols-2 gap-6">
                <div className="text-zinc-300 text-[15px] leading-relaxed">
                  <div className="font-semibold text-blue-300 mb-1">What is it?</div>
                  <p>
                    PID (proportional, integral, derivative) controllers provide advanced PWM power
                    control to motors based on a target and current position
                  </p>
                </div>

                <div className="text-zinc-300 text-[15px] leading-relaxed">
                  <div className="font-semibold text-blue-300 mb-1">Where was it used?</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Yaw correction</li>
                    <li>Outtake profiling</li>
                    <li>Slide movement</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>

              {/* diagram below, centered */}
              <img
                src={`${PUB}images/robots/pidflow.webp`}
                alt="PID controller diagram"
                className="mt-5 w-full max-w-md mx-auto rounded-xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ENGINEERING EXTRAS */}
      <Section kicker="Engineering" title={<span>Control &amp; Software Highlights</span>}>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Callout title="PID: Custom Yaw Correction">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>IMU issues from ESD mitigated using odometry yaw differential</li>
              <li>PID loop refined and tuned via community tooling</li>
            </ul>
          </Callout>

          <Callout title="Driver Feedback">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>LED panel indicates currently hovered sample colour</li>
              <li>Computer Vision integrated for TeleOp assistance</li>
            </ul>
          </Callout>

          <Callout title="Finite State Machine">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Multiple FSMs condense complex actions to single inputs</li>
              <li>Nested state machines for enhanced control</li>
            </ul>
          </Callout>

          <Callout title="Autonomous Speedups (FTClib)">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Parallel computation enables faster autonomous</li>
              <li>Async actions with Pedro pathing</li>
            </ul>
          </Callout>

          <Callout title="PID Refinement">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Split cases for extension versus retraction</li>
              <li>Clamping prevents incorrect motor power</li>
            </ul>
          </Callout>

          {/* NEW: fills the empty slot next to/with PID in the grid */}
          <Callout title="Pedro Pathing">
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                Bezier curves are highly energy-efficient and time-efficient but introduce a
                significant learning curve that we overcame
              </li>
            </ul>
          </Callout>
        </div>
      </Section>

      {/* ITERATIONS */}
      <Section kicker="Build" title={<span>Iterations</span>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Pre Regionals", src: `${PUB}images/robots/preregionals.webp` },
            { label: "Regionals", src: `${PUB}images/robots/regionals.webp` },
            { label: "Nationals", src: `${PUB}images/robots/nationals.webp` },
            { label: "APOC", src: `${PUB}images/robots/apoclenght.webp` },
          ].map((g) => (
            <figure
              key={g.label}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img src={g.src} alt={g.label} className="w-full h-48 object-cover" />
              <figcaption className="px-3 py-2 text-sm text-zinc-300">{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
