import Button from "./Button";

const CallToActionSection = () => {
  return (
    <div className="relative">
      <img
        src="background.png"
        alt=""
        width={1900}
        height={520}
        className="relative hidden h-auto max-w-full md:block "
      />
      <div className=" right-[25%] top-[30%] text-navy-blue md:absolute md:text-white lg:right-24 lg:top-[33%] lg:text-navy-blue 2xl:top-[37%]">
        <div className="flex flex-col items-center gap-5 rounded p-5 md:bg-navy-blue/70 lg:bg-transparent ">
          <h3 className="text-center text-4xl font-bold md:text-2xl">
            The ways we work
          </h3>
          <p>How has our relationship with work changed?</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
