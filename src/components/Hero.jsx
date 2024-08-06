import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/MuhammadHaseebTariq.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {/* Section for name */}
      <div className="flex justify-center lg:justify-center">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-center text-6xl font-thin tracking-tight pt-16 lg:pt-32"
        >
          Muhammad Haseeb Tariq
        </motion.h1>
      </div>
      {/* Section for content and image */}
      <div className="flex flex-wrap pt-8">
        <div className="w-full lg:w-1/2 lg:pr-8">
          {/* Text content with heading */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          {/* Profile image */}
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Muhammad Haseeb Tariq"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
