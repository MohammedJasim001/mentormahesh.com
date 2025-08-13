import { useState } from "react";
import { BRANDS } from "../../constant/BrandsCreated";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {motion} from 'framer-motion'

const Brands = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
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
                <img src={ele.image} alt="" className="w-56 max-h-40 lg:ml-20 " />
            ):(
              <div></div>
            )}
             <div className="">
                {expandedIndex === ind ? (
                  <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                    <FaChevronUp className=" " style={{color:ele.bg}}/>
                  </div>
                ) : (
                  <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                    <FaChevronDown className="" style={{color:ele.bg}}/>
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
                <img src={ele.image} alt="" className="w-96 max-h-56" />
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
  );
};

export default Brands;
