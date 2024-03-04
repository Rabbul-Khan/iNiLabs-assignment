import ButtonOutline from "./ButtonOutline";
import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-center text-5xl font-extrabold text-navy-blue">
        Loved by the world's best teams
      </h2>
      <ButtonOutline />

      <div className="mb-10 mt-10 grid grid-cols-1 md:mb-32 md:grid-cols-3 md:gap-20">
        {testimonials.map((t) => {
          return (
            <Testimonial
              logoImg={t.logoImg}
              testimonialText={t.testimonialText}
              customerImg={t.customerImg}
              customerName={t.customerName}
              customerPosition={t.customerPosition}
              key={t.customerId}
            />
          );
        })}
      </div>
    </div>
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
