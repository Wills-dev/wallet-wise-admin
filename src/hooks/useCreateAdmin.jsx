import { useState } from "react";

import toast from "react-hot-toast";

import { toastOptions } from "@/helperFunctions";

export const useCreateAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onCancel = () => {
    setOpenModal(false);
    setAdminDetails({
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (adminDetails.password !== adminDetails.confirmPassword) {
        toast.error("Passwords don't match!", toastOptions);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleChange,
    handleSubmit,
    onCancel,
    setOpenModal,
    openModal,
    loading,
    adminDetails,
  };
};
