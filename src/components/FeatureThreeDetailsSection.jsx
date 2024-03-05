import PillList from "./PillList";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const pills = [
  { id: 1, label: "Brainstorming" },
  { id: 2, label: "Diagramming" },
  { id: 3, label: "Meetings and Workshops" },
  { id: 4, label: "Scrum Events" },
  { id: 5, label: "Mapping" },
  { id: 6, label: "Research and Design" },
  { id: 7, label: "Strategic Planning" },
];

const FeatureThreeDetailsSection = () => {
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
  const text = "Built for the way you work".split(" ");
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
        initial="initialLeft"
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center order-1 w-full gap-5 m-auto lg:order-0 lg:w-1/5 lg:gap-16">
          <div className="text-2xl text-navy-blue">Brainstorming</div>
          <div className="flex flex-col gap-2 text-navy-blue-light">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
            <a href="#" className="underline text-blue">
              Learn more
              <FaArrowRightLong className="inline ml-2 text-sm" />
            </a>
          </div>
        </div>
        <img
          src="brainstorm.png"
          alt=""
          width={700}
          height={520}
          className="w-full h-auto max-w-full m-auto order-0 md:w-4/5 lg:order-1 lg:ml-auto lg:w-3/5"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureThreeDetailsSection;
