import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const HomeTop = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["mentor1.png", "mentor2.png"];
  const bulb = ["bulb1.png", "bulb2.png"];
  const music1 = ["music11.png", "music12.png"];
  const music2 = ["music21.png", "music22.png"];
  const music1Rotate = ["music1rotate2.png", "music1rotate1.png"];
  const music2Rotate = ["music2rotate2.png", "music2rotate1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25 }); 

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const floatKeyframes = inView ? { y: [0, -10, 0] } : { y: 0 };
  const floatTransition = { duration: 2, repeat: Infinity, ease: "easeInOut" };

  return (
    <motion.div
      ref={sectionRef}
      id="/"
      className="overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="lg:flex items-center justify-center -mt-10 sm:-mt-0 space-x-5 space-y-5">
        {/* LEFT: floating music clusters */}
        <motion.div
          className="flex items-center justify-center overflow-hidden"
          variants={leftVariants}
        >
          <div className="h-[450px] flex flex-col justify-between lg:pt-20">
            <motion.div
              className="relative w-32 h-32"
              animate={floatKeyframes}
              transition={floatTransition}
            >
              {music1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music1 ${index + 1}`}
                  className={`absolute top-32 lg:top-0 left-32 lg:left-10 w-full h-full ${
                    index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </motion.div>

            <motion.div
              className="relative w-16 h-16"
              animate={floatKeyframes}
              transition={floatTransition}
            >
              {music2Rotate.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music2 ${index + 1}`}
                  className={`absolute w-full top-16 lg:top-24 h-full left-32 ${
                    index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* MIDDLE: bulb + portrait + nameplate */}
          <div className="flex flex-col items-center -space-y-5 sm:-space-y-6">
            <motion.div
              className="relative w-32 h-32"
              animate={floatKeyframes}
              transition={floatTransition}
            >
              {bulb.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`bulb ${index + 1}`}
                  className={`absolute left-0 w-full h-full ${
                    index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"
                  } ${index === 0 ? "mt-2" : "mt-0"}`}
                />
              ))}
            </motion.div>

            <motion.div
              className="mt-5 z-20"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
              }}
            >
              <img src="image.png" alt="" className="w-56 md:w-full" />
            </motion.div>

            <motion.div
              className="relative w-[350px] h-[130px] sm:w-[450px] sm:h-[180px]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`mentor ${index + 1}`}
                  className={`absolute left-0 w-full h-full ${
                    index === currentImage ? "z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* RIGHT: floating music clusters */}
          <div className="h-[450px] flex flex-col justify-between mt-52">
            <motion.div
              className="relative w-16 h-16"
              animate={floatKeyframes}
              transition={floatTransition}
            >
              {music1Rotate.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music1 ${index + 1}`}
                  className={`absolute w-full h-full right-24 ${
                    index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </motion.div>

            <motion.div
              className="relative w-28 h-28 sm:w-32 sm:h-32"
              animate={floatKeyframes}
              transition={floatTransition}
            >
              {music2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music2 ${index + 1}`}
                  className={`absolute right-20 bottom-36 md:-left-10 lg:left-0 w-full h-full ${
                    index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: text block */}
        <motion.div
          className="flex flex-col justify-center -mt-10 lg:-mt-0 space-y-5 px-4"
          variants={rightVariants}
        >
          <div className="text-[#FF7438]">
            <motion.h3
              className="text-2xl lg:text-4xl font-semibold"
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Hello, I'm
            </motion.h3>

            <motion.h1
              className="text-5xl lg:text-8xl font-bold"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 80, duration: 0.8 },
                },
              }}
            >
              Mahesh
            </motion.h1>
          </div>

          <motion.p
            className="text-xl lg:text-2xl font-imprima font-bold w-xs md:w-md"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            I have always been fascinated with people, the human psyche and
            interpersonal dynamics & my early influences to music..
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeTop;
