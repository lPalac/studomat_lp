import React from "react";
import Navigation from "./Navigation.js";
const UserList = () => {
  //stavit content usera getAllUser
  return (
    <div className=" mt-5">
      <Navigation />
      <h1 className="text-2xl ml-4">Student List</h1>
      <div className="border border-gray-400 rounded  my-4">
        <div className="border border-gray-400 rounded">
          <a className="px-4 py-2" link="#">
            Luka Palac
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
        <div className="border border-gray-400 rounded">
          <a className="px-4 py-2" link="#">
            Marko Markic
          </a>
          <a className="text-blue-500 pr-4">Edit</a>
          <a className="text-red-500">Delete</a>
        </div>
      </div>
    </div>
  );
};

export default UserList;
