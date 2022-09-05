import UserList from "./components/UserList.js";
import Navigation from "./components/Navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return (
<div className="">
    <Navigation />

    <UserList />
    <h1 className="text-3xl font-bold ">Login</h1>
</div>
);
}

export default App;