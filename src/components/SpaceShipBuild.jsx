import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

export default function SpaceShipBuildOnScroll() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // triggers early

  useEffect(() => {
    if (isInView) {
      controls.start("build");
    }
  }, [isInView, controls]);

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      initial="hidden"
      animate={controls}
    >
      {/* Background */}
      <rect width="500" height="400" fill="#030517" rx="20" />

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Code Beams from PC to spaceship */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M230 260 C 250 ${200 - i * 20}, 300 ${
            150 - i * 20
          }, 350 ${80 - i * 10}`}
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="200"
          strokeDashoffset="200"
          variants={{
            hidden: { strokeDashoffset: 200 },
            build: {
              strokeDashoffset: 0,
              transition: { duration: 1 + i * 0.5 },
            },
          }}
          filter="url(#glow)"
        />
      ))}

      {/* Dash coding at PC */}
      <circle cx="230" cy="150" r="40" fill="#f1c27d" /> {/* Head */}
      <path
        d="M185 140 Q230 110 275 140 V150 Q230 130 185 150 Z"
        fill="#111827"
      /> {/* Hair */}
      <path d="M165 205 Q230 175 295 205 V300 Q230 330 165 300 Z" fill="#0f172a" /> {/* Body */}
      <rect x="165" y="255" width="130" height="65" rx="10" fill="#9ca3af" /> {/* MacBook */}
      <rect x="175" y="265" width="110" height="45" rx="6" fill="#020617" /> {/* Screen */}

      {/* Spaceship parts (assemble sequentially) */}
      {[
        { x: 340, y: 50 },
        { x: 360, y: 70 },
        { x: 380, y: 60 },
        { x: 360, y: 40 },
      ].map((part, i) => (
        <motion.polygon
          key={i}
          points={`${part.x},${part.y} ${part.x + 10},${part.y + 20} ${
            part.x - 10
          },${part.y + 20}`}
          fill="#facc15"
          variants={{
            hidden: { opacity: 0, y: -20 },
            build: { opacity: 1, y: 0, transition: { delay: 1 + i * 0.5, duration: 0.8 } },
          }}
          initial="hidden"
          animate={controls}
        />
      ))}

      {/* Background stars */}
      {[50, 120, 200, 300, 380].map((x, i) => (
        <circle key={i} cx={x} cy={50 + i * 20} r="1.5" fill="#fff" />
      ))}
    </motion.svg>
  );
}
