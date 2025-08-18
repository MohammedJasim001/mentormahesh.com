import { MUSIC } from "../../constant/Music";
import { motion } from "framer-motion";
import VinylCollections from "./VinylCollections";
import BackButton from "../BackButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const MotionImg = ({ src, alt, className }) => (
  <motion.img src={src} alt={alt} className={className} {...fadeInUp} />
);

const MotionText = ({ children, className, down = false }) => (
  <motion.div className={className} {...(down ? fadeInDown : fadeInUp)}>
    {children}
  </motion.div>
);

const Musicions = () => {
  return (
    <div className="">
      <BackButton />
      {/* <div className="flex items-center justify-center">
        <MotionImg src="music.png" alt="" className="w-96" />
      </div> */}

      <div>
        <video
          className=" w-full lg:h-screen object-cover "
          src="MUSIC_VIDEO.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <motion.div className=" mt-5">
        {MUSIC.map((data, ind) => {
          const isEven = ind % 2 === 0;
          return (
            <motion.div
              key={ind}
              className={`flex sm:h-[350px] ${
                isEven
                  ? "flex-col lg:space-y-20 sm:flex-row"
                  : "flex-col sm:flex-row-reverse"
              }`}
              style={{ backgroundColor: data.bg }}
              {...fadeInUp}
            >
              <MotionImg
                src={data.image}
                alt=""
                className="object-cover h-full"
              />
              <div className="flex flex-col justify-center lg:px-32 w-full py-4 lg:py-0 pl-3">
                <MotionText
                  className="text-3xl lg:text-6xl font-bold sm:mb-4"
                  down
                >
                  {data.text1}
                </MotionText>

                {data.text2 ? (
                  <MotionText className="text-2xl lg:text-4xl font-bold" down>
                    {data.text2}
                  </MotionText>
                ) : (
                  <motion.div
                    className="text-3xl lg:text-6xl font-bold"
                    {...fadeInDown}
                  >
                    <span className="font-semibold text-2xl lg:text-4xl">
                      and
                    </span>{" "}
                    ROGER GLOVER
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <VinylCollections />
    </div>
  );
};

export default Musicions;
