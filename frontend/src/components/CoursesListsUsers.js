import React, { useState, useEffect } from "react";
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  //stavit content Coursea getAllCourse
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("http://localhost:5001/courses");
    console.log(response.data);
    setCourse(response.data);
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/course/${id}`);
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-5">
      <Navigation />

      <h1 className="text-2xl ml-4">Courses List</h1>
      <div className="text-green-600 my-4 ml-4 cursor-pointer">
        <Link to="/addcourses">New Courses</Link>
      </div>

      <table className=" w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv predmeta</th>
            <th>Broj studenata koji je polzio predmet</th>
            <th>Redovnih koji su polozili</th>
            <th>Izvanredni koju si polozili</th>
          </tr>
        </thead>
        <tbody>
          {course.map((course, index) => (
            <tr
              className="border-2  border-gray-500 rounded text-center my-4"
              key={course.id}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-4 bg-slate-200 ">{course.ime}</td>
              <td className="p-4">
                {course.semestar_redovni + course.semestar_izvanredni}
              </td>
              <td className="p-4 bg-slate-200 ">{course.semestar_redovni}</td>
              <td className="p-4">{course.semestar_izvanredni}</td>

              <td className="">
                <Link
                  to={`/detailcourse/${course.id}`}
                  className="text-blue-500 p-4 "
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

export default Courses;

/* 
{Courses.map((Course) => (
            <Link className="px-4 py-2" to="/Courses">
              {Course.name}
            </Link>
          ))}
           */
