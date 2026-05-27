import { motion } from "motion/react";
import { Header } from "./AboutSection";

type Skill = { name: string; v: number; level?: string };

const categories: { title: string; code: string; skills: Skill[] }[] = [
  {
    title: "Programming & AI Core",
    code: "PROG.AI",
    skills: [
      { name: "Python", v: 88 },
      { name: "C", v: 70 },
      { name: "MATLAB", v: 80 },
      { name: "Machine Learning", v: 82 },
      { name: "Deep Learning", v: 50, level: "Beginner" },
    ],
  },
  {
    title: "Data Analytics Engine",
    code: "DATA.ENG",
    skills: [
      { name: "Microsoft Excel", v: 85 },
      { name: "Power BI", v: 78 },
      { name: "Tableau", v: 74 },
      { name: "SQL", v: 60, level: "Basic" },
    ],
  },
  {
    title: "Embedded & IoT Systems",
    code: "EMB.IOT",
    skills: [
      { name: "Arduino", v: 86 },
      { name: "ESP32", v: 80 },
      { name: "Keil IDE", v: 70 },
      { name: "Proteus", v: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    code: "TOOLS.OS",
    skills: [
      { name: "VS Code", v: 92 },
      { name: "LabVIEW", v: 70 },
      { name: "Google Colab", v: 88 },
      { name: "Jupyter Notebook", v: 90 },
      { name: "Generative AI Tools", v: 84 },
    ],
  },
];

function Ring({ skill }: { skill: Skill }) {
  const r = 20;
  const c = 2 * Math.PI * r;
  return (
    <div className="group relative flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.04]">
      <div className="relative h-10 w-10 shrink-0">
        <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
          <circle cx="24" cy="24" r={r} className="fill-none stroke-white/10" strokeWidth="3" />
          <motion.circle
            cx="24" cy="24" r={r}
            stroke="url(#ring-grad)"
            className="fill-none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * skill.v) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ filter: "drop-shadow(0 0 6px oklch(0.75 0.13 68 / 0.65))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-foreground/85">
          {skill.v}
        </div>
      </div>
      <div className="min-w-0">
        <div className="truncate text-xs text-foreground/90">{skill.name}</div>
        {skill.level && (
          <div className="font-mono text-[8px] uppercase tracking-widest text-primary/70">
            {skill.level}
          </div>
        )}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="ring-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#C9963A" />
            <stop offset="100%" stopColor="#6B3A1F" />
          </linearGradient>
        </defs>
      </svg>

      <Header eyebrow="02 / Skills" title="Skill matrix · live readout." />

      <div className="grid gap-3 md:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="glass relative overflow-hidden rounded-2xl p-4"
          >
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-[#C9963A] via-[#A07830] to-[#6B3A1F]" />
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold">{cat.title}</h3>
              <span className="font-mono text-[9px] tracking-widest text-foreground/40">
                {cat.code}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {cat.skills.map((s) => (
                <Ring key={s.name} skill={s} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
