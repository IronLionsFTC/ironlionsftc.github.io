import RobotHero from "@/components/content/RobotHero";
import Callout from "@/components/ui/Callout";
import Section from "@/components/ui/Section";
import StatCard from "@/components/ui/StatCard";
import { publicAsset } from "@/lib/publicAsset";

export default function MufasaPage() {
  return (
    <>
      <RobotHero
        title="Mufasa v1"
        description={
          <p>
            Our 2025–2026 robot built around <span className="text-blue-400">Rapid Fire</span> and{" "}
            <span className="text-blue-400">Airsort</span>: Fast Cycles, Reliable Hardware and
            Software.
          </p>
        }
        stats={[
          { label: "Close Zone Auto", value: "15" },
          { label: "Farzone Auto", value: "12" },
          { label: "Rapid Fire", value: "3 in ≤1s" },
        ]}
        features={[
          "Full Metal Build",
          "Auto Align to Goal",
          "Custom 3D Printed Shooter and Variable Hood",
        ]}
        image={{
          src: publicAsset("images/robots/mufasa-front.webp"),
          alt: "Mufasa robot",
          width: 1924,
          height: 1174,
          className:
            "aspect-square h-full w-full rounded-2xl border border-white/10 bg-white/5 object-cover",
        }}
      />

      {/* OVERVIEW / DIMENSIONS */}
      <Section kicker="Overview" title={<span>Details</span>}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-5 md:p-6">
            <div className="aspect-video rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 mb-4 overflow-hidden">
              <img
                src={publicAsset("images/robots/mufasa-back.webp")}
                alt="Mufasa Back View"
                width={1476}
                height={1084}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <StatCard label="Width" value="350 mm" />
              <StatCard label="Height" value="360 mm" />
            </div>
          </div>

          <div className="space-y-4">
            <Callout
              title={
                <>
                  First attempt at <span className="text-blue-400">Airsort</span>
                </>
              }
            >
              Sorting mechanisms are slow, heavy, and huge. We proposed an alternative system that
              requires no <span className="text-blue-400 font-bold">additional hardware</span>,
              sorting the balls midair. Powered by{" "}
              <span className="text-blue-400 font-bold">3D projectile motion math</span>,{" "}
              <span className="text-blue-400 font-bold">Airsort</span> was made into reality.
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
