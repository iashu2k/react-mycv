import React from "react";

const Skill = ({skills}) => {
  return (
    <div className="mt-2 px-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xs">{skills.name}</h1>
        <p className="text-xs text-gray-600 font-medium">{skills.percentage}</p>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: skills.percentage }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
