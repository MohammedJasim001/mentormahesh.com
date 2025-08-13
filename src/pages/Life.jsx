import { motion } from "framer-motion";
import Facts from "../components/life/Facts";
import Hobbies from "../components/life/Hobbies";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.15 },
  },
};

const Life = () => {
  return (
    <div className="pt-10" id="life">
      <motion.div
        className="lg:flex justify-around mt-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }} 
      >
        <motion.div variants={container} className="space-y-8">
          <motion.img
            src="life.png"
            alt=""
            className="w-96 "
            variants={fadeUp}
          />

          <div className="space-y-5 lg:space-y-10 lg:max-w-3xl">
            <motion.p
              className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16 font-imprima"
              variants={fadeUp}
            >
              My life isn’t a straight line — it’s a collection of little
              adventures, quiet mornings, and unexpected turns. I find joy in
              the smell of fresh coffee, the sound of rain, and the thrill of
              discovering something new. These moments fuel my creativity and
              shape the way I see the world, influencing not just my work, but
              the way I live every day.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16 font-imprima"
              variants={fadeUp}
            >
              I value building strong connections — with colleagues, clients,
              and communities. Outside of work, I spend time mentoring, engaging
              in cultural experiences, and exploring ideas that challenge the
              status quo. These moments keep my mind open and my approach to
              leadership grounded in empathy and understanding.
            </motion.p>
          </div>
        </motion.div>

        <motion.img
          src="lifeimage.png"
          alt=""
          className="w-[600px] mx-auto"
          variants={sectionVariants}
        />
      </motion.div>

      <motion.div
        className="sm:px-20 px-2 sm:-mt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        <motion.div variants={fadeUp}>
          <Facts />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Hobbies />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Life;
