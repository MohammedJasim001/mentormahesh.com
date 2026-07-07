import { motion } from "framer-motion";
import { HOBBY } from "../constants/hobby";

const Hobbies = () => {
  console.log(
    HOBBY.map((ele) => ele.title),
  );
  return (
    <motion.div className="px-40 min-h-screen py-10">
      <motion.div className="-ml-10 flex gap-10 items-center ">
        <h2 className="text-7xl text-[#FF7438] font-bold press-start">03</h2>
        <h1 className="text-5xl font-bold text-gray-900">
          My Hobbies - How I Relax
        </h1>
      </motion.div>

      <motion.div className="grid grid-cols-2 gap-x-36 ml-5">
        {HOBBY.map((data, ind) => (
          <motion.div key={ind} className="max-w-md space-y-3 mt-10 ">
            <div className="w-96 h-96 flex items-center">
              <motion.img src={data.image} alt="" className="" />
            </div>
            <motion.h1 className="text-3xl font-bold max-w-sm ">
              {data.title}
            </motion.h1>
            <motion.p className="text-lg font-semibold">
              {data.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
