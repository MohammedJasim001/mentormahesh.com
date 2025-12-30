import { motion } from "framer-motion";
import { WORK } from "../constant/Work";
import KnowMoreButton from "../components/KnowMoreButton";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
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

            <div className="sm:w-1/2 flex  space-y-5 flex-col items-center justify-center">
              <p className="text-lg sm:text-xl font-semibold font-imprima">
                {ele.description}
              </p>
              {ind === WORK.length - 1 && (
                <div className="flex w-full">
                  <KnowMoreButton onClick={() => navigate("work")} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* <Brands /> */}
    </div>
  );
};

export default Work;
