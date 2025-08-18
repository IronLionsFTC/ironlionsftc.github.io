import * as React from "react";
import Section from "@/components/Section";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl">{title}</h3>
      <div className="mt-3 text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Resources() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <h1 className="font-display text-4xl md:text-5xl">Resources</h1>
          <p className="mt-3 text-zinc-300">
            A curated set of links, docs, and references we use across the team. Split into{" "}
            <span className="text-blue-300">Hardware</span> and{" "}
            <span className="text-blue-300">Software</span>. Content will evolve across the season.
          </p>
        </div>
      </section>

      <Section kicker="Toolkit" title={<span>Hardware</span>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Build Essentials">
            <ul className="list-disc pl-5 space-y-2">
              <li>Drive base notes (mecanum considerations, gear ratios, wheel spacing)</li>
              <li>Linear slides &amp; stringing tips (tensioning, wear, service)</li>
              <li>Fasteners &amp; threadlocking best-practices</li>
              <li>Battery management &amp; wiring safety checklist</li>
            </ul>
          </Card>

          <Card title="Design References">
            <ul className="list-disc pl-5 space-y-2">
              <li>Subsystem packaging &amp; serviceability guidelines</li>
              <li>Weight budgeting &amp; CG placement</li>
              <li>Linkage design basics (virtual 4-bar, reach &amp; clearance)</li>
              <li>Printing notes (materials, infill, inserts)</li>
            </ul>
          </Card>
        </div>
      </Section>

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
