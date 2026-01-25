import { useEffect, useRef} from "react";
import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/Profile.png";
import PathMorphing from "../components/MotionChange";  
import { motion } from "motion/react";


const Home = () => {

  const hideTimerRef = useRef(null);
  const heroParagraphs = HERO_CONTENT.split("\n\n");
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.02, delayChildren: 0.1 },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative inline-flex items-center lg:mt-16">
              <h1 className="relative inline-block pb-16 text-6xl font-thin tracking-tight transition duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_24px_rgba(34,211,238,0.45)] lg:text-8xl">
                About me
              </h1>
              
            </div>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <div className="my-2 max-w-xl py-6 font-light tracking-tighter space-y-4">
              {heroParagraphs.map((paragraph, paragraphIndex) => (
                <motion.p
                  key={paragraphIndex}
                  className="leading-relaxed text-neutral-100/90"
                  style={{ fontSize: "110%", textAlign: "justify", textJustify: "inter-word" }}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {paragraph.split(" ").map((word, wordIndex, words) => (
                    <motion.span key={`${paragraphIndex}-${wordIndex}`} variants={wordVariants}>
                      {word}
                      {wordIndex < words.length - 1 ? " " : ""}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Right section - Profile image */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={profileImage}
              alt="Portrait of Dash Bumchin"
              className="w-[32rem] rounded-3xl border border-neutral-800 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <PathMorphing />
      </div>

    </div>
  );
};

export default Home;
