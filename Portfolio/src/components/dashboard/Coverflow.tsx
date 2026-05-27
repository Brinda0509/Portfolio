import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";

interface Slide {
  id: string;
  node: ReactNode;
}

export function Coverflow({
  slides,
  activeIndex,
  onChange,
}: {
  slides: Slide[];
  activeIndex: number;
  onChange: (i: number) => void;
}) {
  const n = slides.length;
  const rel = (i: number) => {
    let d = i - activeIndex;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div className="flex h-full flex-col" style={{ perspective: "1800px" }}>
      {/* Slide area — fills all available height */}
      <div className="relative min-h-0 flex-1">
        {slides.map((s, i) => {
          const d = rel(i);
          const abs = Math.abs(d);
          const active = d === 0;
          const visible = abs <= 2;
          if (!visible) return null;

          return (
            <motion.div
              key={s.id}
              onClick={() => !active && onChange(i)}
              data-magnetic={!active}
              initial={false}
              animate={{
                x: `${d * 14}%`,
                scale: active ? 1 : 0.78 - abs * 0.06,
                rotateY: d * -18,
                z: active ? 0 : -180 * abs,
                opacity: active ? 1 : 0.35 - abs * 0.08,
                filter: active ? "blur(0px)" : `blur(${2 + abs * 2}px)`,
                zIndex: 50 - abs,
              }}
              transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.9 }}
              style={{
                transformStyle: "preserve-3d",
                position: "absolute",
                inset: 0,
              }}
            >
              <div className="glass-strong relative h-full w-full overflow-hidden rounded-3xl">
                <div
                  className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow:
                      "0 0 0 1px oklch(0.75 0.13 68 / 0.25), 0 0 40px oklch(0.75 0.13 68 / 0.25), 0 0 80px oklch(0.42 0.08 45 / 0.20)",
                  }}
                />
                {/* Scrollable content area inside the card */}
                <div className="relative h-full w-full overflow-y-auto p-5 md:p-6 [scrollbar-width:thin] [scrollbar-color:oklch(1_0_0/0.15)_transparent]">
                  <AnimatePresence mode="wait">
                    {active && (
                      <motion.div
                        key={s.id + "-in"}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {s.node}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pager — fixed at bottom */}
      <div className="mt-3 flex shrink-0 items-center justify-center gap-2">
        <button
          onClick={() => onChange((activeIndex - 1 + n) % n)}
          data-magnetic
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-foreground/60 transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onChange(i)}
              data-magnetic
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-7 bg-primary shadow-glow-cyan" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => onChange((activeIndex + 1) % n)}
          data-magnetic
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-foreground/60 transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
