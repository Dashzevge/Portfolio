import { motion } from "motion/react";

export default function CodingToSatellite({ resumeHovered }) {
  return (
    <motion.svg
      width="460"
      height="460"
      viewBox="0 0 460 460"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.05,
        filter: "drop-shadow(0 0 18px #22d3ee)",
      }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <defs>
        <linearGradient id="space" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#03045e" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="460" height="460" rx="36" fill="url(#space)" />

      {/* Stars */}
      <motion.g
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
        fill="#e5e7eb"
      >
        <circle cx="60" cy="60" r="1" />
        <circle cx="200" cy="40" r="1.5" />
        <circle cx="380" cy="80" r="1" />
        <circle cx="330" cy="50" r="1" />
        <circle cx="90" cy="140" r="1" />
        <circle cx="90" cy="160" r="1" />
      </motion.g>

   
          {/* Half Moon */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <circle cx="80" cy="80" r="30" fill="#fef3c7" filter="url(#glow)" />
        <circle cx="95" cy="80" r="30" fill="url(#space)" />
      </motion.g>


      {/* Satellites */}
      {[{ x: 330, y: 80 }, { x: 370, y: 130 }, { x: 300, y: 110 }].map(
        (sat, i) => (
          <motion.g
            key={i}
            transform={`translate(${sat.x} ${sat.y})`}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 + i }}
          >
            <rect x="0" y="10" width="28" height="14" rx="3" fill="#9ca3af" />
            <rect x="-18" y="6" width="18" height="22" fill="#2563eb" />
            <rect x="28" y="6" width="18" height="22" fill="#2563eb" />
            <circle cx="14" cy="17" r="4" fill="#22d3ee" />
          </motion.g>
        )
      )}

      {/* Head */}
      <circle cx="230" cy="155" r="40" fill="#f1c27d" />

      {/* Short hair */}
      <path
        d="M185 145 Q230 115 275 145 V155 Q230 135 185 155 Z"
        fill="#111827"
      />
      <rect x="185" y="150" width="10" height="20" rx="5" fill="#1f2937" />
      <rect x="265" y="150" width="10" height="20" rx="5" fill="#1f2937" />

      {/* Eyes */}
      <circle cx="216" cy="158" r="3" fill="#020617" />
      <circle cx="244" cy="158" r="3" fill="#020617" />

      {/* Jaw */}
      <path
        d="M205 175c10 12 40 12 50 0"
        stroke="#020617"
        strokeWidth="2"
        fill="none"
      />

      {/* Jacked body */}
      <path
        d="M165 205 Q230 175 295 205 V300 Q230 330 165 300 Z"
        fill="#0f172a"
      />

      {/* MacBook */}
      <rect x="165" y="255" width="130" height="65" rx="10" fill="#9ca3af" />
      <rect x="175" y="265" width="110" height="45" rx="6" fill="#020617" />
      <circle cx="230" cy="288" r="6" fill="#e5e7eb" />

      {/* Code beams */}
      {[355, 330, 380].map((y, i) => (
        <motion.path
          key={i}
          d={`M295 275 C340 250, 360 ${220 - i * 20}, ${y} ${
            150 - i * 15
          }`}
          stroke="#22d3ee"
          strokeWidth="3"
          strokeDasharray="6 4"
          fill="none"
          filter="url(#glow)"
          animate={{
            strokeDashoffset: resumeHovered ? [-40, 0] : [0, -20],
            opacity: resumeHovered ? 1 : 0.7,
          }}
          transition={{
            repeat: Infinity,
            duration: resumeHovered ? 0.6 : 1.4,
            ease: "linear",
          }}
        />
      ))}

      {/* Footer */}
      <text
        x="230"
        y="415"
        textAnchor="middle"
        fill="#e5e7eb"
        fontSize="16"
        fontFamily="Arial, sans-serif"
      >
        Dash Bumchin · Satellite Uplink
      </text>
    </motion.svg>
  );
}
