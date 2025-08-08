import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const NavItems = [
    { image: "life.png", url: "life" },
    { image: "work.png", url: "work" },
    { image: "music.png", url: "music" },
  ];

  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="">
      <div className="flex gap-2 justify-around px-2 md:px-5 lg:px-40 h-36 items-center mt-10  rounded-xl ">
        {NavItems.map((ele, ind) => (
          
          <motion.div
            key={ind}
            className={`sm:w-80 w-40 cursor-pointer bg-amber-400 h-10 sm:h-20 lg:h-28 rounded-2xl flex items-center justify-center ${ele.url =="music" && " sm:mt-1 mr-2"} ${ele.url == "work" && "pr-4"}`}
            onClick={() => handleClick(ele.url)}
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: ind * 0.15, 
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0], 
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={ele.image} alt={`nav-${ind}`} className="" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
