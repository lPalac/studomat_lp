import React, { useState, useEffect } from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersWithCourses = () => {
  //stavit content Coursea getAllCourse
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState("");
  const [numberArray, setNumberArray] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5001/users");
    //console.log(response.data);
    setUsers(response.data);
  };
  /*
  const passAllUsers = async () => {
    for (const user of users) {
      const response = await axios.get(
        `http://localhost:5001/enrollmentUser/${user.id}`
      );
      setNumberArray([...response.data.length, user)];
    }
  };
*/
  const getNumberOfCourses = async (id) => {
    const response = await axios.get(
      `http://localhost:5001/enrollmentUser/${id}`
    );
    console.log(id, "student", response.data.length, "upisano");
    setNumber(response.data.length);
    return response.data.length;
  };

  return (
    <div className="mt-5 ">
      <Navigation />

      <h1 className="ml-4 text-2xl">Users With Courses</h1>
      <div className="my-4 ml-4 text-green-600 cursor-pointer">
        <Link to="/registration">Add User</Link>
      </div>

      <table className="w-full ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime Studenta</th>
            <th>Broj upisanih predmeta</th>
            <th>Nesto</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className="my-4 text-center border-2 border-gray-500 rounded"
              key={user.id}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-4 bg-slate-200 ">{user.name}</td>
              <td className="p-4 ">{getNumberOfCourses(user.id)}</td>
              <td className="p-4 bg-slate-200">
                <Link
                  to={`/detailcourse/${user.id}`}
                  className="p-4 text-blue-500 "
                >
                  vidi detalje
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersWithCourses;

/* 
{Courses.map((Course) => (
            <Link className="px-4 py-2" to="/Courses">
              {Course.name}
            </Link>
          ))}


            const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/course/${id}`);
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };
           */
