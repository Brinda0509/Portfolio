import { motion } from "motion/react";

export function BioPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong relative overflow-hidden rounded-3xl p-6"
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-secondary/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative flex items-center gap-4">
        <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-secondary to-primary p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-background font-display text-lg font-semibold text-gradient-mix">
            BB
          </div>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold tracking-tight">Brinda Balaji</h2>
          <p className="text-[12px] text-foreground/55">Biomedical · AI · Systems</p>
        </div>
      </div>

      <p className="relative mt-5 text-[13.5px] leading-relaxed text-foreground/70">
        Biomedical Engineering student passionate about intersecting{" "}
        <span className="text-foreground/90">AI</span>, Data Analytics, and intelligent, innovative
        healthcare technologies.
      </p>

      <div className="relative mt-6 space-y-3">
        {[
          ["Focus", "Intelligent Healthcare"],
          ["Stack", "Python · ML · IoT"],
          ["Status", "Open to collaborate"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between text-[12px]">
            <span className="text-foreground/40">{k}</span>
            <span className="text-foreground/85">{v}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-2 text-[11px] text-foreground/50">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-cyan animate-pulse" />
        Available for 2026 internships
      </div>
    </motion.aside>
  );
}
