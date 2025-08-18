import { motion } from "framer-motion";
import Facts from "../components/life/Facts";
import Hobbies from "../components/life/Hobbies";
import KnowMoreButton from "../components/KnowMoreButton";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Life = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-10" id="life">
      {/* Top Section */}
      <motion.img src="life.png" alt="" className="w-96" {...fadeInUp} />
      <motion.div
        className="lg:flex justify-around mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        <motion.img
          src="lifeimage.png"
          alt=""
          className="w-[600px] mx-auto order-1 lg:order-2 lg:-mt-52"
          {...fadeInUp}
        />

        <motion.div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-5 lg:space-y-10 lg:max-w-3xl">
            <motion.p
              className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16 font-imprima"
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
              className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16 font-imprima"
              {...fadeInUp}
            >
              I value building strong connections — with colleagues, clients,
              and communities. Outside of work, I spend time mentoring, engaging
              in cultural experiences, and exploring ideas that challenge the
              status quo. These moments keep my mind open and my approach to
              leadership grounded in empathy and understanding.
            </motion.p>
            <div className="flex pl-2 sm:pl-20">
              <KnowMoreButton onClick={() => navigate("life")} />
            </div>
          </div>
        </motion.div>

        {/* <motion.img
          src="lifeimage.png"
          alt=""
          className="w-[600px] mx-auto"
          {...fadeInUp}
        /> */}
      </motion.div>

      {/* <motion.div
        className="sm:px-20 px-2 sm:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
      >
        <motion.div {...fadeInUp}>
          <Facts />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Hobbies />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Life;
