import { motion } from "framer-motion";
import { HOBBY } from "../../constant/Hobby";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const MotionImg = ({ src, alt, className }) => (
  <motion.img src={src} alt={alt} className={className} {...fadeInUp} />
);

const MotionText = ({ children, className }) => (
  <motion.div className={className} {...fadeInUp}>
    {children}
  </motion.div>
);

const Hobbies = () => {
  return (
    <motion.div
      className="lg:px-20 min-h-screen py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Title */}
      <motion.div className="lg:-ml-10 flex gap-10 items-center">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          My Hobbies - How I Relax
        </motion.h1>
      </motion.div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-10 gap-x-16 lg:gap-x-36 lg:ml-5">
        {HOBBY.map((data, ind) => (
          <motion.div
            key={ind}
            className="max-w-md space-y-3 mt-4 lg:mt-10"
            {...fadeInUp}
          >
            <div className="lg:w-96 lg:h-96 w-80 h-80 flex items-center">
              <MotionImg src={data.image} alt={data.title} />
            </div>
            <MotionText className="sm:text-3xl text-xl font-bold max-w-sm">
              {data.title}
            </MotionText>
            <MotionText className="sm:text-lg font-semibold font-imprima">
              {data.description}
            </MotionText>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;
