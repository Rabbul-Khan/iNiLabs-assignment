import PillList from "./PillList";
import { FaArrowRightLong } from "react-icons/fa6";

const pills = [
  { id: 1, label: "Brainstorming" },
  { id: 2, label: "Diagramming" },
  { id: 3, label: "Meetings and Workshops" },
  { id: 4, label: "Scrum Events" },
  { id: 5, label: "Mapping" },
  { id: 6, label: "Research and Design" },
  { id: 7, label: "Strategic Planning" },
];

const FeatureThreeDetailsSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-5xl font-extrabold text-navy-blue">
        Built for the way you work
      </h2>
      <PillList pills={pills} />
      <div className="flex flex-col gap-5 p-5 text-lg lg:flex-row">
        <div className="lg:order-0 order-1 m-auto flex w-full flex-col justify-center gap-5 lg:w-1/5 lg:gap-16">
          <div className="text-2xl text-navy-blue">Brainstorming</div>
          <div className="flex flex-col gap-2 text-navy-blue-light">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
            <a href="#" className="text-blue underline">
              Learn more
              <FaArrowRightLong className="ml-2 inline text-sm" />
            </a>
          </div>
        </div>
        <img
          src="brainstorm.png"
          alt=""
          width={700}
          height={520}
          className="order-0 m-auto h-auto w-full max-w-full md:w-4/5 lg:order-1 lg:ml-auto lg:w-3/5"
        />
      </div>
    </div>
  );
};

export default FeatureThreeDetailsSection;
