import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      className="flex items-center justify-center gap-2 px-5 py-3 text-white transition duration-200 ease-in transform rounded-full bg-blue drop-shadow-sm hover:bg-blue-dark hover:drop-shadow-lg"
      whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
    >
      Sign up free <FaArrowRightLong className="mt-1 text-xs" />
    </motion.button>
  );
};

export default Button;
