import PillList from "./PillList";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const pills = [
  { id: 1, label: "UI & Design" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Product Management" },
  { id: 4, label: "Engineering" },
  { id: 5, label: "Consultants" },
  { id: 6, label: "Agile Coaches" },
  { id: 7, label: "Sales" },
];

const FeatureFourDetailsSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-5xl font-extrabold text-navy-blue">
        Built for the all kinds of teams
      </h2>
      <PillList pills={pills} />
      <div className="flex flex-col gap-5 p-5 text-lg lg:flex-row">
        <div className="lg:order-0 order-1 m-auto flex flex-col justify-center gap-5 lg:gap-16">
          <div className="flex flex-col gap-2 text-navy-blue-light">
            <ul>
              <li className="flex items-center">
                <FaCheck className="mr-3 text-xs text-navy-blue" /> Build low-fi
                wireframes
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-3 text-xs text-navy-blue " /> Involve
                stakeholders in the design process
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-3 text-xs text-navy-blue " /> Run
                Engaging design workshops
              </li>
            </ul>
            <a href="#" className="ml-6 text-blue underline">
              Learn more
              <FaArrowRightLong className="ml-2 inline text-sm" />
            </a>
          </div>
          <div className="m-auto lg:m-0">
            <div className="mb-2 text-navy-blue-light">
              Integrate your favorite tools
            </div>
            <img src="tools.svg" alt="Logos of tools" />
          </div>
        </div>
        <img
          src="ux.jpg"
          alt=""
          width={700}
          height={520}
          className="order-0 m-auto h-auto w-full max-w-full md:w-4/5 lg:order-1 lg:ml-auto lg:w-3/5"
        />
      </div>
    </div>
  );
};

export default FeatureFourDetailsSection;
