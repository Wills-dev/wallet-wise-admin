import React, { useState } from "react";
import toast from "react-hot-toast";
import { toastOptions } from "../helperFunctions";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const toggleInputType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    if (!email || !password) {
      toast.error(`Please fill all fields!`, toastOptions);
      return;
    }
    setLoading(true);
    try {
    } catch (error) {
      console.log("error from login", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    inputType,
    setInputType,
    loginDetails,
    handleChange,
    handleSubmit,
    toggleInputType,
  };
};
