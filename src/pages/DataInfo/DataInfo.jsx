import { Link } from "react-router-dom";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const DataInfo = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className=" min-h-screen">
            {/* Header and Breadcrumb */}
            <div className="flex justify-between items-center mb-6 flex-wrap">
              <h1 className="sm:text-2xl text-lg font-bold text-gray-800">
                Data Transaction Details
              </h1>
              <nav className="text-gray-600">
                <Link
                  to="/overview"
                  className="hover:font-semibold transition-all duration-300"
                >
                  Dashboard
                </Link>{" "}
                &gt;{" "}
                <Link
                  to="/data"
                  className="hover:font-semibold transition-all duration-300"
                >
                  Data
                </Link>{" "}
                &gt; <span className="text-gray-900">Details</span>
              </nav>
            </div>

            {/* Transaction Overview */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Transaction Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-semibold text-gray-900">
                    #DAT123456789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-semibold text-gray-900">
                    Aug 31, 2024, 10:00 AM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-green-500">
                    Successful
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Customer Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Customer Name:</span>
                  <span className="font-semibold text-gray-900">John Doe</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Customer ID:</span>
                  <span className="font-semibold text-gray-900">87654321</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900">
                    john.doe@example.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-900">
                    +234 123 456 789
                  </span>
                </div>
              </div>
            </div>

            {/* Data Plan Details */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Data Plan Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Service Provider:</span>
                  <span className="font-semibold text-gray-900">MTN</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Data Plan:</span>
                  <span className="font-semibold text-gray-900">
                    10GB Monthly Plan
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Validity:</span>
                  <span className="font-semibold text-gray-900">30 Days</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Subscription ID:</span>
                  <span className="font-semibold text-gray-900">
                    SUB987654321
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Payment Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-gray-900">₦5,000.00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-gray-900">Wallet</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Transaction Reference:</span>
                  <span className="font-semibold text-gray-900">
                    REF654321098
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Service Charge:</span>
                  <span className="font-semibold text-gray-900">₦200.00</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Actions
              </h2>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Resend Confirmation
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Cancel Transaction
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Refund
                </button>
              </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-white p-6 rounded-lg shadow mb-6 max-md:hidden">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Audit Logs
              </h2>
              <div className="overflow-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 bg-gray-200">
                        Date & Time
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200">
                        Action
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200">User</th>
                      <th className="text-left py-2 px-4 bg-gray-200">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t">
                        Aug 31, 2024, 10:10 AM
                      </td>
                      <td className="py-2 px-4 border-t">
                        Data Purchase Completed
                      </td>
                      <td className="py-2 px-4 border-t">System</td>
                      <td className="py-2 px-4 border-t">
                        10GB Monthly Plan for MTN
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Notes
              </h2>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-4"
                rows="4"
                placeholder="Add a note regarding this transaction..."
              ></textarea>
              <div className="mt-4 text-right">
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DataInfo;
