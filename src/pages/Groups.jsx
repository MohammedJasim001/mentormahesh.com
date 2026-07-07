import { GROUP } from "../constants/group";
import {motion} from 'framer-motion'

const Groups = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 space-y-14">
      <h1 className="text-4xl press-start text-[#FF7438]">GROUPS FOR YOU!</h1>
      <div className="grid grid-cols-3 gap-32 ">
        {GROUP.map((ele, ind) => (
        <div className="w-xs bg-ambe space-y-4" key={ind}>
          <img src={ele.image} alt="" className="w-72 h-72"/>
          <h1 className="text-3xl font-bold">{ele.title}</h1>
          <p className="text-sm">{ele.description}</p>
          <motion.button
            className="bg-[#FF7438] py-3 px-6 text-white rounded-lg text-xl font-semibold w-max mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request to join
          </motion.button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Groups;
