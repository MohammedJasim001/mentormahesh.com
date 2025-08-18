import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const fadeInDown = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const MotionImg = ({ src, alt, className }) => (
  <motion.img src={src} alt={alt} className={className} {...fadeInUp} />
);

const VinylCollections = () => {
  return (
    <motion.div className="lg:px-32 space-y-16 sm:py-5" {...fadeInDown}>
      <div className="sm:flex justify-between ">
        <div className="flex justify-between items-center w-1/2">
          <MotionImg
            src="music_images/gramphone.png"
            alt=""
            className="w-24 h-24 lg:w-36 lg:h-36"
          />
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#FF7438] max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            MY VINYL COLLECTIONS!
          </h1>
        </div>
        <div className="grid grid-cols-2 -mb-10 sm:-mb-0 mt-5 sm:mt-0 sm:w-4/9 px-2 sm:px-0">
          <MotionImg src="music_images/the-beatles.png" alt="the-beatles" />
          <MotionImg src="music_images/pink-floyd1.png" alt="pink-floyd1" />
        </div>
      </div>
      <div className="grid grid-cols-2 space-y-5 sm:grid-cols-4 justify-between px-2 sm:px-0">
        <MotionImg src="music_images/pink-floyd2.png" alt="pink-floyd2" />
        <MotionImg src="music_images/iron-maiden.png" alt="iron-maiden" />
        <MotionImg src="music_images/scorpions.png" alt="scorpions" />
        <MotionImg src="music_images/nirvana.png" alt="nirvana" />
      </div>
    </motion.div>
  );
};

export default VinylCollections;
