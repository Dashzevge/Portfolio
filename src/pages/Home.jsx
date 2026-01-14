import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/Profile.png";
import Rocket from "../components/Rocket";

const Home = () => {
  const [showSocial, setShowSocial] = useState(false);
  const hideTimerRef = useRef(null);

  const handleRocketClick = () => {
    setShowSocial(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setShowSocial(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative inline-flex items-center lg:mt-16">
              <h1 className="relative inline-block pb-16 text-6xl font-thin tracking-tight transition duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_24px_rgba(34,211,238,0.45)] lg:text-8xl">
                Dash Bumchin
              </h1>
              <Rocket onClick={handleRocketClick} showSocial={showSocial} />
            </div>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right section - Profile image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img
              src={profileImage}
              alt="Portrait of Dash Bumchin"
              className="w-[32rem] rounded-3xl border border-neutral-800 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
