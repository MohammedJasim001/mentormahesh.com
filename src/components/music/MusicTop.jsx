import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MusicTop = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center md:px-12 lg:px-32 justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:space-y-10" variants={itemVariants}>
        <motion.img src="music.png" alt="" className="w-96" variants={itemVariants} />
        <motion.img src="music_band.png" alt="" className="block lg:hidden" variants={itemVariants} />

        <motion.div className="lg:hidden flex justify-between" variants={itemVariants}>
          <motion.img src="icon1.png" alt="" className="w-36" variants={itemVariants} />
          <motion.img src="90s.png" alt="" className="w-36" variants={itemVariants} />
        </motion.div>

        <motion.div
          className="mt-10 px-4 sm:px-0 sm:ml-5 max-w-[530px] space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#FF7438] font-bold">
            WELCOME TO MY MUSIC COLLECTION!
          </h1>
          <p className="text-xl font-semibold font-imprima">
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </p>
        </motion.div>

        <motion.div className="hidden lg:flex justify-between" variants={itemVariants}>
          <motion.img src="icon1.png" alt="" className="w-36" variants={itemVariants} />
          <motion.img src="90s.png" alt="" className="w-36" variants={itemVariants} />
        </motion.div>
      </motion.div>

      <motion.img src="icon2.png" alt="" className="w-36 -mt-10 hidden lg:block" variants={itemVariants} />
      <motion.img src="music_band.png" alt="" className="w-[500px] hidden lg:block" variants={itemVariants} />
    </motion.div>
  );
};

export default MusicTop;
