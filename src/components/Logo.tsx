export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* uses the static file in /public/images */}
      <img
        src="/images/logo.webp"
        alt="Iron Lions FTC 24089 logo"
        className="h-9 w-9 rounded-lg border border-white/10 object-contain bg-black/40"
        width={36}
        height={36}
      />
      <div className="leading-tight">
        <div className="font-display text-xl tracking-wide">Iron Lions</div>
        <div className="text-xs text-zinc-400">FTC Team 24089</div>
      </div>
    </div>
  );
}
