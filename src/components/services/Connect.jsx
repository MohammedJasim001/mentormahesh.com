import { useState } from "react";
import { CONNECT_ME } from "../../constant/ConnectMe";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Connect = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div id="contact">
      <div className="h-24 lg:h-32 flex items-center justify-center bg-white text-center">
        <h1 className="text-3xl lg:text-6xl font-bold text-[#FF7438]">
          CONNECT WITH ME FOR
        </h1>
      </div>
      <div className="">
        {CONNECT_ME.map((ele, ind) => (
          <div
            key={ind}
            className="w-full rounded-xl border border-gray-300 shadow-sm "
            style={{ backgroundColor: ele.bg }}
          >
            <div
              className={`flex h-32 justify-between items-center p-4 cursor-pointer lg:px-20`}
              onClick={() => toggleExpand(ind)}
            >
              <div className="flex space-x-5 items-center">
                <h1 className="press-start text-2xl lg:text-4xl">0{ind + 1}</h1>
                <h1 className="text-2xl lg:text-4xl font-bold">{ele.title}</h1>
              </div>
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
              <div className="lg:flex px-4 lg:px-28  justify-between">
                <div className=" flex flex-col space-y-8 md:gap-0 h-full lg:px-10 text-lg sm:text-xl font-semibold font-imprima lg:w-2xl b">
                  <p className="">{ele.description}</p>
                  <div>
                    <p>{ele.help}:</p>
                    <div>
                      {ele.points.map((val, poi) => (
                        <li key={poi} className="flex items-start space-x-3">
                          <span className="text-2xl leading-[1.2]">•</span>
                          <p className="flex-1">{val}</p>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="">
                  <img src={ele.img} alt="" className="w-[450px] lg:-mt-16" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
