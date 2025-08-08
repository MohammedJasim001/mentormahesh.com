import { motion } from "framer-motion";
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
    style: "bottom-64 sm:-left-16",
    url: "https://www.facebook.com/mentor.mahesh",
  },
  {
    src: "instagram.png",
    style: "bottom-6 left-10",
    url: "https://www.instagram.com/mentormahesh/",
  },
  {
    src: "whatsapp.png",
    style: "right-20 bottom-16",
    url: "https://wa.me/9036033300",
  },
  {
    src: "linkedin.png",
    style: "bottom-56 right-0 sm:-right-20",
    url: "https://www.linkedin.com/in/metalmahesh/",
  },
];

const Youtube = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-20 overflow-hidden ">
      <h1
        className="text-5xl font-semibold"
        style={{ fontFamily: "Impact, sans-serif" }}
      >
        Check out my YouTube channel
      </h1>

      <div className="">
        <div className="flex justify-between">
          <ThirdStick />
          <SecondStick />
          <FirstStick />
        </div>
        <a href="https://www.youtube.com/@maheshmentor5946/featured">
          <motion.img src="youtube.png" alt="YouTube" className=""/>
        </a>

        <div className="flex justify-between">
          <FourthStick />
          <FourthStick />
        </div>
      </div>

      <div className="relative -mt-20 ">
        <img src="find.png" alt="Find" className="w-[620px] " />

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
    </div>
  );
};

export default Youtube;
