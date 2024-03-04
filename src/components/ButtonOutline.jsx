import { FaArrowRightLong } from "react-icons/fa6";

const ButtonOutline = () => {
  return (
    <button className="flex items-center justify-center gap-2 px-5 py-3 text-lg transition duration-200 ease-in transform border rounded-full max-w-fit border-blue text-blue drop-shadow-sm hover:bg-blue hover:text-white hover:drop-shadow-lg">
      See all customer stories
      <FaArrowRightLong className="mt-1 text-xs" />
    </button>
  );
};

export default ButtonOutline;
