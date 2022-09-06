import React, { useState } from "react";
import axios from "axios";

import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const EditCourses = () => {
  const [ime, setIme] = useState("");
  const [kod, setKod] = useState("");
  const [program, setProgram] = useState("");
  const [bodovi, setBodovi] = useState("");
  const [semestar_redovni, setSemestarRedovni] = useState("");
  const [semestar_izvanredni, setSemestarizvanredni] = useState("");
  const [izborni, setIzborni] = useState("");

  const navigate = useNavigate();

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/course/${id}`, {
        ime,
        kod,
        program,
        bodovi,
        semestar_redovni,
        semestar_izvanredni,
        izborni,
      });
      navigate("/courses");
    } catch (error) {
      console.log("Error getting data", error);
    }
  };
  return (
    <div>
      <Navigation />
      <form className="ml-6">
        <h1 className="text-3xl font-bold mt-7 ">Novi Predmet</h1>
        <div className="">
          <h6 className=" mt-6">Ime Predmeta</h6>
          <input
            type="text"
            className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            placeholder="Ime"
            onChange={(e) => setIme(e.currentTarget.value)}
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
            onChange={(e) => setKod(e.currentTarget.value)}
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
            onChange={(e) => setProgram(e.currentTarget.value)}
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
            onChange={(e) => setBodovi(e.currentTarget.value)}
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
            onChange={(e) => setSemestarRedovni(e.currentTarget.value)}
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
            onChange={(e) => setSemestarizvanredni(e.currentTarget.value)}
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
        <div>
          <h6 className=" mt-6">Semestar izvanredni</h6>
          <select
            name="semestar_izvanredni"
            id="semestar_izvanredni"
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setIzborni(e.currentTarget.value)}
          >
            <option value="" disabled selected hidden>
              Jeli izborni
            </option>
            <option value="da">Da</option>
            <option value="ne">Ne</option>
          </select>
        </div>
        <button
          className=" mt-6 bg-green-400 text-white w-24 p-2 rounded hover:bg-green-800 "
          onClick={onUpdate}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCourses;
