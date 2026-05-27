import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleField } from "@/components/ParticleField";
import { AmbientBg } from "@/components/AmbientBg";
import { LiveClock } from "@/components/LiveClock";
import { KineticTitle } from "@/components/KineticTitle";
import { SidebarBio } from "@/components/dashboard/SidebarBio";
import { Coverflow } from "@/components/dashboard/Coverflow";
import { AboutSection } from "@/components/dashboard/AboutSection";
import { SkillsSection } from "@/components/dashboard/SkillsSection";
import { ExperienceSection } from "@/components/dashboard/ExperienceSection";
import { ProjectsSection } from "@/components/dashboard/ProjectsSection";
import { ContactSection } from "@/components/dashboard/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brinda Balaji — Intelligent Systems · AI · Biomedical" },
      {
        name: "description",
        content:
          "Portfolio of Brinda Balaji — Biomedical Engineering student building AI, data analytics, and embedded systems for intelligent healthcare.",
      },
      { property: "og:title", content: "Brinda Balaji — Intelligent Systems" },
      { property: "og:description", content: "AI · Biomedical · Embedded Systems portfolio." },
    ],
  }),
  component: Page,
});

type Tab = "about" | "skills" | "experience" | "projects" | "contact";
const TABS: { id: Tab; label: string; idx: string }[] = [
  { id: "about", label: "About", idx: "01" },
  { id: "skills", label: "Skills", idx: "02" },
  { id: "experience", label: "Experience", idx: "03" },
  { id: "projects", label: "Projects", idx: "04" },
  { id: "contact", label: "Contact", idx: "05" },
];

function Page() {
  const [entered, setEntered] = useState(false);
  const [tab, setTab] = useState<Tab>("about");

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CustomCursor />
      <AmbientBg />

      <AnimatePresence mode="wait">
        {!entered ? (
          <Landing key="landing" onEnter={() => setEntered(true)} />
        ) : (
          <Dashboard key="dashboard" tab={tab} setTab={setTab} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      className="relative flex min-h-screen flex-col"
    >
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      <header className="relative z-10 flex items-start p-6 md:p-8">
        <LiveClock />
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary/80"
        >
          ◇ Intelligent Systems Engineer
        </motion.div>

        <div className="mt-6 max-w-6xl">
          <KineticTitle text="Brinda Balaji" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base text-foreground/60 md:text-lg"
        >
          Building intelligent systems at the intersection of{" "}
          <span className="text-primary">AI</span> ·{" "}
          <span className="text-secondary">Biomedical engineering</span> ·{" "}
          <span className="text-primary">Embedded healthcare</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          onClick={onEnter}
          data-magnetic
          className="group relative mt-12 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm tracking-[0.2em] text-foreground/90 backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-glow-cyan"
        >
          <span className="font-mono">EXPLORE</span>
          <span className="relative h-px w-8 overflow-hidden bg-white/20">
            <span className="absolute inset-0 bg-primary transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.button>
      </main>

      <footer className="relative z-10 p-6 md:p-8" />
    </motion.div>
  );
}

function Dashboard({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const activeIndex = TABS.findIndex((t) => t.id === tab);
  const slides = TABS.map((t) => ({
    id: t.id,
    node:
      t.id === "about" ? <AboutSection /> :
      t.id === "skills" ? <SkillsSection /> :
      t.id === "experience" ? <ExperienceSection /> :
      t.id === "projects" ? <ProjectsSection /> :
      <ContactSection />,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)", scale: 0.96 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-screen flex-col overflow-hidden px-5 pt-4 md:px-10"
    >
      {/* top bar */}
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <LiveClock />
        <div className="font-display text-sm italic tracking-wide text-foreground/50">
          Brinda's Portfolio
        </div>
      </div>

      <div className="mx-auto grid min-h-0 flex-1 w-full max-w-[1500px] gap-5 pb-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* LEFT — sticky bio sidebar */}
        <aside className="hidden lg:flex lg:flex-col">
          <SidebarBio />
        </aside>

        {/* RIGHT — tabs + coverflow */}
        <section className="flex min-h-0 min-w-0 flex-col">
          {/* Floating tab bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mb-4 flex shrink-0 flex-wrap items-center gap-1 rounded-full p-1.5"
          >
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  data-magnetic
                  className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors ${
                    active ? "text-foreground" : "text-foreground/55 hover:text-foreground/90"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 ring-1 ring-white/15"
                      style={{ boxShadow: "0 0 24px oklch(0.75 0.13 68 / 0.35), 0 0 48px oklch(0.42 0.08 45 / 0.25)" }}
                    />
                  )}
                  <span className="relative font-mono text-[10px] tracking-widest text-foreground/40">
                    {t.idx}
                  </span>
                  <span className="relative font-medium tracking-tight">{t.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* 3D coverflow carousel — fills remaining height */}
          <div className="min-h-0 flex-1">
            <Coverflow
              slides={slides}
              activeIndex={activeIndex}
              onChange={(i) => setTab(TABS[i].id)}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
