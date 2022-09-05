import React from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
const Subject = () => {
  return (
    <div className=" mt-5">
      <Navigation />
      <h1 className="text-2xl ml-4">Courses List</h1>
      <div className="border border-gray-400 rounded  my-4">
        <div className="text-green-600 my-4 ml-4 cursor-pointer">
          <Link to="/newcorses">New Courses</Link>
        </div>
        <div className="border border-gray-400 rounded py-1">
          <a className="px-4 " link="#">
            Linearna algebra (SIT001)
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
        <div className="border border-gray-400 rounded py-1">
          <a className="px-4 py-2" link="#">
            Fizika (SIT002)
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
        <div className="border border-gray-400 rounded py-1">
          <a className="px-4 py-2" link="#">
            Osnove Elektrotehnike (SIT003)
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
        <div className="border border-gray-400 rounded py-1">
          <a className="px-4 py-2" link="#">
            Digitalna i mikroprocesorska tehinka (SIT004)
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
      </div>
    </div>
  );
};

export default Subject;
