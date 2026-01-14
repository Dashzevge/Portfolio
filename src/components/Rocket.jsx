import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import RocketSvg from "../assets/rocket.svg?react";

export default function RocketLaunchOnScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, -520]), {
    stiffness: 140,
    damping: 22,
  });

  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, -12]),
    { stiffness: 140, damping: 22 }
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 1.05]),
    { stiffness: 140, damping: 22 }
  );

  return (
    <div ref={ref} style={{ minHeight: "200vh" }}>
      <motion.div
        style={{
          position: "fixed",
          right: 40,
          bottom: 40,
          width: 240,
          y,
          rotate,
          scale,
          transformOrigin: "50% 80%",
          pointerEvents: "none",
          zIndex: 50,
        }}
      >
        <RocketSvg />
      </motion.div>

      <div style={{ padding: 40 }}>
        <h1>Scroll to launch 🚀</h1>
        <p>First scroll triggers ignition.</p>
      </div>
    </div>
  );
}
