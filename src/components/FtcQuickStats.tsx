import React from "react";

type Props = {
  teamNumber?: number; // kept for compatibility, not used
  season?: number;     // kept for compatibility, not used
};

export default function FtcQuickStats(_props: Props) {
  // === Snapshot numbers ===
  const STATS = {
    totalNp: { value: 83.65, rank: 80, percentile: 98.03 },
    auto: { value: 26.76, rank: 126, percentile: 96.88 },
    teleop: { value: 56.90, rank: 95, percentile: 97.66 },
    endgame: { value: 8.56, rank: 517, percentile: 87.13 },
    highScore: { value: 211, subtext: "M7 Brisbane South" },
  };
  // ========================

  const tiles: { label: string; k: keyof typeof STATS }[] = [
    { label: "Total NP", k: "totalNp" },
    { label: "Auto", k: "auto" },
    { label: "TeleOp", k: "teleop" },
    { label: "Endgame", k: "endgame" },
    { label: "High Score", k: "highScore" },
  ];

  return (
    <div className="card p-6 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-400">Live Performance</div>
          <h3 className="font-display text-2xl">24089 FTC Scouts</h3>
        </div>
        <a
          href="https://ftcscout.org/teams/24089"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-block rounded-lg border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5"
        >
          Open on FTC Scout
        </a>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-5">
        {tiles.map(({ label, k }) => {
          const s = STATS[k] as any; // Cast to any to handle mixed types easily or just rely on union
          const val =
            s.value === undefined || Number.isNaN(s.value) ? "—" : s.value.toFixed(2);

          let rankLine = null;
          if (s.subtext) {
            rankLine = s.subtext;
          } else if (s.rank !== undefined || s.percentile !== undefined) {
            rankLine = `Rank ${s.rank ?? "—"}${s.percentile !== undefined ? ` / ${s.percentile}%` : ""}`;
          }

          return (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-widest text-zinc-400">{label}</div>
              <div className="mt-1 font-display text-2xl">{val}</div>
              {rankLine && <div className="mt-1 text-xs text-zinc-400">{rankLine}</div>}
            </div>
          );
        })}
      </div>

    </div>
  );
}
