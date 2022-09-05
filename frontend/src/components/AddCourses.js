import React from "react";
import Navigation from "./Navigation";

const AddCourses = () => {
  return (
    <div>
      <Navigation />
      <div className="ml-6">
        <h1 className="text-3xl font-bold mt-7 ">Novi Predmet</h1>
        <div className="">
          <h6 className=" mt-6">Ime Predmeta</h6>
          <input
            type="text"
            className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            placeholder="Ime"
          />
        </div>
        <div>
          <h6 className=" mt-6">Kod</h6>
          <input
            type="text"
            placeholder="Kod"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <h6 className=" mt-6">Program</h6>
          <input
            type="text"
            placeholder="Program"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <h6 className=" mt-6">Bodovi</h6>
          <input
            type="number"
            placeholder="Bodovi"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <h6 className=" mt-6">Semestar redovni</h6>
          <select
            name="semestar_redovni"
            id="semestar_redovni"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Semestar redovni
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <h6 className=" mt-6">Semestar izvanredni</h6>
          <select
            name="semestar_izvanredni"
            id="semestar_izvanredni"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Semestar izvanredni
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <button className=" mt-6 bg-green-400 text-white w-24 p-2 rounded hover:bg-green-800 ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCourses;
