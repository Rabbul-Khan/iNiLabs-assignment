import ButtonOutline from "./ButtonOutline";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
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
  const text = "Loved by the world's best teams".split(" ");
  return (
    <motion.div
      className="flex flex-col items-center gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-extrabold text-center text-navy-blue">
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
      <ButtonOutline />

      <motion.div
        className="grid grid-cols-1 mt-10 mb-10 md:mb-32 md:grid-cols-3 md:gap-20"
        variants={variants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        {testimonials.map((t) => {
          return (
            <Testimonial
              logoImg={t.logoImg}
              testimonialText={t.testimonialText}
              customerImg={t.customerImg}
              customerName={t.customerName}
              customerPosition={t.customerPosition}
              key={t.customerId}
              variants={variants}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const testimonials = [
  {
    logoImg: "vmware.png",
    testimonialText:
      "When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity wouldsuffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
    customerImg: "customer-rox.png",
    customerName: "Roxanne Mustafa",
    customerPosition: "Design team lead at VMware",
    customerId: 1,
  },
  {
    logoImg: "docuSign.png",
    testimonialText:
      "Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
    customerImg: "customer-jane.png",
    customerName: "Jane Ashley",
    customerPosition: "Head of design at DocuSign",
    customerId: 2,
  },
  {
    logoImg: "frog.png",
    testimonialText:
      "As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.",
    customerImg: "customer-laura.png",
    customerName: "Laura Baird",
    customerPosition: "Associate design director at Frog",
    customerId: 3,
  },
];

export default TestimonialsSection;
