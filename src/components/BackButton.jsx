import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center fixed top-3 left-3 gap-2 cursor-pointer bg-black text-white p-3 rounded-lg shadow-lg z-10"
      onClick={() => navigate(-1)}
      
    >
      <IoMdArrowBack className=" font-bold text-lg" />
      <h1 className=" font-semibold">Back to Home</h1>
    </motion.div>
  );
};

export default BackButton;
