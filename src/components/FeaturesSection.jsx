import Button from "./Button";
import { motion } from "framer-motion";

const gridVariants = {};

const FeaturesSection = () => {
  let gridVariants = {};
  const isMobile = window.innerWidth < 1300;
  if (!isMobile) {
    gridVariants = {
      initial: {
        x: 1000,
      },
      animate: {
        x: 0,
        transition: {
          duration: 0.5,
          staggerChildren: 0.2,
        },
      },
    };
  }
  const text = "Collaborate without constraints".split(" ");
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="relative m-auto max-w-[40rem] pt-20 text-center text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: i / 7,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
          <img src="banner.svg" alt="" className="absolute top-0 right-10 " />
        </h2>
      </div>
      <motion.div
        className="flex flex-col overflow-hidden md:flex-row"
        variants={gridVariants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <motion.div className="px-5 py-5 md:p-10" variants={gridVariants}>
          <h3 className="text-lg font-bold md:text-2xl">Free forever</h3>
          <p className="text-navy-blue-light">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <a href="#" className="text-blue">
              pricing plans
            </a>{" "}
            for more features.
          </p>
        </motion.div>
        <motion.div className="px-5 py-5 md:p-10" variants={gridVariants}>
          <h3 className="text-lg font-bold md:text-2xl">Easy integrations</h3>
          <p className="text-navy-blue-light">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <a href="#" className="text-blue">
              Marketplace
            </a>
            .
          </p>
        </motion.div>
        <motion.div className="px-5 py-5 md:p-10" variants={gridVariants}>
          <h3 className="text-lg font-bold md:text-2xl">Security first</h3>
          <p className="text-navy-blue-light">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <a href="#" className="text-blue">
              Trust Center
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
      <div className="mx-auto">
        <Button />
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
