import React from "react";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    loading,
    inputType,
    setInputType,
    loginDetails,
    handleChange,
    handleSubmit,
    toggleInputType,
  } = useLogin();

  return (
    <AuthLayout>
      <h2 className="text-2xl">Welcome to Wallet wise! 👋</h2>
      <p className="py-3 text-gray-500">Please sign-in to your account</p>
      <form action="" className="py-4 flex gap-6 flex-col w-full">
        <div className="w-full">
          <label htmlFor="email" className="font-light">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="h-10 mt-1  w-full px-2 border-1 border-gray-300 outline-none rounded-md focus:border-[#696cff] text-gray-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="font-light">
            Password
          </label>
          <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#696cff]">
            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="******"
              className="outline-none flex-1 pr-2 text-gray-500"
            />
            <button type="button" onClick={toggleInputType}>
              {inputType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full font-light gap-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className=" checked:bg-[#696cff]"
            />
            <label htmlFor="remember" className="cursor-pointer">
              Remember Me
            </label>
          </div>
          <Link to="/forgot-password" className="text-[#696cff]">
            Forgot Password?
          </Link>
        </div>
        <button className="w-full h-10 bg-[#696cff] rounded-md text-white hover:bg-[#8284fb] transition-all">
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
