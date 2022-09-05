import React from "react";
import Navigation from "./Navigation.js";

const Dashboard = () => {
  return (
    <div className=" mt -5">
      <Navigation />

      <div className="border border-gray-400 rounded my-4  ">
        <div className=" my-4 ml-4 flex ">
          <h1 className=" text-2xl w-7/12  font-semibold">Predmeti:</h1>
          <h1 className=" text-2xl font-semibold ml-2">
            Upisi: (usera@oss.hr)
          </h1>
        </div>

        <div className=" flex  ">
          <div className=" w-7/12 mr-4  ">
            <div className="border border-gray-400 rounded py-1">
              <a className="px-4 py-2" link="#">
                Linearna algebra (SIT001)
              </a>
              <a className="text-blue-500 pr-4  cursor-pointer">Add</a>
            </div>
            <div className="border border-gray-400 rounded py-1">
              <a className="px-4 py-2" link="#">
                Linearna algebra (SIT001)
              </a>
              <a className="text-blue-500 pr-4 cursor-pointer ">Add</a>
            </div>
            <div className="border border-gray-400 rounded py-1">
              <a className="px-4 py-2" link="#">
                Linearna algebra (SIT001)
              </a>
              <a className="text-blue-500 pr-4  cursor-pointer ">Add</a>
            </div>
          </div>
          <div className="  w-2/5 ">
            <h6 className=" text-lg font-semibold ">Semestar 1:</h6>
            <div className="border border-gray-400 px-4 py-1 rounded">
              <span>Engleski jezik</span>
              <a className="text-green-500 px-4  cursor-pointer ">Done</a>
            </div>
            <div className="border border-gray-400 px-4 py-1 rounded">
              <span>Fizika</span>
              <a className="text-green-600 px-4  cursor-pointer ">
                Mark as complete
              </a>
              <a className="text-red-500 cursor-pointer">Delete</a>
            </div>
            <h6 className=" text-lg font-semibold pt-3">Semestar 2:</h6>
            <h6 className=" text-lg font-semibold pt-3">Semestar 3:</h6>
            <div className="border border-gray-400 px-4 py-1 rounded">
              <span>Uvod u programiranje</span>

              <a className="text-green-600 px-4  cursor-pointer ">
                Mark as complete
              </a>
              <a className="text-red-500 cursor-pointer">Delete</a>
            </div>
            <div className="border border-gray-400 px-4 py-1 rounded">
              <span>Struktura podataka</span>
              <a className="text-green-600 px-4  cursor-pointer ">
                Mark as complete
              </a>
              <a className="text-red-500 cursor-pointer">Delete</a>
            </div>
            <h6 className=" text-lg font-semibold  pt-3">Semestar 4:</h6>
            <div className="border border-gray-400 px-4 py-1 rounded">
              <span>Uvod u programiranje</span>

              <a className="text-green-600 px-4  cursor-pointer ">
                Mark as complete
              </a>
              <a className="text-red-500 cursor-pointer">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
