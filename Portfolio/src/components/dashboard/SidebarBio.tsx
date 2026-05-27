import { motion } from "motion/react";

export function SidebarBio() {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col border border-white/8 rounded-xl p-5 bg-card"
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center font-mono text-xs font-semibold text-primary">
          BB
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">Brinda Balaji</h2>
          <p className="text-[10px] text-foreground/45 mt-0.5">Biomedical · AI · Systems</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-4 h-px bg-white/6" />

      {/* Bio */}
      <p className="mt-4 text-[11.5px] leading-relaxed text-foreground/60">
        Final-year Biomedical Engineering student at{" "}
        <span className="text-foreground/85">PSG College of Technology</span>. Focused on
        Python, machine learning, and data analytics for{" "}
        <span className="text-primary">AI-driven healthcare</span>.
      </p>

      {/* Meta rows */}
      <div className="mt-5 space-y-2.5">
        {[
          ["Institute", "PSG Tech"],
          ["Focus", "AI · Healthcare"],
          ["Stack", "Python · ML · IoT"],
          ["Status", "Open to Internships · 2027 Graduate"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-start justify-between gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 shrink-0 pt-0.5">
              {k}
            </span>
            <span className="text-[11px] text-foreground/75 text-right">{v}</span>
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-[10px] text-foreground/45">Available for collaboration</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Divider */}
      <div className="mb-4 h-px bg-white/6" />

      {/* Resume download button */}
      <a
        href="/resume.pdf"
        download="Brinda_Balaji_Resume.pdf"
        className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] font-mono tracking-widest text-foreground/55 transition-colors hover:border-primary/40 hover:text-primary"
      >
        {/* Download icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        RESUME
      </a>
    </motion.aside>
  );
}
