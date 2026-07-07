import { motion } from "framer-motion";
import Hobbies from "./Hobbies";
import { FACTS } from "../constants/facts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Facts = () => {
  return (
    <motion.div className="  space-y-5 py-10">

      <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
        20 Facts about me
      </motion.h1>

      <motion.div
        className="lg:grid grid-cols-2 gap-3 mt-8"
        variants={containerVariants}
      >
        {FACTS.map((val, ind) => (
          <motion.div
            key={ind}
            className="text-[17px] gap-2 flex"
            // variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {ind + 1}:
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {val}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Facts;
