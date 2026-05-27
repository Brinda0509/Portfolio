import { motion } from "motion/react";

export function AboutSection() {
  const facts = [
    { k: "Discipline", v: "Biomedical Engineering" },
    { k: "Interest", v: "AI for Healthcare" },
    { k: "Method", v: "Signal → Insight → Action" },
    { k: "Tooling", v: "Python · C · MATLAB · IoT" },
  ];
  return (
    <div className="space-y-4">
      <Header eyebrow="01 / About" title="Engineering intelligence into care." />

      <div className="grid gap-3 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass md:col-span-3 rounded-2xl p-4 leading-relaxed text-foreground/80"
        >
          <p className="text-[13px]">
            I'm a Biomedical Engineering student fascinated by the moment hardware, software and
            biology converge. I design intelligent systems — from{" "}
            <span className="text-primary">deep learning diagnostics</span> to{" "}
            <span className="text-primary">embedded health devices</span> — that turn raw
            physiological signals into clinical decisions.
          </p>
          <p className="mt-3 text-[12px] text-foreground/60">
            My toolkit spans Python, machine learning, MATLAB, and the full IoT stack. I believe the
            next generation of healthcare will be quietly invisible — autonomous, predictive, and
            wearable.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-2 md:grid-cols-1">
          {facts.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="glass rounded-xl p-3"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40">
                {f.k}
              </div>
              <div className="mt-0.5 text-xs text-foreground/90">{f.v}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {[
          { n: "05", l: "Projects shipped" },
          { n: "02", l: "Industry internships" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="glass relative overflow-hidden rounded-2xl p-4"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="font-display text-3xl font-bold text-gradient-mix">{s.n}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-widest text-foreground/50">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/80">{eyebrow}</div>
      <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">{title}</h2>
    </div>
  );
}
