import React from "react";
import Project from "./common/projects";

const Portfolio = () => {
  const portfolio = [
    {
      name: "Coding Pal",
      desc:
        "A simple app to view and manage online coding competitions of popular platforms. The App is easy to use and helps in not missing out any competition. Get details of Live and Upcoming Contests from popular platforms like CodeChef,CodeForces, HackerEarth, HackerRank, LeetCode, Topcoder, Kaggle, Google Competitions, Project Euler, AtCoder. Add Contests to your Google Calendar or directly visit the page.",
      img: "https://media.giphy.com/media/XHuwjosEv6YSDi9zBo/giphy.gif",
      stack: ['#Flutter', '#Dart'],
      url:'https://play.google.com/store/apps/details?id=com.consistencyapps.CodingPal&hl=en_IN'
    },
  ];

  return (
    <div>
      <div className="font-bold text-3xl py-10 border-b border-t  border-gray-300 mt-6">
        Portfolio
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {portfolio.map(x=><Project e={x}/>)}
      </div>
    </div>
  );
};

export default Portfolio;
