import { motion } from "framer-motion";
import Brands from "../components/work/Brands";
import { WORK } from "../constant/Work";

const Work = () => {
  return (
    <div className="sm:p-8 p-2 pt-12 lg:px-20 space-y-10" id="work">
      <motion.img
        src="work.png"
        alt=""
        className="w-96 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
      />

      <div className="md:-space-y-20 lg:px-20 ">
        {WORK.map((ele, ind) => (
          <motion.div
            key={ind}
            className={`flex flex-col sm:flex-row items-center justify-between  p-6 rounded-lg ${
              ind % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={`flex`}>
              <img
                src={ele.img}
                alt=""
                className={`rounded-xl shadow-lg ${ele.style}`}
              />
            </div>

            <div className="border-l-2 hidden md:block h-[300px] bg-black"></div>

            <div className="sm:w-1/2 flex items-center justify-center">
              <p className="text-lg sm:text-xl font-semibold font-imprima">
                {ele.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h1
        className=" text-3xl md:text-5xl lg:ml-20 lg:w-xl lg:text-6xl text-[#FF7438] font-bold "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        BRANDS I HAVE CREATED!
      </motion.h1>

      <Brands />
    </div>
  );
};

export default Work;
