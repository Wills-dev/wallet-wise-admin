import React from "react";
import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

const ProfileDropdown = () => {
  const profileDropddownAnimation = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: "0",
    },
  };

  return (
    <motion.div
      variants={profileDropddownAnimation}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{
        duration: 0.3,
        ease: [0.61, 1, 0.88, 1],
      }}
      className=" absolute top-14 right-0 bg-white text-gray-500 dark:bg-secondary-dark-bg   rounded-lg shadow w-52 z-30"
    >
      <div className="py-3 px-4 border-b-1 border-gray-300 flex gap-2">
        <div className="relative h-10 w-10">
          <img
            src="/assets/images/profile-pic.webp"
            alt="profile-pic"
            className="w-full h-full object-cover rounded-full"
          />
          <span className="block absolute h-3 w-3 rounded-full bg-green-500 bottom-0 right-1 border-1 border-white" />
        </div>
        <div className="">
          <h6 className="font-medium">Wills</h6>
          <p className="text-xs font-light">Admin</p>
        </div>
      </div>
      <div className="py-3 border-b-1 border-gray-200 flex flex-col ">
        <Link
          to="/profile"
          className="flex items-center gap-2 hover:bg-gray-100 transition-all px-4 py-1"
        >
          <FaRegUser />
          <p className="text-sm ">My Profile</p>
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-2 hover:bg-gray-100 transition-all px-4 py-1"
        >
          <IoSettingsOutline />
          <p className="text-sm ">Settings</p>
        </Link>

        <Link
          to="/change-password"
          className="flex items-center gap-2 hover:bg-gray-100 transition-all px-4 py-1"
        >
          <GrSecure />
          <p className="text-sm whitespace-nowrap">Change Password</p>
        </Link>
      </div>

      <div className="flex items-center gap-2 py-3 px-4 border-t-1 border-gray-300">
        <MdOutlinePowerSettingsNew />
        <p className="text-sm font-semibold">Logout</p>
      </div>
    </motion.div>
  );
};

export default ProfileDropdown;
