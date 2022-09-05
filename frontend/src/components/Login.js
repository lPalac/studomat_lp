import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold mt-7 ">Login</h1>
      <div className="">
        <h6 className=" mt-6">Email</h6>
        <input
          type="text"
          className="text-md block px-3 py-2 rounded-lg  
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600  
                focus:outline-none"
          placeholder="Email"
        />
      </div>
      <div className=" form-group">
        <h6 className=" mt-6 ">Password</h6>
        <input
          type="password : text"
          placeholder="Password"
          className="text-md block px-3 py-2 rounded-lg
                border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:border-gray-600
                focus:outline-none"
        />
      </div>

      <button className=" mt-6 bg-green-400 text-white w-16 p-2 rounded hover:bg-green-800 ">
        Login
      </button>
    </div>
  );
};

export default Login;
