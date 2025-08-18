import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FirstStick,
  FourthStick,
  SecondStick,
  ThirdStick,
} from "./YoutubeSticks";

const bounceTransition = {
  y: {
    duration: 0.7,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const appIcons = [
  {
    src: "facebook.png",
    style: "bottom-64 left-0 sm:-left-4 w-10 lg:w-16",
    url: "https://www.facebook.com/mentor.mahesh",
  },
  {
    src: "instagram.png",
    style: "bottom-6 left-10 w-14 lg:w-20",
    url: "https://www.instagram.com/mentormahesh/",
  },
  {
    src: "whatsapp.png",
    style: "right-20 bottom-16 w-14 lg:w-20",
    url: "https://wa.me/9036033300",
  },
  {
    src: "linkedin.png",
    style: "bottom-56 right-0 sm:-right-10 w-14 lg:w-20",
    url: "https://www.linkedin.com/in/metalmahesh/",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const Youtube = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 }); 

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="lg:flex lg:px-20 lg:space-x-20 pt-10"
    >
      <motion.div
        className="flex flex-col justify-center lg:space-y-8 px-1 overflow-hidden"
        variants={sectionVariants}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          Check out my YouTube channel
        </motion.h1>

        <motion.div variants={sectionVariants}>
          <div className="flex justify-between">
            <ThirdStick />
            <SecondStick />
            <FirstStick />
          </div>
          <a href="https://www.youtube.com/@maheshmentor5946/featured">
            <motion.img
              src="youtube.png"
              alt="YouTube"
              
            />
          </a>
          <div className="flex justify-between">
            <FourthStick />
            <FourthStick />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, x: -20, y: 10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="max-w-xl relative">
          <img src="find.png" alt="Find" className="w-[580px] lg:w-[620px]" />

          {appIcons.map((icon, index) => (
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <motion.img
                src={icon.src}
                alt=""
                className={`absolute ${icon.style}`}
                animate={{ y: [0, -5] }}
                transition={bounceTransition}
                whileHover={{
                  rotate: 360,
                  transition: {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Youtube;
