import { motion } from "framer-motion";
import { HOBBY } from "../../constant/Hobby";

const Hobbies = () => {
  return (
    <motion.div className="lg:px-40 min-h-screen py-10">
      <motion.div className="lg:-ml-10 flex gap-10 items-center ">
        {/* <h2 className="text-7xl text-[#FF7438] font-bold press-start">03</h2> */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
          My Hobbies - How I Relax
        </h1>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-36 lg:ml-5">
        {HOBBY.map((data, ind) => (
          <motion.div key={ind} className="max-w-md space-y-3 mt-4 lg:mt-10 ">
            <div className="lg:w-96 lg:h-96 w-80 h-80 flex items-center">
              <motion.img src={data.image} alt="" className="" />
            </div>
            <motion.h1 className="sm:text-3xl text-xl font-bold max-w-sm ">
              {data.title}
            </motion.h1>
            <motion.p className="sm:text-lg font-semibold font-imprima">
              {data.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
