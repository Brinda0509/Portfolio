import { motion } from "motion/react";

const EMAIL    = "Kavbb05@gmail.com";
const GITHUB   = "https://github.com/Brinda0509";
const LINKEDIN = "https://www.linkedin.com/in/brinda-balaji/";
const WHATSAPP = "https://wa.me/918939165998";
const PHONE    = "+91 89391 65998";

const socials = [
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: GITHUB,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: LINKEDIN,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg rounded-2xl border border-white/8 bg-card px-10 py-12 text-center"
      >
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Let&apos;s <span className="text-primary">Connect</span>
        </h2>

        <p className="mt-5 text-[13px] leading-relaxed text-foreground/50">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-foreground/40 transition-colors hover:text-primary"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Say Hello → opens WhatsApp */}
        <div className="mt-8">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-foreground/20 bg-foreground/5 px-8 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
          >
            Say Hello
          </a>
        </div>

        {/* Phone number — Autography font, italic, smaller, muted grey */}
        <div className="mt-3">
          <span
            style={{
              fontFamily: "'Autography', cursive",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "oklch(0.93 0.01 70 / 0.45)",
              display: "inline-block",
            }}
          >
            {PHONE}
          </span>
        </div>

        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/20">
          India · 2027 Graduate
        </p>
      </motion.div>
    </div>
  );
}
