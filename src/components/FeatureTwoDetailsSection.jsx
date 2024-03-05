import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const FeatureTwoDetailsSection = () => {
  let variants = {};
  const isMobile = window.innerWidth < 1300;
  if (!isMobile) {
    variants = {
      initialRight: {
        x: 500,
      },
      initialLeft: {
        x: -500,
      },
      animate: {
        x: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
  }
  return (
    <motion.div
      className="gap-20 md:flex lg:gap-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="integrations.png"
        alt=""
        width={600}
        height={520}
        className="w-3/5 h-auto max-w-full m-auto min-w-60 sm:min-w-96"
        variants={variants}
        whileInView="animate"
        initial="initialLeft"
        viewport={{ once: true }}
      />
      <motion.div
        className="m-auto flex max-w-[30rem] flex-col justify-center gap-5"
        variants={variants}
        whileInView="animate"
        initial="initialRight"
        viewport={{ once: true }}
      >
        <h2 className="max-w-[40rem] text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          Connect your tools, close your tabs
        </h2>
        <p>
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <a href="#" className="underline text-blue">
          Learn more
          <FaArrowRightLong className="inline ml-2 text-sm" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default FeatureTwoDetailsSection;
