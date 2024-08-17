import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

import { usersInfo } from "@/contants";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();
  const user = usersInfo.find((u) => u.id === parseInt(userId));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">{user.name}'s Details</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="text-gray-700">
                  <strong>Status:</strong> {user.status}
                </p>
                <p className="text-gray-700">
                  <strong>Wallet Balance:</strong> ${user.walletBalance}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Last Login:</strong> {user.lastLogin}
                </p>
                <p className="text-gray-700">
                  <strong>Account Created:</strong> {user.createdAt}
                </p>
                <button
                  className={`mt-4 px-4 py-2 rounded-md text-white ${
                    user.status === "Active" ? "bg-red-600" : "bg-green-600"
                  }`}
                  onClick={() => handleStatusToggle(user.id)}
                >
                  {user.status === "Active"
                    ? "Suspend Account"
                    : "Activate Account"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <ul className="divide-y divide-gray-200">
              {user.activities.map((activity, index) => (
                <li key={index} className="py-2">
                  <p className="text-gray-700">{activity.description}</p>
                  <span className="text-gray-400 text-sm">
                    {activity.timestamp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
            <ul className="divide-y divide-gray-200">
              {user.transactions.map((transaction, index) => (
                <li key={index} className="py-2">
                  <p className="text-gray-700">
                    <strong>Type:</strong> {transaction.type}
                  </p>
                  <p className="text-gray-700">
                    <strong>Amount:</strong> ${transaction.amount}
                  </p>
                  <span className="text-gray-400 text-sm">
                    {transaction.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserInfo;
