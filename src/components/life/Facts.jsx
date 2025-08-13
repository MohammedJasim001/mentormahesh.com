import { FACTS } from "../../constant/Facts";
import { motion } from "framer-motion";

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
    <motion.div
      className="lg:px-10 space-y-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h1
        className="text-4xl font-bold"
        variants={itemVariants}
      >
        20 Facts about me
      </motion.h1>

      <motion.div
        className="lg:grid grid-cols-2 gap-3"
        variants={containerVariants}
      >
        {FACTS.map((val, ind) => (
          <motion.div
            key={ind}
            className="text-lg font-bold font-imprima gap-2 flex"
            // variants={itemVariants}
          >
            <motion.span initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>{ind + 1}:</motion.span>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>{val}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Facts;
