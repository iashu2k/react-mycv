import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="grid grid-col-1 lg:grid-cols-2 lg:mt-16 mt-1 lg:px-10 px-2">
        <div className="flex justify-center lg:mr-4 p-5">
          <div className="border-8 border-gray-100 rounded-full shadow-lg">
            <img
              className="w-min-width h-auto"
              src="https://i.ibb.co/LNxLznW/profile.png"
              alt="Profile-pic"
            />
           
          </div>
        </div>
        <div className="flex flex-col justify-start lg:justify-center lg:items-start items-center">
          <p className="text-sm text-gray-500">Web Developer</p>
          <h1 className="lg:text-4xl text-3xl font-extrabold">
            Ashutosh Mishra
          </h1>
          <p className="text-xs text-justify text-gray-600">
            I am a 3rd year CSE Undergrad Student. I am deeply passionate about
            building Web Apps (fluent in MERN Stack) and Flutter Apps from
            scratch. I believe I'm a problem solver & a team player, looking forward to new
            opportunities.
          </p>
          <div className="mt-8 flex text-xs">
            <a href="https://drive.google.com/file/d/1yaGC3A1_RudanqpPxEXSAsD-Kz86Wml3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="bg-transparent text-center w-32 shadow-lg transition duration-500 ease-in-out hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full cursor-pointer">
                Download CV
              </div>
            </a>
            <Link to="/contact">
              <div className="bg-transparent text-center ml-2 w-32 shadow-lg transition duration-500 ease-in-out hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full cursor-pointer">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
