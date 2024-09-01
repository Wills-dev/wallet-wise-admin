import { Link } from "react-router-dom";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

import { useStateContext } from "@/context/ContextProvider";

const BettingInfo = () => {
  const { currentColor } = useStateContext();

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="min-h-screen">
            {/* Header with Breadcrumb Navigation */}
            <div className="mb-6">
              <nav className="text-gray-600 mb-4">
                <ol className="list-reset flex">
                  <li>
                    <Link
                      to="/overview"
                      className=" hover:underline"
                      style={{ color: currentColor }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <Link
                      to="/betting"
                      className="hover:underline"
                      style={{ color: currentColor }}
                    >
                      Betting
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>Bet Funding Details</li>
                </ol>
              </nav>
              <h1 className="sm:text-2xl text-lg font-bold text-gray-800">
                Bet Funding Transaction Details
              </h1>
            </div>

            {/* Transaction Overview */}
            <div className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-semibold text-gray-900">
                  WLT123456789
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">User:</span>
                <span className="font-semibold text-blue-600 cursor-pointer">
                  JaneDoe789
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-green-600">₦300.00</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-yellow-600">Pending</span>
              </div>
            </div>

            {/* User Information */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                User Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-semibold text-gray-900">Jane Doe</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Username:</span>
                  <span className="font-semibold text-gray-900">
                    JaneDoe789
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-900">
                    jane.doe@example.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-900">
                    +1234567890
                  </span>
                </div>
              </div>
            </div>

            {/* Funding Method Details */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Funding Method Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-600">Method:</span>
                  <span className="font-semibold text-gray-900">
                    Wallet Transfer
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Reference:</span>
                  <span className="font-semibold text-gray-900">
                    REF0987654321
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">
                    Aug 31, 2024, 11:00 AM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-semibold text-gray-900">BetKing</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Transaction Breakdown
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 bg-gray-200">
                        Description
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200">
                        Amount
                      </th>
                      <th className="text-left py-2 px-4 bg-gray-200">Fees</th>
                      <th className="text-left py-2 px-4 bg-gray-200">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-t">
                        Wallet Transfer to BetKing
                      </td>
                      <td className="py-2 px-4 border-t">₦300.00</td>
                      <td className="py-2 px-4 border-t">₦3.00</td>
                      <td className="py-2 px-4 border-t text-green-600">
                        ₦303.00
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

export default BettingInfo;
