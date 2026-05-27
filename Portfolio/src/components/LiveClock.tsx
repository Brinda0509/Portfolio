import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const time = now
    ? now.toLocaleTimeString("en-US", { hour12: false })
    : "--:--:--";
  const date = now
    ? now.toLocaleDateString("en-US", { weekday: "short", day: "2-digit", month: "short" }).toUpperCase()
    : "---";
  return (
    <div className="font-mono text-[11px] tracking-[0.2em] text-foreground/70">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-cyan animate-pulse" />
        <span>{time}</span>
      </div>
      <div className="mt-1 text-foreground/40">{date}</div>
    </div>
  );
}
