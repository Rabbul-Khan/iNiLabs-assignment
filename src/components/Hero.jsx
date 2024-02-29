import Button from "./Button";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mx-14 my-14 flex items-center justify-center gap-20">
      <div className="flex max-w-[450px] flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold text-text-primary">
            Take ideas from better to best
          </h1>
          <h2 className="text-lg text-text-primary/60">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="rounded-full border border-[#9B99AF] px-5 py-3 placeholder:text-[#5F5C80] focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-primary "
            placeholder="Enter your work email"
          />
          <Button />
          <p className="text-sm text-text-primary/40">
            Collaborate with your team within minutes
          </p>
        </div>

        <div className="flex max-w-fit gap-5 rounded-lg bg-[#F5F5F7] p-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[#FF9D48]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p className="text-xs text-text-primary">Based on 5149+ reviews</p>
          </div>

          <div className="flex gap-4">
            <img src="review-icon-1.svg" alt="G squared logo" />
            <img src="review-icon-2.svg" alt="GetApp logo" />
            <img src="review-icon-3.svg" alt="Capterra logo" />
          </div>
        </div>
      </div>
      <div>
        <img
          src="hero-image.png"
          alt="Functionality of Miro"
          width={640}
          height={460}
        />
      </div>
    </div>
  );
};

export default Hero;
