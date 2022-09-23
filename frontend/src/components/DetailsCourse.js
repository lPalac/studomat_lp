import React, { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "./Navigation";
import { useNavigate, useParams } from "react-router-dom";

const DetailsCourses = () => {
  const { id } = useParams();

  const [ime, setIme] = useState("");
  const [usersOnSubject, setUsersOnSubject] = useState([]);

  // const [semestar_redovni, setSemestarRedovni] = useState("");
  //const [semestar_izvanredni, setSemestarizvanredni] = useState("");

  useEffect(() => {
    getCourseById();
    getUsersOnCourse();
  }, []);

  const getCourseById = async () => {
    const response = await axios.get(`http://localhost:5001/course/${id}`);
    //console.log(response.data);

    setIme(response.data.ime);
  };

  const getUsersOnCourse = async () => {
    const response = await axios.get(
      `http://localhost:5001/enrollmentCourse/${id}`
    );
    console.log("ovde", response.data.id);
    setUsersOnSubject(response.data.userid);
  };

  return (
    <div>
      <Navigation />
      <form className="ml-6">
        <div className="">
          <p className="text-2xl text-bold">Predmet {ime} polozili su: </p>
        </div>

        <div>
          <h6 className="mt-6 ">Redovni studenti</h6>
          {usersOnSubject.map((user, index) => (
            <div>
              <span>{index + 1}</span>
              <span>{user}</span>
            </div>
          ))}
        </div>
        <div>
          <h6 className="mt-6 ">Izvanredni studenti</h6>
        </div>
      </form>
    </div>
  );
};

export default DetailsCourses;
