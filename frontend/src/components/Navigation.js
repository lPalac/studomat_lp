import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-evenly border-gray-100 my-3 py-3 border-b-2">
      <Link to="/dashboard" className="cursor-pointer">
        Dashboard
      </Link>
      <Link to="/courseslistsusers" className="cursor-pointer">
        Courses Lists Users
      </Link>
      <Link to="/courses" className="cursor-pointer">
        Courses
      </Link>
      <Link to="/students " className="cursor-pointer">
        Students
      </Link>
      <Link to="/" className=" cursor-pointer text-gray-400">
        Logout
      </Link>
    </div>
  );
};

export default Navigation;
