import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobe } from 'react-icons/pi';
import Button from './components/Button';

const Header = () => {
  return (
    <header className="p-6 flex gap-5 items-center text-text-primary border-b border-b-gray-200">
      <img
        src="miro-logo.svg"
        alt="Miro logo"
        height="75"
        width="75"
        className="h-auto max-w-full"
      />
      <nav className="flex justify-between w-full items-center">
        <ul className="flex gap-5 items-center">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-dark">
            Product
            <FaAngleDown className="text-xs  mt-2 cursor-pointer" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            Solutions
            <FaAngleDown className="text-xs  mt-2 cursor-pointer" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            Resources
            <FaAngleDown className="text-xs  mt-2" />
          </li>
          <li className="cursor-pointer">Enterprise</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
        <ul className="flex gap-5 items-center ">
          <li className="flex gap-2 items-center cursor-pointer">
            <PiGlobe className="text-lg" /> EN
          </li>
          <li className="cursor-pointer">Contact Sales</li>
          <li className="cursor-pointer">Login</li>
          <Button />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
