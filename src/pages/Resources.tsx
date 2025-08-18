// src/pages/Resources.tsx
import * as React from "react";
import Section from "@/components/Section";
import { ArrowDownToLine } from "lucide-react";

const PUB = import.meta.env.BASE_URL;

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl">{title}</h3>
      <div className="mt-3 text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

function HardwareItem(props: {
  title: string;
  image: string;
  alt: string;
  description: React.ReactNode;
  downloadHref: string;
  downloadName?: string;
}) {
  const { title, image, alt, description, downloadHref, downloadName } = props;
  return (
    <div className="card p-6 md:p-7">
      <div className="flex items-start justify-between">
        <h3 className="font-display text-lg md:text-xl">{title}</h3>
      </div>

      {/* Image */}
      <div className="mt-4 rounded-xl border border-white/10 overflow-hidden bg-white/5">
        <img
          src={image}
          alt={alt}
          className="w-full h-56 md:h-64 object-cover"
        />
      </div>

      {/* Download button */}
      <div className="mt-4">
        <a
          href={downloadHref}
          download={downloadName}
          className="inline-flex items-center gap-2 rounded-xl border border-blue-600/40 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-300 hover:bg-blue-600/20 transition"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download
        </a>
      </div>

      {/* Blurb */}
      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Resources() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <h1 className="font-display text-4xl md:text-5xl">Resources</h1>
          <p className="mt-3 text-zinc-300">
            A curated set of links, docs, and references we use across the team.
            Split into <span className="text-blue-300">Hardware</span> and{" "}
            <span className="text-blue-300">Software</span>.
          </p>
        </div>
      </section>

      {/* HARDWARE */}
      <Section kicker="Toolkit" title={<span>Hardware</span>}>
        <div className="grid md:grid-cols-2 gap-6">
          <HardwareItem
            title="Coaxial Four Bar Outtake (APOC)"
            image={`${PUB}images/resources/outtakerender.webp`}
            alt="APOC Intake Claw"
            downloadHref={`${PUB}images/resources/Outtake Revised.step`}
            downloadName="outtake24089.step"
            description={
              <>
                3D-printed claw moulded to sample geometry for consistent vision
                pickups and secure transfer. Tuned for low mass and fast actuation.
                Includes mounting pattern for our intake slide carriage.
              </>
            }
          />

          <HardwareItem
            title="Intake & Outtake Claw (APOC)"
            image={`${PUB}images/resources/apocouttakeclaw.webp`}
            alt="APOC Claw"
            downloadHref={`${PUB}images/resources/APOC Outtake Claw`}
            downloadName="claw.step"
            description={
              <>
                Lightweight, sample-profiled outtake end-effector designed for reliable placement
                and minimal cycle time. Tuned for low mass and fast actuation.
              </>
            }
          />
        </div>
      </Section>

      {/* SOFTWARE */}
      <Section kicker="Toolkit" title={<span>Software</span>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Control &amp; Autonomy">
            <ul className="list-disc pl-5 space-y-2">
              <li>Computer Vision pipeline overview &amp; tuning notes</li>
              <li>PID profiles for slides/outtake (split in/out with clamping)</li>
              <li>Finite State Machine patterns for complex actions</li>
              <li>Pathing (Pedro) quick-start &amp; Bezier concepts</li>
            </ul>
          </Card>
          <Card title="Dev Environment">
            <ul className="list-disc pl-5 space-y-2">
              <li>Project structure and code style conventions</li>
              <li>Logging &amp; telemetry checklist</li>
              <li>Simulator/testing workflow</li>
              <li>Release notes template &amp; driver station checklist</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
