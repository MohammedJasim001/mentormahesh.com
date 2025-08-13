import { motion } from "framer-motion";
import { HOBBY } from "../../constant/Hobby";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Hobbies = () => {
  return (
    <motion.div
      className="lg:px-20 min-h-screen py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.div
        className="lg:-ml-10 flex gap-10 items-center"
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          variants={itemVariants}
        >
          My Hobbies - How I Relax
        </motion.h1>
      </motion.div>

      {/* Hobbies Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:px-10 gap-x-16 lg:gap-x-36 lg:ml-5"
        // variants={containerVariants}
      >
        {HOBBY.map((data, ind) => (
          <motion.div
            key={ind}
            className="max-w-md space-y-3 mt-4 lg:mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="lg:w-96 lg:h-96 w-80 h-80 flex items-center">
              <motion.img
                src={data.image}
                alt={data.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            <motion.h1
              className="sm:text-3xl text-xl font-bold max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {data.title}
            </motion.h1>
            <motion.p
              className="sm:text-lg font-semibold font-imprima"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {data.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
