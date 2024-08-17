import React from "react";

import { CiEdit } from "react-icons/ci";

import { useStateContext } from "@/context/ContextProvider";

const UserProfile = ({ user }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-white dark:bg-secondary-dark-bg dark:text-white shadow-md rounded-lg p-6 flex items-center space-x-6">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-gray-500">+23470898988787</p>
        <p className="text-blue-600 font-medium">{user.role}</p>
        <button
          className="mt-4 flex items-center gap-1 px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all"
          style={{ backgroundColor: currentColor }}
        >
          <CiEdit />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
