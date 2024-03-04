import Button from "./Button";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-20">
      <div className="order-2 flex max-w-[450px] flex-col gap-10 md:order-1 md:w-2/5">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-navy-blue xl:text-5xl">
            Take ideas from better to best
          </h1>
          <h2 className="text-lg text-[#05003872]">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="focus-visible:outline-blue-primary rounded-full border border-[#9B99AF] px-5 py-3 placeholder:text-[#5F5C80] focus-visible:outline focus-visible:outline-1 "
            placeholder="Enter your work email"
          />
          <Button />
          <p className="text-sm text-[#05003840]">
            Collaborate with your team within minutes
          </p>
        </div>

        <div className="flex min-w-[340px] max-w-fit gap-5 rounded-lg bg-[#F5F5F7] p-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-gold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p className="text-xs text-navy-blue">Based on 5149+ reviews</p>
          </div>

          <div className="flex gap-4">
            <img src="review-icon-1.svg" alt="G squared logo" />
            <img src="review-icon-2.svg" alt="GetApp logo" />
            <img src="review-icon-3.svg" alt="Capterra logo" />
          </div>
        </div>
      </div>

      <img
        src="hero-image.png"
        alt="Functionality of Miro"
        width={800}
        height={620}
        className="order-1 m-auto h-auto min-w-60 max-w-full sm:min-w-96 md:order-2 md:w-3/5"
      />
    </div>
  );
};

export default HeroSection;
