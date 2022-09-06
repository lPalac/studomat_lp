import React, { useState } from "react";

import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const AddCourses = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    status: "",
  });
  const onSubmit = () => {
    console.log(form);
    //logic

    fetch("https://localhost:5001/course", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(form),

      // Adding headers to the request
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      // Displaying results to console
      .then(console.log)
      .catch((err) => console.log("Error", err));

    navigate("/courses");
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
            onChange={(e) => setForm({ ...form, ime: e.currentTarget.value })}
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
            onChange={(e) => setForm({ ...form, kod: e.currentTarget.value })}
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
            onChange={(e) =>
              setForm({ ...form, program: e.currentTarget.value })
            }
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
            onChange={(e) =>
              setForm({ ...form, bodovi: e.currentTarget.value })
            }
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
            onChange={(e) =>
              setForm({ ...form, semestar_redovni: e.currentTarget.value })
            }
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
            onChange={(e) =>
              setForm({ ...form, semestar_izvanredni: e.currentTarget.value })
            }
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
        <button
          className=" mt-6 bg-green-400 text-white w-24 p-2 rounded hover:bg-green-800 "
          onClick={onSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCourses;
