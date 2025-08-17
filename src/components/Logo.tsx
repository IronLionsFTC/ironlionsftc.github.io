export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-9 w-9 rounded-xl bg-blue-600/20 border border-blue-600/40 grid place-items-center">
        <span className="text-blue-400 font-extrabold">IL</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl tracking-wide">Iron Lions</div>
        <div className="text-xs text-zinc-400">FTC Team 24089</div>
      </div>
    </div>
  );
}
