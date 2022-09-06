import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/user/${id}`, {
        name,
        email,
        password,
        role,
        status,
        gender,
      });
      navigate("/students");
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5001/user/${id}`);
    console.log(response.data);

    setName(response.data.name);
    setGender(response.data.gender);
    setStatus(response.data.status);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setRole(response.data.role);
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
            value={name}
            className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            placeholder="Ime"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <h6 className=" mt-6">Email</h6>
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <h6 className=" mt-6">Password</h6>
          <input
            type="password : text"
            value={password}
            placeholder="Password"
            className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <h6 className=" mt-6">Gender</h6>
          <select
            name="gender"
            id="gender"
            value={gender}
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setGender(e.currentTarget.value)}
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
            value={role}
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setRole(e.currentTarget.value)}
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
            value={status}
            className="text-md px-3 py-2 rounded-lg w-52
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600 focus:outline-none"
            onChange={(e) => setStatus(e.currentTarget.value)}
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
          onClick={onUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditUser;
