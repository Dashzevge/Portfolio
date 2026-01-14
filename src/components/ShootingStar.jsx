import { motion } from "motion/react";

export default function ShootingStar() {
  const startX = -50; // start offscreen left
  const startY = Math.random() * 40; // random Y in navbar
  const duration = 1 + Math.random() * 1.5; // random speed

  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-50 rounded-full shadow-lg"
      style={{ top: startY, left: startX, filter: 'blur(1px)' }}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, 500],
        y: [startY, startY + 20], // diagonal
        opacity: [0, 1, 0.7, 0], // fade in/out
        scale: [0.3, 1, 0.3], // sparkle effect
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
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
