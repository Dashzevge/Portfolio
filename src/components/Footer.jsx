import { SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiFramer } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 z-30 m-2">
      <div className="inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-200 backdrop-blur">
        <span className="hidden sm:inline">Built with</span>
        <div className="flex items-center gap-2 text-lg">
          <SiReact className="text-cyan-300" title="React" aria-label="React" />
          <SiVite className="text-purple-300" title="Vite" aria-label="Vite" />
          <SiTailwindcss className="text-sky-300" title="Tailwind CSS" aria-label="Tailwind CSS" />
          <SiFramer className="text-neutral-100" title="Framer Motion" aria-label="Framer Motion" />
          <SiNodedotjs className="text-green-300" title="Node.js" aria-label="Node.js" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
