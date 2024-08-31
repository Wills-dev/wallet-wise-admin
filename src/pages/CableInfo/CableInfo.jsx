import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { Link } from "react-router-dom";

const CableInfo = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className=" min-h-screen">
            <div className="flex justify-between items-center mb-6 flex-wrap">
              <h1 className="sm:text-2xl text-lg font-bold text-gray-800">
                Cable Transaction Details
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
                  to="/cable"
                  className="hover:font-semibold transition-all duration-300"
                >
                  Cable
                </Link>{" "}
                &gt; <span className="text-gray-900">Details</span>
              </nav>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Transaction Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-semibold text-gray-900">
                    #CBL987654321
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-semibold text-gray-900">
                    Aug 31, 2024, 09:30 AM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-yellow-500">Pending</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Customer Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Customer Name:</span>
                  <span className="font-semibold text-gray-900">
                    Jane Smith
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Customer ID:</span>
                  <span className="font-semibold text-gray-900">12345678</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900">
                    jane.smith@gmail.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-900">
                    +234 987 654 321
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Subscription Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Service Provider:</span>
                  <span className="font-semibold text-gray-900">DSTV</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Subscription Type:</span>
                  <span className="font-semibold text-gray-900">Monthly</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-semibold text-gray-900">
                    Premium Package
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-900">30 Days</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Payment Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-gray-900">
                    ₦15,000.00
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-gray-900">Card</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Transaction Reference:</span>
                  <span className="font-semibold text-gray-900">
                    REF123456789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Service Charge:</span>
                  <span className="font-semibold text-gray-900">₦500.00</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Actions</h2>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Resend Confirmation
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Cancel Subscription
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Refund
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Audit Logs
              </h2>
              <div className="overflow-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 bg-gray-200 whitespace-nowrap">
                        Date & Time
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200 whitespace-nowrap">
                        Action
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200 whitespace-nowrap">
                        User
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200 whitespace-nowrap">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t">
                        Aug 31, 2024, 09:45 AM
                      </td>
                      <td className="py-2 px-4 border-t">
                        Subscription Activated
                      </td>
                      <td className="py-2 px-4 border-t">System</td>
                      <td className="py-2 px-4 border-t min-w-80">
                        Activated monthly subscription on DSTV Premium Package
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Notes</h2>
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

export default CableInfo;
