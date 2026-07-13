import Section from "@/components/ui/Section";
import { publicAsset } from "@/lib/publicAsset";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type HardwareItemProps = {
  title: string;
  image: string;
  alt: string;
  description: ReactNode;
  downloadHref: string;
  downloadName?: string;
  imageWidth: number;
  imageHeight: number;
};

function HardwareItem(props: HardwareItemProps) {
  const { title, image, alt, description, downloadHref, downloadName, imageWidth, imageHeight } =
    props;
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
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
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
          {downloadName ? downloadName : "Download"}
        </a>
      </div>

      {/* Blurb */}
      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

type RepositoryCardProps = {
  title: string;
  image: string;
  href: string;
  blurb: ReactNode;
  imageWidth: number;
  imageHeight: number;
};

function RepositoryCard({
  title,
  image,
  href,
  blurb,
  imageWidth,
  imageHeight,
}: RepositoryCardProps) {
  return (
    <div className="card p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl">{title}</h3>

      <div className="mt-4 rounded-xl border border-white/10 overflow-hidden bg-white/5">
        <img
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
          className="w-full h-56 md:h-64 object-cover"
        />
      </div>

      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-blue-600/40 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-300 hover:bg-blue-600/20 transition"
        >
          <ArrowUpRight className="h-4 w-4" />
          View Repository
        </a>
      </div>

      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{blurb}</p>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <h1 className="font-display text-4xl md:text-5xl">Resources</h1>
          <p className="mt-3 text-zinc-300">
            A curated set of links, docs, and references we use across the team. Split into{" "}
            <span className="text-blue-300">Hardware</span>,{" "}
            <span className="text-blue-300">Software</span>, and{" "}
            <span className="text-blue-300">FLL</span>.
          </p>
        </div>
      </section>

      {/* HARDWARE */}
      <Section kicker="Toolkit" title={<span>Hardware</span>}>
        <div className="grid md:grid-cols-2 gap-6">
          <HardwareItem
            title="Co-Axial Four Bar Outtake (APOC)"
            image={publicAsset("images/resources/outtake-render.webp")}
            alt="APOC Intake Claw"
            imageWidth={2112}
            imageHeight={960}
            downloadHref={publicAsset("images/resources/outtake-revised.step")}
            downloadName="outtake24089.step"
            description={
              <>
                3D-printed claw moulded to sample geometry for consistent vision pickups and secure
                transfer. Tuned for low mass and fast actuation. Includes mounting pattern for our
                intake slide carriage.
              </>
            }
          />

          <HardwareItem
            title="Intake & Outtake Claw (APOC)"
            image={publicAsset("images/resources/apoc-outtake-claw.webp")}
            alt="APOC Claw"
            imageWidth={2058}
            imageHeight={1190}
            downloadHref={publicAsset("images/resources/apoc-outtake-claw.step")}
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
          <RepositoryCard
            title="DECODE Code"
            image={publicAsset("images/resources/ftc-24089-decode.webp")}
            href="https://github.com/IronLionsFTC/FTC24089-DECODE"
            imageWidth={1200}
            imageHeight={600}
            blurb={
              <>
                Season codebase for FTC 24089’s DECODE robot. Includes autonomous routines, Pedro
                pathing integration, Computer Vision modules, and refined PID profiles used in
                competition.
              </>
            }
          />
        </div>
      </Section>

      {/* FIRST LEGO LEAGUE */}
      <Section kicker="Toolkit" title={<span>First Lego League</span>}>
        <div className="grid md:grid-cols-2 gap-6">
          <HardwareItem
            title="Robot Game Rulebook Breakdown"
            image={publicAsset("images/resources/fll-banner.webp")}
            alt="FLL Rulebook"
            imageWidth={980}
            imageHeight={551}
            downloadHref={publicAsset("images/resources/fll-rulebook-easy-read.pdf")}
            downloadName="Robot Game Rulebook Breakdown"
            description={
              <>
                Simplified and annotated breakdown of the FLL Robot Game rules. Helps new and
                experienced teams quickly understand key gameplay elements, scoring, and strategy
                considerations.
              </>
            }
          />
        </div>
      </Section>
    </>
  );
}
