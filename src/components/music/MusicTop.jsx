import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KnowMoreButton from "../KnowMoreButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const fadeText = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const MotionImg = ({ src, alt, className }) => (
  <motion.img src={src} alt={alt} className={className} {...fadeInUp} />
);

const MotionDiv = ({ children, className }) => (
  <motion.div className={className} {...fadeInUp}>
    {children}
  </motion.div>
);

const MusicTop = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="flex flex-col lg:flex-row items-center md:px-12 lg:px-20 justify-between">
      <div className="lg:space-y-10">
        <MotionImg src="music.png" alt="" className="w-96" />
        <MotionImg src="music_band.png" alt="" className="block lg:hidden" />

        <MotionDiv className="lg:hidden flex justify-between">
          <MotionImg src="icon1.png" alt="" className="w-36" />
          <MotionImg src="90s.png" alt="" className="w-36" />
        </MotionDiv>

        <MotionDiv className="mt-10 px-4 sm:px-0 sm:ml-5 max-w-[530px] space-y-4">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl text-[#FF7438] font-bold"
            {...fadeText}
          >
            WELCOME TO MY MUSIC COLLECTION!
          </motion.h1>
          <motion.p
            className="text-xl font-semibold font-imprima"
            {...fadeText}
          >
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </motion.p>
          <div className="flex ">
            <KnowMoreButton onClick={() => navigate("music")} />
          </div>
        </MotionDiv>

        <MotionDiv className="hidden lg:flex justify-between">
          <MotionImg src="icon1.png" alt="" className="w-36" />
          <MotionImg src="90s.png" alt="" className="w-36" />
        </MotionDiv>
      </div>

      <MotionImg
        src="icon2.png"
        alt=""
        className="w-36 -mt-10 hidden lg:block"
      />
      <MotionImg
        src="music_band.png"
        alt=""
        className="w-[500px] hidden lg:block"
      />
    </motion.div>
  );
};

export default MusicTop;
