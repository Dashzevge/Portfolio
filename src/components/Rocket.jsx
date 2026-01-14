import { AnimatePresence, motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Rocket = ({ onClick, showSocial }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: [0, 90, 0, -90, 0],
        y: [-90, 0, 90, 0, -90],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <button
        type="button"
        onClick={onClick}
        className="group pointer-events-auto rounded-full border border-cyan-400/60 bg-neutral-950/80 p-3 text-cyan-200 shadow-lg shadow-cyan-400/20 transition hover:border-cyan-300 hover:text-cyan-100"
        aria-label="Open social links"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C9.5 4.2 8 7 8 10.5V17L12 15L16 17V10.5C16 7 14.5 4.2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 20L12 22L14 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>


      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-neutral-950/90 px-4 py-2 shadow-lg shadow-cyan-500/20"
          >
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Rocket;
