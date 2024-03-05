import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const FeatureOneDetailsSection = () => {
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
      className="flex flex-col gap-10 md:flex-row lg:gap-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="order-2 m-auto flex max-w-[30rem] flex-col justify-center gap-5 md:-order-1"
        variants={variants}
        whileInView="animate"
        initial="initialLeft"
        viewport={{ once: true }}
      >
        <h2 className="max-w-[40rem] text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          Work together, wherever you work
        </h2>
        <p>
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <a href="#" className="underline text-blue">
          Learn more
          <FaArrowRightLong className="inline ml-2 text-sm" />
        </a>
      </motion.div>
      <motion.img
        src="hybrid-work.png"
        alt=""
        width={600}
        height={520}
        className="order-1 w-3/5 h-auto max-w-full m-auto min-w-60 sm:min-w-96 md:order-2"
        variants={variants}
        whileInView="animate"
        initial="initialRight"
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default FeatureOneDetailsSection;
