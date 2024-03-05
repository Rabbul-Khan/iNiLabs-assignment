import { useState } from "react";
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

const Pill = ({ id, label, active, onClick }) => {
  return (
    <motion.div
      className={`min-w-max cursor-pointer rounded-full border border-gray px-5 py-3 text-center text-navy-blue hover:bg-[#f6f8ff] ${
        active ? "bg-[#e4e9ff] " : ""
      }`}
      onClick={() => onClick(id)}
      variants={variants}
    >
      {label}
    </motion.div>
  );
};

const PillList = ({ pills }) => {
  const [activePill, setActivePill] = useState(pills[0].id);

  const handlePillClick = (id) => {
    setActivePill(id);
  };

  return (
    <motion.div
      className="flex flex-wrap gap-2 "
      variants={variants}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true }}
    >
      {pills.map((pill) => (
        <Pill
          key={pill.id}
          id={pill.id}
          label={pill.label}
          active={activePill === pill.id}
          onClick={handlePillClick}
        />
      ))}
    </motion.div>
  );
};

export default PillList;
