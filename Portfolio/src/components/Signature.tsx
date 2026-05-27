import { motion } from "motion/react";

export function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 110"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Brinda signature"
    >
      <defs>
        <linearGradient id="sig-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#C9963A" />
          <stop offset="100%" stopColor="#6B3A1F" />
        </linearGradient>
        <filter id="sig-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Handwritten-style "Brinda" path */}
      <motion.path
        d="M18 78 C 22 30, 40 22, 56 30 C 70 38, 56 58, 36 56 C 60 52, 78 60, 74 76 C 70 90, 46 92, 34 80
           M 92 50 C 92 62, 92 78, 92 82 M 92 50 C 100 42, 116 38, 124 48
           M 142 50 L 142 84 M 142 36 L 142 40
           M 162 84 L 162 52 C 172 42, 190 44, 196 56 L 196 84
           M 238 22 L 238 84 C 222 90, 206 80, 208 64 C 210 50, 226 44, 238 52
           M 268 60 C 280 46, 300 50, 302 66 C 304 80, 286 88, 274 80 C 280 88, 292 92, 304 86"
        stroke="url(#sig-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#sig-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 2.8, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.4 } }}
      />
    </svg>
  );
}
