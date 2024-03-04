import { FaArrowRightLong } from "react-icons/fa6";

const FeatureTwoDetailsSection = () => {
  return (
    <div className="gap-20 md:flex lg:gap-40">
      <img
        src="integrations.png"
        alt=""
        width={600}
        height={520}
        className="m-auto h-auto w-3/5 min-w-60 max-w-full sm:min-w-96"
      />
      <div className="m-auto flex max-w-[30rem] flex-col justify-center gap-5">
        <h2 className="max-w-[40rem] text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          Connect your tools, close your tabs
        </h2>
        <p>
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <a href="#" className="text-blue underline">
          Learn more
          <FaArrowRightLong className="ml-2 inline text-sm" />
        </a>
      </div>
    </div>
  );
};

export default FeatureTwoDetailsSection;
