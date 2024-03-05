import Button from "./Button";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  const text = "The ways we work".split(" ");
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="background.png"
        alt=""
        width={1900}
        height={520}
        className="relative hidden h-auto max-w-full md:block "
      />
      <div className=" right-[25%] top-[30%] text-navy-blue md:absolute md:text-white lg:right-24 lg:top-[33%] lg:text-navy-blue 2xl:top-[37%]">
        <div className="flex flex-col items-center gap-5 p-5 rounded md:bg-navy-blue/70 lg:bg-transparent ">
          <h3 className="text-5xl font-bold text-center md:text-2xl lg:text-4xl xl:text-5xl">
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
          </h3>
          <p>How has our relationship with work changed?</p>
          <Button />
        </div>
      </div>
    </motion.div>
  );
};

export default CallToActionSection;
