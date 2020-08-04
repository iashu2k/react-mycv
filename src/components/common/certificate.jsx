import React from "react";

const Certificate = ({ e }) => {
  return (
    <a
      href={e.url}
      target="blank"
      className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer mx-2 flex items-center"
    >
      <div className="grid grid-cols-4 gap-4 border border-gray-300 p-4 rounded-lg hover:shadow-xl cursor-pointer">
        <div className="col-span-1">
          <img src={e.image} alt="Udemy" />
        </div>
        <div className="col-span-3">
          <h1 className="font-semibold text-normal text-sm">{e.name}</h1>
          <p className="mt-2 text-xs text-gray-600 font-medium"></p>
          <p className="mt-2 text-xs text-gray-600 font-medium">{e.issue}</p>
        </div>
      </div>
    </a>
  );
};

export default Certificate;
