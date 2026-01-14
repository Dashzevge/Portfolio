import { useState } from "react";
import { HERO_CONTENT } from "../constants";
//import CodingToSatellite from "../components/Space.jsx";
import RocketLaunchOnScroll from "../components/Rocket.jsx";
import { motion } from "motion/react";

const Home = () => {
  // State for Resume hover
 // const [resumeHovered, setResumeHovered] = useState(false);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Dash Bumchin
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right section - Animated SVG */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div style={{ width: 200 }} className="flex justify-center">
            <RocketLaunchOnScroll />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
