import React, { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    status: "",
  });

  /* Radi i ovo ali cu napravit sve preko axiosa

  const onSubmit = () => {
    console.log(form);
    //logic

    fetch("http://localhost:5001/user", {
      // Adding method type
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //.then(console.log)
      .catch((err) => console.log("Error", err));
    navigate("/students");
  };
  */

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/user", form);
      navigate("/students");
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="ml-6">
        <h1 className="text-3xl font-bold mt-7 ">Registration</h1>
        <div className="">
          <h6 className=" mt-6">Ime</h6>
          <input
            type="text"
            className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            placeholder="Ime"
            onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
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
            onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
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
            onChange={(e) =>
              setForm({ ...form, password: e.currentTarget.value })
            }
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
            onChange={(e) =>
              setForm({ ...form, gender: e.currentTarget.value })
            }
          >
            <option value="" disabled selected hidden>
              Select a gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Other">Don't wish to specify</option>
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
            onChange={(e) => setForm({ ...form, role: e.currentTarget.value })}
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
            onChange={(e) =>
              setForm({ ...form, status: e.currentTarget.value })
            }
          >
            <option value="" disabled selected hidden>
              Select a status
            </option>
            <option value="redovni">Redovni</option>
            <option value="izvanredni">Izvanredni</option>
            <option value="none">none</option>
          </select>
        </div>
        <button
          className=" mt-6 bg-green-400 text-white w-24 p-2 rounded hover:bg-green-800 "
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddUser;
