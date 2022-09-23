import UserList from "./components/UserList.js";
import AddUser from "./components/AddUser.js";

import Login from "./components/Login.js";
import Courses from "./components/Courses.js";
import AddCourses from "./components/AddCourses.js";
import EditCourses from "./components/EditCourses.js";
import EditUser from "./components/EditUser.js";
import Dashboard from "./components/Dashboard.js";
import CoursesListsUsers from "./components/CoursesListsUsers.js";
import DetailsCourse from "./components/DetailsCourse.js";
import AddEnrollment from "./components/AddEnrollment.js";
import UsersWithCourses from "./components/UsersWithCourses.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="students" element={<UserList />} />
        <Route path="registration" element={<AddUser />} />
        <Route path="editstudent/:id" element={<EditUser />} />

        <Route path="courses" element={<Courses />} />
        <Route path="addcourses" element={<AddCourses />} />
        <Route path="editcourse/:id" element={<EditCourses />} />
        <Route path="detailcourse/:id" element={<DetailsCourse />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addenrollment" element={<AddEnrollment />} />
        <Route path="courseslistsusers" element={<CoursesListsUsers />} />

        <Route path="userswithcourses" element={<UsersWithCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
