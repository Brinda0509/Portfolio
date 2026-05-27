export function AmbientBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" style={{ animation: "grid-drift 30s linear infinite" }} />
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.42_0.08_45)]/30 blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-[oklch(0.75_0.13_68)]/20 blur-[160px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.18_0.04_40)]/40 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.10_0.025_35)_90%)]" />
    </div>
  );
}
