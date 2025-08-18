import { useState } from "react";
import { BRANDS } from "../../constant/BrandsCreated";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import BackButton from "../BackButton";

const Brands = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" py-10">
      <BackButton />
      <div className="flex items-center justify-center">
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
      </div>
      <motion.h1
        className=" text-3xl md:text-5xl px-3 sm:px-0 lg:ml-20 lg:w-xl lg:text-6xl text-[#FF7438] font-bold "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        BRANDS I HAVE CREATED!
      </motion.h1>
      <div className="flex flex-col space-y-5 mt-10 items-center justify-center lg:px-24">
        {BRANDS.map((ele, ind) => (
          <motion.div
            key={ind}
            className="w-full rounded-xl border border-gray-300 shadow-sm overflow-hidden"
            style={{ backgroundColor: ele.bg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div
              className={`flex ${
                expandedIndex == ind ? "h-10" : "h-40"
              } justify-between items-center p-4 cursor-pointer`}
              onClick={() => toggleExpand(ind)}
            >
              {expandedIndex !== ind ? (
                <div>
                  {ele.image ? (
                    <img
                      src={ele.image}
                      alt=""
                      className="w-56 max-h-40 lg:ml-20 "
                    />
                  ) : (
                    <h1 className="text-xl lg:text-3xl font-serif font-bold lg:ml-2">
                      {ele.title}
                    </h1>
                  )}
                </div>
              ) : (
                <div></div>
              )}
              <div className="">
                {expandedIndex === ind ? (
                  <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                    <FaChevronUp className=" " style={{ color: ele.bg }} />
                  </div>
                ) : (
                  <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                    <FaChevronDown className="" style={{ color: ele.bg }} />
                  </div>
                )}
              </div>
            </div>

            {expandedIndex === ind && (
              <div
                className={`flex flex-col sm:flex-row ${
                  ind % 2 !== 0 ? "sm:flex-row-reverse" : ""
                } justify-center items-center gap-6 px-5 pb-5`}
              >
                <div className="md:w-2/5 flex items-center justify-center">
                  {ele.image ? (
                    <img src={ele.image} alt="" className="w-96 max-h-56" />
                  ) : (
                    <h1 className="text-4xl font-serif font-bold lg:ml-2">
                      {ele.title}
                    </h1>
                  )}
                </div>
                <div className="md:w-3/5 flex flex-col space-y-10 gap-6 md:gap-0 h-full lg:px-10">
                  <p className="text-lg sm:text-xl font-semibold font-imprima">
                    {ele.description}
                  </p>
                  <a href={ele.url} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black text-xl text-white p-3 font-semibold rounded-lg w-40 hover:bg-gray-900 hover:shadow-lg">
                      Visit The Site
                    </button>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
