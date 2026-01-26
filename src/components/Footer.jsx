import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiFramer } from "react-icons/si";
import { MotionIconLink } from "./MotionChange";
import profileImage from "../assets/Profile.png";

const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 z-30 m-5 text-left">
        {isAboutOpen ? (
          <div className="mb-2 max-w-[30em] rounded-md bg-gray-900 bg-opacity-90 p-4 py-6 text-left shadow-2xl">
            <div className="flex flex-col items-center sm:flex-row">
              <img className="w-32 rounded-full" src={profileImage} alt="Tushig Tsogtbaatar" />
              <div className="mt-2 flex flex-col sm:ml-6 sm:mt-0">
                <h4 className="text-lg">Dashzevge Bumchin</h4>
                <p className="mt-2 block text-sm font-thin">
                  I&apos;m a <strong>full stack developer</strong> from <strong>Mongolia</strong> 🇲🇳 with{" "}
                  <strong>8+ years</strong> of expertise in designing and developing{" "}
                  <strong>web and enterprise applications</strong>.
                </p>
                <div className="mt-4 flex content-center space-x-4">
                  <MotionIconLink
                    href="https://github.com/Dashzevge"
                    label="GitHub"
                    Icon={FaGithub}
                    className="text-sky-400"
                  />
                  <MotionIconLink
                    href="https://www.linkedin.com/in/dash-bumchin"
                    label="LinkedIn"
                    Icon={FaLinkedin}
                    className="text-[#0A66C2]"
                  />
                  <MotionIconLink
                    href="https://www.instagram.com/dashzevgebumchin/"
                    label="Instagram"
                    Icon={FaInstagram}
                    className="text-pink-500"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsAboutOpen((prev) => !prev)}
            className="relative rounded-full border border-neutral-800 bg-neutral-900/80 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neutral-200 backdrop-blur transition hover:border-neutral-600 hover:text-white"
          >
            {isAboutOpen ? "Close" : "About Me"}
            {!isAboutOpen ? (
              <span className="absolute right-[-5px] top-[-5px] flex h-3 w-3 select-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            ) : null}
          </button>
        </div>
      </div>

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

    </>
  );
};

export default Footer;
