import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

import AuthLayout from "@/components/AuthLayout/AuthLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/reset-password/1");
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl">Forgot Password? 🔒</h2>
      <p className="py-3 text-gray-500">
        Enter your email and we'll send you instructions to reset your password
      </p>
      <form
        action=""
        className="py-4 flex gap-6 flex-col w-full"
        onSubmit={(e) => handleSubmit()}
      >
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
        <button
          type="submit"
          className="w-full h-10 bg-[#696cff] rounded-md text-white hover:bg-[#8284fb] transition-all"
        >
          Send Reset Link
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 w-full font-light py-2">
        <Link
          to="/login"
          className="text-[#696cff] flex-center justify-center gap-2 "
        >
          <IoIosArrowBack /> Back to login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
