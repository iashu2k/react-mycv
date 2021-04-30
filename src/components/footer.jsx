import React from "react";
import { FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:mt-40 mt-10 pt-2 border-t border-gray-400">
      <div className="flex lg:justify-start justify-center">
        <a
          href={"https://twitter.com/iashu_mishra"}
          target="blank"
          className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer mx-2 flex items-center"
        >
          <FaTwitter className="mr-1" />
          Twitter
        </a>
        <a
          href={"https://www.linkedin.com/in/iashu2k/"}
          target="blank"
          className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer mx-2 flex items-center"
        >
          <FaLinkedin className="mr-1" />
          Linkedin
        </a>
        <a
          href={"https://github.com/iashu2k"}
          target="blank"
          className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer mx-2 flex items-center"
        >
          <FaGithub className="mr-1" />
          GitHub
        </a>
        
      </div>
      <div className="mx-2 mt-1 text-center text-xs font-normal text-gray-600">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
