import { FaArrowRightLong } from 'react-icons/fa6';

const Button = () => {
  return (
    <button className=" bg-blue-primary text-white  px-5 py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition ease-in duration-200 transform drop-shadow-sm hover:drop-shadow-lg  ">
      Sign up free <FaArrowRightLong className=" text-xs mt-1" />
    </button>
  );
};

export default Button;
