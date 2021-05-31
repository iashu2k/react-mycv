import React from "react";
import Project from "./common/projects";

const Portfolio = () => {
  const portfolio = [
    {
      name: "Buddy Chat",
      desc: "A chatting app made with socket.io, user can log in with name and room id and chat with anyone sharing the same room id. Emojis supported.",
      img: "https://i.ibb.co/LQrPnTZ/buddychat.jpg",
      stack: ["#React", "#Socket.io", "#Nodejs"],
      url: "https://buddychat.netlify.app/",
    },
    {
      name: "Ai News App",
      desc: "A voice-controlled ai news app which displays news by category, terms and sources. The ai can also read out news",
      img: "https://i.ibb.co/JBwndT2/Screenshot-2020-10-27-Ai-News.jpg",
      stack: ["#React", "#Alan Ai"],
      url: "https://anewsai.netlify.app/",
    },
    {
      name: "Mood Chat",
      desc: "A video conferencing app to communicate peer to peer with friends​",
      img: "https://i.ibb.co/PW9vrqH/Screenshot-2021-04-30-MOOD-CHAT.png",
      stack: ["#React", "#Socket.io", "#Peers", "#Nodejs"],
      url: "https://moodchat.netlify.app/",
    },
    {
      name: "WeatherX",
      desc: "A weather forecast app which shows the current weather of an area with daily and hourly forecast wrt temp, pressure, humidity etc.​",
      img: "https://i.ibb.co/0ZvRT11/Screenshot-2020-10-27-Weather-X.jpg",
      stack: ["#React", "#Recharts"],
      url: "https://weatherxx.netlify.app/",
    },
    {
      name: "TellMeWeather",
      desc: "A simple weather forecast PWA shows the temp of a city​",
      img: "https://i.ibb.co/L8kVrZ7/Screenshot-2021-05-31-Weather-App.png",
      stack: ["#React", "#PWA"],
      url: "https://tellmeweather.netlify.app/",
    },
    {
      name: "Coding Pal",
      desc: "A simple app to view and manage online coding competitions of popular platforms. The App is easy to use and helps in not missing out any competition. Get details of Live and Upcoming Contests from popular platforms like CodeChef,CodeForces, HackerEarth, HackerRank, LeetCode, Topcoder, Kaggle, Google Competitions, Project Euler, AtCoder. Add Contests to your Google Calendar or directly visit the page.",
      img: "https://media.giphy.com/media/XHuwjosEv6YSDi9zBo/giphy.gif",
      stack: ["#Flutter", "#Dart"],
      url: "https://play.google.com/store/apps/details?id=com.consistencyapps.CodingPal&hl=en_IN",
    },
  ];

  return (
    <div>
      <div className="font-bold text-3xl py-10 border-b border-t  border-gray-300 mt-6">
        Portfolio
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10 container mx-auto">
        {portfolio.map((x) => (
          <Project e={x} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
