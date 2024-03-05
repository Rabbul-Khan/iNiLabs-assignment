import { motion } from "framer-motion";

let variants = {};
const isMobile = window.innerWidth < 1300;
if (!isMobile) {
  variants = {
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

const TrustedBySection = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-lg text-navy-blue-light">Trusted by 45M+ users</div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 overflow-hidden 2xl:gap-20"
        variants={variants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <motion.img
          src="user-logo-5.png"
          className="my-5"
          variants={variants}
        />
        <motion.img
          src="user-logo-4.png"
          className="my-5"
          variants={variants}
        />
        <motion.img
          src="user-logo-3.png"
          className="my-5"
          variants={variants}
        />
        <motion.img
          src="user-logo-2.png"
          className="my-5"
          variants={variants}
        />
        <motion.img
          src="user-logo-1.png"
          className="my-5"
          variants={variants}
        />
      </motion.div>
    </motion.div>
  );
};

export default TrustedBySection;
