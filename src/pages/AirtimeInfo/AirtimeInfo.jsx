import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { Link } from "react-router-dom";

const AirtimeInfo = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="min-h-screen">
            <div className="flex justify-between items-center mb-4 flex-wrap">
              <h1 className="sm:text-2xl text-lg font-bold text-gray-800">
                Airtime Transaction Details
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
                  to="/airtime"
                  className="hover:font-semibold transition-all duration-300"
                >
                  Airtime
                </Link>{" "}
                &gt; <span className="text-gray-900">Details</span>
              </nav>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-semibold text-gray-900">
                    #TX123456789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-semibold text-gray-900">
                    Aug 30, 2024, 12:45 PM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-green-500">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="sm:text-xl text-lg font-bold mb-4 text-gray-800">
                Transaction Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Sender:</span>
                  <span className="font-semibold text-gray-900">John Doe</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Receiver:</span>
                  <span className="font-semibold text-gray-900">
                    +234 123 456 789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-gray-900">₦5,000.00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Operator:</span>
                  <span className="font-semibold text-gray-900">
                    MTN Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Actions</h2>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Flag Transaction
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Refund
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6 max-sm:hidden">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Audit Log
              </h2>
              <div className="overflow-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 bg-gray-200 whitespace-nowrap min-w-60">
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
                        Aug 30, 2024, 1:15 PM
                      </td>
                      <td className="py-2 px-4 border-t">
                        Transaction created
                      </td>
                      <td className="py-2 px-4 border-t">System</td>
                      <td className="py-2 px-4 border-t">
                        Initial transaction created by system
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AirtimeInfo;
