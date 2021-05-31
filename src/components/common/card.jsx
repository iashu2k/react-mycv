import React from "react";

const Card = ({ e }) => {
  return (
    <div className="shadow-md my-4 lg:px-5 px-2 py-2">
      <div class="border border-blue-500 inline-block text-xs rounded-full px-2 text-center text-gray-600 font-medium my-2">
        {e.year}
      </div>
      <div className="text-xs text-gray-600 font-medium">{e.institute}</div>
      <h1 className="font-semibold text-sm">{e.degree}</h1>
      <p className="mt-2 text-xs text-gray-600 font-medium">{e.branch}</p>
      {e.year === "Dec 2020 - Jan 2021" && (
        <a
          href="https://drive.google.com/file/d/1kQR8U7yOaUuzJKhn-aDu5zc8CI21iglW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p className="mt-2 text-xs text-blue-600 font-medium">View Certificate</p>
          
        </a>
      )}
    </div>
  );
};

export default Card;
