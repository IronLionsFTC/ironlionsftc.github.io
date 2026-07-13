import { TEAM } from "@/data/site";
import { publicAsset } from "@/lib/publicAsset";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={publicAsset("images/logo.webp")}
        alt={`${TEAM.name} FTC ${TEAM.number} logo`}
        className="h-9 w-9 rounded-lg border border-white/10 object-contain bg-black/40"
        width={36}
        height={36}
        decoding="async"
      />
      <div className="leading-tight">
        <div className="font-display text-xl tracking-wide">{TEAM.name}</div>
        <div className="text-xs text-zinc-400">FTC Team {TEAM.number}</div>
      </div>
    </div>
  );
}
