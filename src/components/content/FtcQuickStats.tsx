type StatSnapshot = {
  value: number;
  rank?: number;
  percentile?: number;
  subtext?: string;
};

const STATS = {
  totalNp: { value: 83.65, rank: 80, percentile: 98.03 },
  auto: { value: 26.76, rank: 126, percentile: 96.88 },
  teleop: { value: 56.9, rank: 95, percentile: 97.66 },
  endgame: { value: 8.56, rank: 517, percentile: 87.13 },
  highScore: { value: 211, subtext: "M7 Brisbane South" },
} satisfies Record<string, StatSnapshot>;

const TILES: { label: string; key: keyof typeof STATS }[] = [
  { label: "Total NP", key: "totalNp" },
  { label: "Auto", key: "auto" },
  { label: "TeleOp", key: "teleop" },
  { label: "Endgame", key: "endgame" },
  { label: "High Score", key: "highScore" },
];

export default function FtcQuickStats() {
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
        {TILES.map(({ label, key }) => {
          const stat: StatSnapshot = STATS[key];
          const value = Number.isNaN(stat.value) ? "—" : stat.value.toFixed(2);
          const rankLine =
            stat.subtext ??
            (stat.rank !== undefined
              ? `Rank ${stat.rank}${stat.percentile !== undefined ? ` / ${stat.percentile}%` : ""}`
              : null);

          return (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-widest text-zinc-400">{label}</div>
              <div className="mt-1 font-display text-2xl">{value}</div>
              {rankLine && <div className="mt-1 text-xs text-zinc-400">{rankLine}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
