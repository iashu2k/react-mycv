import React from "react";

const Card = ({e}) => {
  
  return (
    <div className="shadow-md m-2 pt-10 lg:px-10 px-2 pb-2 relative">
      <h1 className="font-semibold text-sm">{e.degree}</h1>
      <p className="mt-2 text-xs text-gray-600 font-medium">
        {e.branch}
      </p>
      <div className="absolute left-0 top-0 text-base text-gray-600 font-medium flex justify-start items-center">
        <div className="border-2 border-blue-600 rounded-full py-2 px-4 transform scale-50">
          {e.year}
        </div>
        <div className="text-xs">{e.institute}</div>
      </div>
    </div>
  );
};

export default Card;
