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
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight pt-8 lg:pt-16 text-center lg:text-left"
        >
          Muhammad Haseeb Tariq
        </motion.h1>
      </div>
      {/* Section for content and image */}
      <div className="flex flex-col lg:flex-row pt-4">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          {/* Text content with heading */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-blue-500 bg-clip-text text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify text-center lg:text-left text-base md:text-lg lg:text-xl"
              style={{ textAlign: 'justify' }} // Ensures justification
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
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
