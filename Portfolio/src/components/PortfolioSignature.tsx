import { motion } from "motion/react";

/**
 * SVG write-on animation for "Brinda's Portfolio"
 * Cursive/script style paths drawn letter by letter on mount.
 */
export function PortfolioSignature({ className = "" }: { className?: string }) {
  // Each segment is a separate stroke so they animate sequentially
  const strokes = [
    // B
    "M 8 52 L 8 18 C 22 18 30 22 30 30 C 30 38 22 42 8 42 C 24 42 34 46 34 56 C 34 66 24 70 8 70 L 8 52",
    // r
    "M 42 70 L 42 44 C 48 38 58 38 62 44",
    // i
    "M 70 44 L 70 70 M 70 34 L 70 36",
    // n
    "M 78 70 L 78 44 C 84 38 96 38 100 46 L 100 70",
    // d
    "M 120 18 L 120 70 C 108 76 96 68 96 56 C 96 44 108 38 120 46",
    // a
    "M 140 56 C 140 44 152 38 160 44 C 168 50 164 70 140 70 M 164 44 L 164 70",
    // apostrophe + s
    "M 174 36 C 174 32 178 30 178 34 M 182 44 C 196 38 202 50 190 56 C 178 62 186 72 200 68",
    // space gap — skip
    // P
    "M 216 70 L 216 18 C 232 18 240 24 240 34 C 240 44 232 50 216 50",
    // o
    "M 260 56 C 260 44 248 38 244 46 C 240 54 244 70 256 70 C 268 70 272 58 268 50 C 264 42 252 40 248 48",
    // r
    "M 278 70 L 278 44 C 284 38 294 38 298 44",
    // t
    "M 308 32 L 308 70 M 300 46 L 316 46",
    // f
    "M 330 70 L 330 40 C 330 30 338 26 344 30 M 322 52 L 338 52",
    // o
    "M 364 56 C 364 44 352 38 348 46 C 344 54 348 70 360 70 C 372 70 376 58 372 50 C 368 42 356 40 352 48",
    // l
    "M 382 18 L 382 70",
    // i
    "M 390 44 L 390 70 M 390 34 L 390 36",
    // o
    "M 410 56 C 410 44 398 38 394 46 C 390 54 394 70 406 70 C 418 70 422 58 418 50 C 414 42 402 40 398 48",
  ];

  return (
    <svg
      viewBox="0 0 430 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Brinda's Portfolio"
    >
      <defs>
        <linearGradient id="ps-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#C9963A" />
          <stop offset="100%" stopColor="#a07830" />
        </linearGradient>
      </defs>
      {strokes.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#ps-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.35, ease: "easeInOut", delay: i * 0.12 },
            opacity: { duration: 0.1, delay: i * 0.12 },
          }}
        />
      ))}
    </svg>
  );
}
