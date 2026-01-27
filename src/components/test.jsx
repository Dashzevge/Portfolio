import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SkillsScrollFill() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="mx-auto max-w-5xl px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold">Skills</h2>

      <div className="mt-8 space-y-6">
        {["React", "Angular", "Spring Boot", "SQL"].map((s) => (
          <div key={s}>
            <div className="mb-2 text-neutral-300">{s}</div>
            <div className="h-2 w-full rounded-full bg-neutral-800">
              <motion.div className="h-2 rounded-full bg-white/80" style={{ width: w }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsScrollFill;