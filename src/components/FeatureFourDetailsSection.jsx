import PillList from "./PillList";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

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
  const text = "Built for all kinds of teams".split(" ");
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-extrabold text-navy-blue">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </h2>
      <PillList pills={pills} />
      <motion.div
        className="flex flex-col gap-5 p-5 text-lg lg:flex-row"
        variants={variants}
        whileInView="animate"
        initial="initialRight"
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center order-1 gap-5 m-auto lg:order-0 lg:gap-16">
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
            <a href="#" className="ml-6 underline text-blue">
              Learn more
              <FaArrowRightLong className="inline ml-2 text-sm" />
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
          className="w-full h-auto max-w-full m-auto order-0 md:w-4/5 lg:order-1 lg:ml-auto lg:w-3/5"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureFourDetailsSection;
