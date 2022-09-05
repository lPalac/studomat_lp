import React from "react";
import Navigation from "./Navigation";
//TODO nastavit od 10:44 3 vid i napunit forme da se spajaju sa backendom
//ostalo mi je jos backend 3 tablica spojit
const AddUser = () => {
  return (
    <div>
      <Navigation />
      <form className="ml-6" method="post" action="user">
        <h1 className="text-3xl font-bold mt-7 ">Novi Student</h1>
        <div className="">
          <h6 className=" mt-6">Ime</h6>
          <input
            type="text"
            className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            placeholder="Ime"
          />
        </div>
        <div>
          <h6 className=" mt-6">Email</h6>
          <input
            type="text"
            placeholder="Email"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <h6 className=" mt-6">Password</h6>
          <input
            type="password : text"
            placeholder="Password"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <h6 className=" mt-6">Gender</h6>
          <select
            name="gender"
            id="gender"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Select a gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Don't wish to specify</option>
          </select>
        </div>
        <div>
          <h6 className=" mt-6">Role</h6>
          <select
            name="role"
            id="role"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Select a role
            </option>
            <option value="mentor">Mentor</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          <h6 className=" mt-6">Status</h6>
          <select
            name="status"
            id="status"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Select a status
            </option>
            <option value="redovni">Redovni</option>
            <option value="izvanredni">Izvanredni</option>
            <option value="none">none</option>
          </select>
        </div>
        <button className=" mt-6 bg-green-400 text-white w-24 p-2 rounded hover:bg-green-800 ">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUser;
