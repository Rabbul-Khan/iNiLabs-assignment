import { motion } from "framer-motion";

const Testimonial = ({
  logoImg,
  testimonialText,
  customerImg,
  customerName,
  customerPosition,
  variants,
}) => {
  return (
    <motion.div
      className="grid grid-rows-[50px_1fr_70px] gap-5 text-navy-blue-light md:gap-10"
      variants={variants}
    >
      <img
        src={logoImg}
        alt=""
        height="80"
        width="170"
        className="h-auto max-w-full "
      />
      <p className="text-lg ">{testimonialText}</p>
      <div className="flex gap-5">
        <img
          src={customerImg}
          alt=""
          height="40"
          width="40"
          className="h-auto max-w-full max-h-10 "
        />
        <div className="text-sm ">
          <p>{customerName}</p>
          <p>{customerPosition}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
