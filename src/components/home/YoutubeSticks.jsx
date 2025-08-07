import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.7,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
export const FirstStick = () => {
  return (
    <motion.div
      className="-space-x-7 "
      animate={{ y: [0, -5] }}
      transition={bounceTransition}
    >
      <img src="stick1/Frame-1.png" alt="" className="inline" />
      <img src="stick1/Frame-2.png" alt="" className="inline" />
      <img src="stick1/Frame.png" alt="" className="inline" />
    </motion.div>
  );
};

export const SecondStick = () => {
  return (
    <motion.div
      className=" -space-x-5"
      animate={{ y: [0, -5] }}
      transition={bounceTransition}
    >
      <img src="stick2/Frame.png" alt="" className="inline" />
      <img src="stick2/Frame-1.png" alt="" className="inline" />
      <img src="stick2/Frame-2.png" alt="" className="inline" />
    </motion.div>
  );
};

export const ThirdStick = () => {
  return (
    <motion.div
      className=" -space-x-12"
      animate={{ y: [0, -5] }}
      transition={bounceTransition}
    >
      <img src="stick3/Frame-2.png" alt="" className="inline mt-20 " />
      <img src="stick3/Frame-1.png" alt="" className="inline" />
      <img src="stick3/Frame.png" alt="" className="inline" />
    </motion.div>
  );
};

export const FourthStick = () => {
  return (
    <motion.div
      className=" -space-x-12 "
      animate={{ y: [0, -5] }}
      transition={bounceTransition}
    >
      <img src="stick4/Frame.png" alt="" className="inline" />
      <img src="stick4/Frame-2.png" alt="" className="inline" />
      <img src="stick4/Frame-1.png" alt="" className="inline mb-10" />
    </motion.div>
  );
};
