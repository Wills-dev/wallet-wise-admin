import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import AuthLayout from "@/components/AuthLayout/AuthLayout";

const ResetPassword = () => {
  const [inputType, setInputType] = useState("password");
  const toggleInputType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/overview");
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl">Reset Password 🔒</h2>
      <p className="py-3 text-gray-500">
        Your new password must be different from previously used passwords
      </p>
      <form
        action=""
        className="py-4 flex gap-6 flex-col w-full"
        onSubmit={(e) => handleSubmit()}
      >
        <div className="w-full">
          <label htmlFor="email" className="font-light">
            New Password
          </label>
          <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#5c24cc]">
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

        <div className="w-full">
          <label htmlFor="email" className="font-light">
            Confirm Password
          </label>
          <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#5c24cc]">
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

        <button
          type="submit"
          className="w-full h-10 bg-[#5c24cc] rounded-md text-white hover:bg-[#8284fb] transition-all"
        >
          Set new password
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 w-full font-light py-2">
        <Link
          to="/login"
          className="text-[#5c24cc] flex-center justify-center gap-2 "
        >
          <IoIosArrowBack /> Back to login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
