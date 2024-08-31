import React, { useState } from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

import { useStateContext } from "@/context/ContextProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentColor } = useStateContext();
  const [isPersonalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [isContactInfoOpen, setContactInfoOpen] = useState(true);

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" min-h-screen">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  John Doe
                </h1>
                <p className="text-gray-600">Administrator</p>
                <p className="text-gray-600 text-sm">
                  Last login: Aug 31, 2024, 9:45 AM
                </p>
              </div>
            </div>
            <Link
              to="/security"
              className="mt-4 sm:mt-0 px-4 py-2  text-white rounded"
              style={{ backgroundColor: currentColor }}
            >
              Go to Security Settings
            </Link>
          </div>

          {/* Profile Overview */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Profile Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-gray-600">Username:</span>
                <span className="font-semibold text-gray-900">adminuser</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Role:</span>
                <span className="font-semibold text-gray-900">
                  Administrator
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Language:</span>
                <span className="font-semibold text-gray-900">English</span>
              </div>
            </div>
          </div>

          {/* Personal Information (Collapsible Section) */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPersonalInfoOpen(!isPersonalInfoOpen)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Personal Information
              </h2>
              <span>{isPersonalInfoOpen ? "-" : "+"}</span>
            </div>
            {isPersonalInfoOpen && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">First Name:</span>
                  <span className="font-semibold text-gray-900">John</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Last Name:</span>
                  <span className="font-semibold text-gray-900">Doe</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-semibold text-gray-900">
                    Jan 1, 1985
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-semibold text-gray-900">Male</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setContactInfoOpen(!isContactInfoOpen)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Contact Information
              </h2>
              <span>{isContactInfoOpen ? "-" : "+"}</span>
            </div>
            {isContactInfoOpen && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900">
                    admin@example.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Phone Number:</span>
                  <span className="font-semibold text-gray-900">
                    +234 123 456 789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-semibold text-gray-900">
                    123 Admin St, Lagos, Nigeria
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 max-md:hidden">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Activity Logs
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-4 bg-gray-200">
                      Date & Time
                    </th>
                    <th className="text-left py-2 px-4 bg-gray-200">
                      Activity
                    </th>
                    <th className="text-left py-2 px-4 bg-gray-200">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-t">
                      Aug 31, 2024, 10:00 AM
                    </td>
                    <td className="py-2 px-4 border-t">Login</td>
                    <td className="py-2 px-4 border-t">
                      Admin logged in from IP 123.456.789.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
