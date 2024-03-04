import Button from "./Button";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="relative m-auto max-w-[40rem] pt-20 text-center text-2xl font-extrabold text-navy-blue md:text-3xl lg:text-5xl">
          Collaborate without constraints{" "}
          <img src="banner.svg" alt="" className="absolute right-10 top-0 " />
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="px-5 py-5 md:p-10">
          <h3 className="text-lg font-bold md:text-2xl">Free forever</h3>
          <p className="text-navy-blue-light">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <a href="#" className="text-blue">
              pricing plans
            </a>{" "}
            for more features.
          </p>
        </div>
        <div className="px-5 py-5 md:p-10">
          <h3 className="text-lg font-bold md:text-2xl">Easy integrations</h3>
          <p className="text-navy-blue-light">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <a href="#" className="text-blue">
              Marketplace
            </a>
            .
          </p>
        </div>
        <div className="px-5 py-5 md:p-10">
          <h3 className="text-lg font-bold md:text-2xl">Security first</h3>
          <p className="text-navy-blue-light">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <a href="#" className="text-blue">
              Trust Center
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <Button />
      </div>
    </div>
  );
};

export default FeaturesSection;
