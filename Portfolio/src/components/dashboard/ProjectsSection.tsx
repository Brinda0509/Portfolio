import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, type MouseEvent } from "react";
import { Header } from "./AboutSection";

const projects = [
  {
    title: "ESP8266-Based Smart Medicine Box",
    tag: "Embedded · IoT · Healthcare",
    desc: "IoT smart medicine box reminding patients via alarms, LED indicators, and automated alerts.",
    stack: ["Arduino IDE", "ESP8266", "Sensors", "Buzzer", "LEDs"],
    github: "",
  },
  {
    title: "Smart PCOS Detection — Deep Learning",
    tag: "Deep Learning · Diagnostics",
    desc: "Deep learning system detecting PCOS from medical data with automated preprocessing and evaluation.",
    stack: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Colab"],
    github: "",
  },
  {
    title: "Drowsy Driver Detection (Prototype)",
    tag: "Embedded · Safety",
    desc: "Prototype monitoring driver eye movements to detect drowsiness and trigger accident-prevention alerts.",
    stack: ["Keil IDE", "Proteus"],
    github: "",
  },
  {
    title: "Smart Osteoarthritis Screening Tool",
    tag: "Wearable · IMU · Health",
    desc: "Wearable gait analysis using IMU sensors and ESP32 for early osteoarthritis risk prediction.",
    stack: ["Arduino IDE", "ESP32", "MPU6050", "Bluetooth"],
    github: "",
  },
  {
    title: "Indian Sentimental Stock Analysis",
    tag: "NLP · Quant · Sentiment",
    desc: "NLP dashboard analysing Indian stock market sentiment from vernacular news to predict Nifty 50 volatility.",
    stack: ["Python", "Random Forest", "NLP", "Scikit-learn"],
    github: "https://github.com/Brinda0509/Indian-Stock-Market-Sentiment-Dashboard",
  },
];

function TiltCard({ p, index }: { p: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    /* h-full ensures every card stretches to fill the grid row height */
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="group relative h-full rounded-xl border border-white/8 bg-card p-3 transition-colors duration-200 hover:border-primary/25 will-change-transform"
    >
      {/* Tag row */}
      <div className="flex items-center justify-between gap-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-primary/70 truncate">
          {p.tag}
        </span>
        <span className="font-mono text-[9px] text-foreground/25 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-2 font-display text-[13px] font-semibold leading-snug text-foreground/90">
        {p.title}
      </h3>

      {/* Description — clamped to 2 lines */}
      <p className="mt-1.5 text-[11px] leading-relaxed text-foreground/50">{p.desc}</p>

      {/* Stack tags */}
      <div className="mt-3 flex flex-wrap gap-1">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-white/8 px-1.5 py-px font-mono text-[9px] tracking-wide text-foreground/40"
          >
            {s}
          </span>
        ))}
      </div>

      {/* GitHub link — only shown when repo is set */}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-primary/70 transition-colors hover:text-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          VIEW ON GITHUB ↗
        </a>
      )}
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const filters = ["All", "AI", "Embedded", "Healthcare"];

  const matches = (p: typeof projects[number]) => {
    if (filter === "All") return true;
    if (filter === "AI") return /Deep|Python|NLP|Sentiment|PCOS|Stock/i.test(p.title + p.tag);
    if (filter === "Embedded") return /ESP|Arduino|Embedded|Keil|Drowsy|Medicine|Osteo/i.test(p.title + p.tag);
    if (filter === "Healthcare") return /PCOS|Medicine|Osteo|Health|Driver/i.test(p.title + p.tag);
    return true;
  };
  const list = projects.filter(matches);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <Header eyebrow="04 / Projects" title="Built · shipped · iterating." />
        <div className="flex gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded border px-2.5 py-0.5 font-mono text-[9px] tracking-widest transition-colors ${
                f === filter
                  ? "border-primary/40 bg-primary/8 text-primary"
                  : "border-white/8 text-foreground/35 hover:text-foreground/70"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* auto-rows-fr makes every row the same height → all cards close properly */}
      <div className="grid auto-rows-fr gap-2.5 md:grid-cols-3">
        {list.map((p, i) => (
          <TiltCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </div>
  );
}
