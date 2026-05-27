import { motion } from "motion/react";
import { Header } from "./AboutSection";

const experiences = [
  {
    org: "Aivar Innovations, Coimbatore",
    role: "Data Analyst Intern",
    period: "May 2026 — Ongoing",
    bullets: [
      "Solving real-world problem statements using data analytics and machine learning approaches.",
      "Applying analytical, problem-solving, and predictive modeling skills to derive insights and support decision-making processes.",
    ],
    tags: ["Data Analytics", "ML", "Predictive Modeling"],
  },
  {
    org: "Bharathiraja Hospital, Chennai",
    role: "Intern",
    period: "April 2024 · 20 Days",
    bullets: [
      "Assisted in monitoring and maintaining biomedical equipment across hospital departments.",
      "Gained hands-on experience in clinical workflows, equipment safety, and biomedical maintenance procedures.",
    ],
    tags: ["Biomedical", "Clinical Ops", "Equipment Safety"],
  },
];

export function ExperienceSection() {
  return (
    <div className="space-y-5">
      <Header eyebrow="03 / Experience" title="Field log." />

      <div className="relative pl-6">
        {/* Thin vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8" />

        <div className="space-y-4">
          {experiences.map((e, i) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative"
            >
              {/* Small dot on the timeline */}
              <span className="absolute -left-[22px] top-4 h-2 w-2 rounded-full bg-primary/50" />

              {/* Flat muted card — no warm gradient border */}
              <div className="rounded-lg border border-white/8 bg-card p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-sm font-semibold text-foreground">{e.role}</h3>
                  <span className="font-mono text-[10px] text-foreground/30">{e.period}</span>
                </div>
                <div className="mt-0.5 text-[11px] text-primary/60">{e.org}</div>

                <ul className="mt-3 space-y-1.5">
                  {e.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2 text-[12px] leading-relaxed text-foreground/50">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/20" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/8 px-2 py-0.5 font-mono text-[9px] tracking-wide text-foreground/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
