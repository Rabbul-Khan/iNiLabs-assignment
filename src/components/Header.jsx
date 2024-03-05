import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let variants = {};
  const isMobile = window.innerWidth < 1300;
  if (!isMobile) {
    variants = {
      initial: {
        x: -500,
      },
      animate: {
        x: 0,
        transition: {
          duration: 0.35,
        },
      },
    };
  }

  return (
    <motion.header
      className="flex items-center gap-5 border-b border-[#F0F0F0] p-6 text-navy-blue"
      variants={variants}
      animate="animate"
      initial="initial"
    >
      <motion.img
        src="miro-logo.svg"
        alt="Miro logo"
        height="75"
        width="75"
        className="h-auto max-w-full "
        whileHover={{
          rotateZ: [0, -10, 10, -10, 10, -10, 10, 0],
          transition: { duration: 0.5 },
        }}
      />

      <nav className="flex flex-col items-center justify-between w-full lg:flex-row">
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
          <ul className="p-4 bg-gray-900 mt-14">
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Product</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Resources</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Enterprise</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Contact sales</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Login</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Language: English</a>
            </li>
            <li className="p-2 rounded hover:bg-white hover:text-navy-blue">
              <a href="#">Login</a>
            </li>

            <li className="py-2">
              <Button />
            </li>
          </ul>
        </div>
        <ul className="items-center hidden gap-5 lg:flex">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-dark">
            Product
            <FaAngleDown className="mt-2 text-xs cursor-pointer hover:text-blue-dark" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-dark">
            Solutions
            <FaAngleDown className="mt-2 text-xs cursor-pointer hover:text-blue-dark" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-dark">
            Resources
            <FaAngleDown className="mt-2 text-xs" />
          </li>
          <li className="cursor-pointer hover:text-blue-dark">Enterprise</li>
          <li className="cursor-pointer hover:text-blue-dark">Pricing</li>
        </ul>
        <ul className="items-center hidden gap-5 lg:flex">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-dark">
            <PiGlobe className="text-lg" /> EN
          </li>
          <li className="cursor-pointer hover:text-blue-dark">Contact Sales</li>
          <li className="cursor-pointer hover:text-blue-dark">Login</li>
          <Button />
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
