import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex py-3 my-3 border-b-2 border-gray-100 justify-evenly">
      <Link to="/dashboard" className="cursor-pointer">
        Dashboard
      </Link>
      <Link to="/userswithcourses" className="cursor-pointer">
        UsersWithCourses
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
      <Link to="/" className="text-gray-400 cursor-pointer ">
        Logout
      </Link>
    </div>
  );
};

export default Navigation;
