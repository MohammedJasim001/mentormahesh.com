import { motion } from "framer-motion";
import Hobbies from "../components/Hobbies";
import Facts from "../components/Facts";
import BackButton from "../components/BackButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Life = () => {
  return (
    <div className="pt-10 px-6 lg:px-24" id="life">
      <BackButton />
      {/* Top Section */}
      <motion.div
        className="lg:flex justify-around mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        <motion.img
          src="lifeimage.png"
          alt=""
          className="w-[600px] mx-auto order-1 lg:order-2 lg:-mt-20"
          {...fadeInUp}
        />

        <motion.div className="space-y-10 order-2 lg:order-1 mt-20">
          <motion.img src="life.png" alt="" className="w-72" {...fadeInUp} />

          <div className="space-y-5 lg:space-y-10 lg:max-w-3xl">
            <motion.p
              className="text-[17px] px-2  sm:px-16 font-imprima"
              {...fadeInUp}
            >
              My life isn’t a straight line — it’s a collection of little
              adventures, quiet mornings, and unexpected turns. I find joy in
              the smell of fresh coffee, the sound of rain, and the thrill of
              discovering something new. These moments fuel my creativity and
              shape the way I see the world, influencing not just my work, but
              the way I live every day.
            </motion.p>

            <motion.p
              className="text-[17px] px-2  sm:px-16 font-imprima"
              {...fadeInUp}
            >
              I value building strong connections — with colleagues, clients,
              and communities. Outside of work, I spend time mentoring, engaging
              in cultural experiences, and exploring ideas that challenge the
              status quo. These moments keep my mind open and my approach to
              leadership grounded in empathy and understanding.
            </motion.p>
          </div>
        </motion.div>

        {/* <motion.img
          src="lifeimage.png"
          alt=""
          className="w-[600px] mx-auto"
          {...fadeInUp}
        /> */}
      </motion.div>

      <motion.div
        className="sm:px-20 px-2 space-y-14 sm:-"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        <motion.div className="">
          <Facts />
        </motion.div>
        <motion.div>
          <Hobbies />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Life;
