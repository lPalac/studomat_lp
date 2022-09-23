import React, { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEnrollment = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userid: "",
    courseid: "",
    status: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/enrollment", form);
      navigate("/students");
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="ml-6">
        <h1 className="text-3xl font-bold mt-7 ">Enrollment</h1>
        <div className="">
          <h6 className="mt-6 ">User ID</h6>
          <input
            type="text"
            className="block px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:outline-none"
            placeholder="User ID"
            onChange={(e) =>
              setForm({ ...form, userid: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <h6 className="mt-6 ">Course ID</h6>
          <input
            type="text"
            placeholder="Course ID"
            className="block px-3 py-2 placeholder-gray-600 border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:outline-none"
            onChange={(e) =>
              setForm({ ...form, courseid: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <h6 className="mt-6 ">Status</h6>
          <select
            name="status"
            id="status"
            className="px-3 py-2 placeholder-gray-600 border-2 border-gray-300 rounded-lg shadow-md text-md w-52 focus:border-gray-600 focus:outline-none"
            onChange={(e) =>
              setForm({ ...form, status: e.currentTarget.value })
            }
          >
            <option value="" disabled selected hidden>
              Select a status
            </option>
            <option value="Polozio">Polozio</option>
            <option value="Pao">Pao</option>
          </select>
        </div>
        <button
          className="w-24 p-2 mt-6 text-white bg-green-400 rounded hover:bg-green-800"
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEnrollment;
