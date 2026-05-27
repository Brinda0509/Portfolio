import { useEffect, useRef } from "react";

export function KineticTitle({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const letters = el.querySelectorAll<HTMLSpanElement>("[data-letter]");
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      letters.forEach((l) => {
        const lr = l.getBoundingClientRect();
        const cx = lr.left + lr.width / 2;
        const cy = lr.top + lr.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const max = 160;
        if (dist < max) {
          const f = (1 - dist / max);
          const tx = (-dx / dist) * f * 18;
          const ty = (-dy / dist) * f * 18;
          const rot = (dx / max) * f * 8;
          l.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
          l.style.textShadow = `0 0 ${20 + f * 30}px oklch(0.75 0.13 68 / ${0.4 + f * 0.4})`;
        } else {
          l.style.transform = "";
          l.style.textShadow = "";
        }
      });
      void rect;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <h1
      ref={containerRef}
      className="font-display text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.9] tracking-tight"
    >
      {text.split("").map((ch, i) => (
        <span
          key={i}
          data-letter
          className="inline-block transition-[transform,text-shadow] duration-300 ease-out text-gradient-mix will-change-transform"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
        >
          {ch}
        </span>
      ))}
    </h1>
  );
}
