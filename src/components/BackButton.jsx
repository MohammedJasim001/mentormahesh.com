import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center fixed top-3 left-3 gap-2 cursor-pointer bg-amber-400 p-2 rounded-2xl shadow-lg"
      onClick={() => navigate("/")}
      initial={{ opacity: 0, x: -50 }} // slide in from left
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{
        scale: 1.08,
        x: -3,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <IoMdArrowBack className="sm:text-3xl font-bold text-xl" />
      <h1 className="sm:text-2xl font-bold">Back to Home</h1>
    </motion.div>
  );
};

export default BackButton;
