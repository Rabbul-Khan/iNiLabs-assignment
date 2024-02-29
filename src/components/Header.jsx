import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center gap-5 border-b border-b-gray-200 p-6 text-text-primary">
      <img
        src="miro-logo.svg"
        alt="Miro logo"
        height="75"
        width="75"
        className="h-auto max-w-full"
      />
      <nav className="flex w-full items-center justify-between">
        <ul className="flex items-center gap-5">
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Product
            <FaAngleDown className="mt-2  cursor-pointer text-xs hover:text-blue-dark" />
          </li>
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Solutions
            <FaAngleDown className="mt-2  cursor-pointer text-xs hover:text-blue-dark" />
          </li>
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Resources
            <FaAngleDown className="mt-2  text-xs" />
          </li>
          <li className="cursor-pointer hover:text-blue-dark">Enterprise</li>
          <li className="cursor-pointer hover:text-blue-dark">Pricing</li>
        </ul>
        <ul className="flex items-center gap-5 ">
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            <PiGlobe className="text-lg" /> EN
          </li>
          <li className="cursor-pointer hover:text-blue-dark">Contact Sales</li>
          <li className="cursor-pointer hover:text-blue-dark">Login</li>
          <Button />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
