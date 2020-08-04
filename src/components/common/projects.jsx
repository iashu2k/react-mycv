import React from "react";

const Project = ({ e }) => {
  return (
    <a
      href={e.url}
      target="blank"
      className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer mx-2 flex items-center"
    >
      <div className="flex justify-center items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer text-justify">
        
          <img className="mx-auto" src={e.img} alt={e.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{e.name}</div>
            <p className="text-gray-700 text-sm">{e.desc}</p>
          </div>
          <div className="px-6 py-4">
            {e.stack.map((x) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
