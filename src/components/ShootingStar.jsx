import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

export default function ShootingStar() {
  const startX = -60; // start offscreen left
  const startY = useMemo(() => Math.random() * 40, []);
  const duration = useMemo(() => 1 + Math.random() * 1.5, []);
  const delay = useMemo(() => Math.random() * 4, []);
  const targetY = useMemo(() => 18 + Math.random() * 20, []);
  const [targetX, setTargetX] = useState(520);

  useEffect(() => {
    const updateTarget = () => {
      const width = window.innerWidth;
      setTargetX(Math.max(width - 180, 260));
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);
    return () => window.removeEventListener("resize", updateTarget);
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-50 rounded-full shadow-lg"
      style={{ top: startY, left: startX, filter: 'blur(1px)' }}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, targetX],
        y: [startY, targetY], // diagonal toward resume
        opacity: [0, 1, 0.7, 0], // fade in/out
        scale: [0.3, 1, 0.3], // sparkle effect
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: delay,
        ease: "easeInOut",
      }}
    >
      {/* Trail */}
      <motion.div
        className="absolute w-20 h-0.5 bg-white rounded-full"
        style={{ top: '50%', left: 0, opacity: 0.5, filter: 'blur(2px)' }}
        animate={{ x: [0, 20] }}
        transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}
