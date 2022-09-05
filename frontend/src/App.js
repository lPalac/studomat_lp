import UserList from "./components/UserList.js";
import AddUser from "./components/AddUser.js";

import Login from "./components/Login.js";
import Courses from "./components/Courses.js";
import AddCourses from "./components/AddCourses.js";

import Dashboard from "./components/Dashboard.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="students" element={<UserList />} />
        <Route path="addstudents" element={<AddUser />} />
        <Route path="courses" element={<Courses />} />
        <Route path="addcourses" element={<AddCourses />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
