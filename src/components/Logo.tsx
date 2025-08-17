export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-9 w-9 rounded-xl bg-amber-500/20 border border-amber-500/40 grid place-items-center">
        <span className="text-amber-400 font-extrabold">IL</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl tracking-wide">Iron Lions</div>
        <div className="text-xs text-zinc-400">FTC Team 24089</div>
      </div>
    </div>
  );
}
