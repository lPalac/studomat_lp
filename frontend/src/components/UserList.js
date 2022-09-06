import React, { useState, useEffect } from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  //stavit content usera getAllUser
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5001/users");
    console.log(response.data);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/user/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-5">
      <Navigation />

      <h1 className="text-2xl ml-4">Student List</h1>
      <div className="text-green-600 my-4 ml-4 cursor-pointer">
        <Link to="/registration">Registration</Link>
      </div>

      <table className=" w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className="border-2  border-gray-500 rounded text-center my-4"
              key={user.id}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-4 bg-slate-200 ">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4 bg-slate-200 ">{user.gender}</td>
              <td className="">
                <Link
                  to={`/editstudent/${user.id}`}
                  className="text-blue-500 p-4 "
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500 bg-red-100 p-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

/* 
{users.map((user) => (
            <Link className="px-4 py-2" to="/users">
              {user.name}
            </Link>
          ))}
           */
