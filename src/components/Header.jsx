import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex items-center gap-5 border-b border-[#F0F0F0] p-6 text-navy-blue">
      <img
        src="miro-logo.svg"
        alt="Miro logo"
        height="75"
        width="75"
        className="h-auto max-w-full "
      />

      <nav className="flex w-full flex-col items-center justify-between lg:flex-row">
        <GiHamburgerMenu
          className={` ml-auto text-xl lg:hidden ${isOpen ? "text-white" : "text-navy-blue"}`}
          onClick={() => handleClick()}
        />

        <div
          className={` fixed right-0 top-0 z-10 ml-auto h-screen w-[30vw] min-w-fit bg-navy-blue text-white sm:w-[20vw] lg:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <GiHamburgerMenu
            className={`fixed right-7 top-7 z-20 ml-auto text-xl lg:hidden ${isOpen ? "text-white" : "text-navy-blue"}`}
            onClick={() => handleClick()}
          />
          <ul className="bg-gray-900 mt-14 p-4">
            <li className="py-2">Product</li>
            <li className="py-2">Solution</li>
            <li className="py-2">Resources</li>
            <li className="py-2">Enterprise</li>
            <li className="py-2">Pricing</li>
            <li className="py-2">Contact Sales</li>

            <li className="py-2">Login</li>

            <li className="py-2">Language: English</li>

            <li className="py-2">
              <Button />
            </li>
          </ul>
        </div>
        <ul className="hidden items-center gap-5 lg:flex">
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Product
            <FaAngleDown className="mt-2 cursor-pointer text-xs hover:text-blue-dark" />
          </li>
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Solutions
            <FaAngleDown className="mt-2 cursor-pointer text-xs hover:text-blue-dark" />
          </li>
          <li className="flex cursor-pointer items-center gap-2 hover:text-blue-dark">
            Resources
            <FaAngleDown className="mt-2 text-xs" />
          </li>
          <li className="cursor-pointer hover:text-blue-dark">Enterprise</li>
          <li className="cursor-pointer hover:text-blue-dark">Pricing</li>
        </ul>
        <ul className="hidden items-center gap-5 lg:flex">
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
