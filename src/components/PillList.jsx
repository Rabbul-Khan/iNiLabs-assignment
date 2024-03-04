import { useEffect, useState } from "react";

const Pill = ({ id, label, active, onClick }) => {
  return (
    <div
      className={`min-w-max cursor-pointer rounded-full border border-gray px-5 py-3 text-center text-navy-blue ${
        active ? "bg-[#F1F3FD] " : ""
      }`}
      onClick={() => onClick(id)}
    >
      {label}
    </div>
  );
};

const PillList = ({ pills }) => {
  const [activePill, setActivePill] = useState(pills[0].id);

  const handlePillClick = (id) => {
    setActivePill(id);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <Pill
          key={pill.id}
          id={pill.id}
          label={pill.label}
          active={activePill === pill.id}
          onClick={handlePillClick}
        />
      ))}
    </div>
  );
};

export default PillList;
