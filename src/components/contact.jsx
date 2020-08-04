import React from "react";
import { FaAt, FaMapMarker } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="flex justify-start mt-4 p-4 border border-gray-300 rounded-full">
        <FaMapMarker className="mr-4 transform text-gray-500" />
        <h1 className="text-sm text-blue-600">Banglore, Karnataka, India</h1>
      </div>
      <div className="flex justify-start mt-4 py-4 px-8 border border-gray-300 rounded-full">
        <FaAt className="mr-4 transform text-gray-500" />
        <h1 className="text-sm text-blue-600">iashu2k@gmail.com</h1>
      </div>
      
    </div>
  );
};

export default Contact;
