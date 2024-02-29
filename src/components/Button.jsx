import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <button className=" flex transform items-center justify-center gap-2 rounded-full bg-blue-primary px-5 py-3 text-white drop-shadow-sm transition duration-200 ease-in hover:bg-blue-800 hover:drop-shadow-lg">
      Sign up free <FaArrowRightLong className="mt-1 text-xs" />
    </button>
  );
};

export default Button;
