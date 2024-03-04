import { FaArrowRightLong } from "react-icons/fa6";

const FeatureOneDetailsSection = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row lg:gap-40">
      <div className="order-2 m-auto flex max-w-[30rem] flex-col justify-center gap-5 md:-order-1">
        <h2 className="max-w-[40rem] text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          Work together, wherever you work
        </h2>
        <p>
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <a href="#" className="text-blue underline">
          Learn more
          <FaArrowRightLong className="ml-2 inline text-sm" />
        </a>
      </div>
      <img
        src="hybrid-work.png"
        alt=""
        width={600}
        height={520}
        className="order-1 m-auto h-auto w-3/5 min-w-60 max-w-full sm:min-w-96 md:order-2"
      />
    </div>
  );
};

export default FeatureOneDetailsSection;
