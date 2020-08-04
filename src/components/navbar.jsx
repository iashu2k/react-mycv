import React from "react";
import Aart from "../images/A.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between navbar-expand-lg mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex justify-start items-center text-lg">
              <img src={Aart} alt="A art" className="m-1 h-10 w-10" />
              <h1 className="font-bold">Ashutosh</h1>
              <h1 className="m-1">Mishra</h1>
            </div>
            <button
              className="text-blue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gray-100 lg:bg-white lg:p-0 pl-2" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:text-xs text-sm text-gray-700">
              <li>
                <NavLink
                  exact
                  className="lg:p-4 py-3 px-0 block border-transparent"
                  activeClassName="lg:border-b-2 lg:border-l-0 border-b-0 border-l-2 border-blue-400"
                  to="/about"
                >
                  <div className="pl-2 lg:pl-0" onClick={() => setNavbarOpen(!navbarOpen)}>About Me</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="lg:p-4 py-3 px-0 block border-transparent"
                  activeClassName="lg:border-b-2 lg:border-l-0 border-b-0 border-l-2 border-blue-400"
                  to="/resume"
                >
                  <div className="pl-2 lg:pl-0" onClick={() => setNavbarOpen(!navbarOpen)}>Resume</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="lg:p-4 py-3 px-0 block border-transparent"
                  activeClassName="lg:border-b-2 lg:border-l-0 border-b-0 border-l-2 border-blue-400"
                  to="/portfolio"
                >
                  <div className="pl-2 lg:pl-0" onClick={() => setNavbarOpen(!navbarOpen)}>Portfolio</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="lg:p-4 py-3 px-0 block border-transparent"
                  activeClassName="lg:border-b-2 lg:border-l-0 border-b-0 border-l-2 border-blue-400"
                  to="/blogs"
                >
                  <div className="pl-2 lg:pl-0" onClick={() => setNavbarOpen(!navbarOpen)}>Blogs</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="lg:p-4 py-3 px-0 block border-transparent"
                  activeClassName="lg:border-b-2 lg:border-l-0 border-b-0 border-l-2 border-blue-400"
                  to="/contact"
                >
                  <div className="pl-2 lg:pl-0" onClick={() => setNavbarOpen(!navbarOpen)}>Contact</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
