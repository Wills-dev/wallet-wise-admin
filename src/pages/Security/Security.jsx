import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useStateContext } from "@/context/ContextProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Security = () => {
  const { currentColor } = useStateContext();
  const inputType = "password";
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="w-full sm:p-6 px-3 py-4 bg-white dark:bg-secondary-dark-bg  rounded-lg shadow">
          <h6 className="text-lg font-medium">Change Password</h6>
          <form action="" className="mt-6 flex flex-col gap-6">
            <div className="w-full lg:w-1/2">
              <label htmlFor="email" className="font-light">
                Current Password
              </label>
              <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#696cff]">
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="outline-none flex-1 pr-2 text-gray-500"
                />
                <button type="button">
                  {inputType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <label htmlFor="email" className="font-light">
                New Password
              </label>
              <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#696cff]">
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="outline-none flex-1 pr-2 text-gray-500"
                />
                <button type="button">
                  {inputType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <label htmlFor="email" className="font-light">
                Confirm Password
              </label>
              <div className="flex items-center justify-between h-10 mt-1  w-full px-2 border-1 border-gray-300 rounded-md focus-within:border-[#696cff]">
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="outline-none flex-1 pr-2 text-gray-500"
                />
                <button type="button">
                  {inputType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="">
              <h6 className="text-gray-500">Password Requirements:</h6>
              <ul className=" list-disc text-sm pl-4 text-gray-500 font-light">
                <li>Minimum 8 characters long - the more, the better</li>
                <li>At least one lowercase character</li>
                <li>At least one number, symbol, or whitespace character</li>
              </ul>
            </div>
            <button
              className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all w-fit"
              style={{ backgroundColor: currentColor }}
              onClick={() => setOpenModal(true)}
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Security;
