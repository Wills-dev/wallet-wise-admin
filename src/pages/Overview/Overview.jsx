import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { DateDropdown } from "@/components/DateDropdown/DateDropdown";

import { SingleBarChart } from "@/components/SingleBarChart/SingleBarChart";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { profit, revenue } from "@/contants";
import { SingleAreaChart } from "@/components/SingleAreaChart/SingleAreaChart";
import { UserPieChart } from "@/components/Charts/UserPieChart";
import { GoIssueReopened } from "react-icons/go";
import { FaUsers } from "react-icons/fa";

const Overview = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 ">
        <div className="flex gap-6 flex-wrap">
          <div className="bg-white dark:bg-secondary-dark-bg sm:min-w-[300px] min-w-full  dark:text-white flex-1 shadow p-4 rounded-lg">
            <h6 className="font-bold text-gray-400">Earnings</h6>
            <p className="text-xl font-light">$20,000,000</p>
            <SingleAreaChart />
          </div>
          <div className="sm:min-w-[300px] min-w-full flex-1">
            {" "}
            <UserPieChart />
          </div>

          <div className="  sm:min-w-[300px] min-w-full  dark:text-white flex-1 flex flex-col gap-6">
            <div className="flex-center flex-1 gap-2 bg-white dark:bg-secondary-dark-bg shadow p-4 rounded-lg ">
              <div className="h-14 w-14 bg-green-100 text-green-400 text-xl flex-center justify-center rounded-full">
                <GoIssueReopened />
              </div>
              <div className="">
                <h6 className="font-bold text-gray-400">Open Tickets</h6>
                <p className="text-xl font-light">50</p>
              </div>
            </div>
            <div className="flex-center flex-1 gap-2 bg-white dark:bg-secondary-dark-bg shadow p-4 rounded-lg ">
              <div className="h-14 w-14 bg-purple-100 text-purple-400 text-xl flex-center justify-center rounded-full">
                <FaUsers />
              </div>
              <div className="">
                <h6 className="font-bold text-gray-400">Coverage</h6>
                <p className="text-xl font-light">12 Countries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6  max-lg:flex-col">
          <div className="bg-white dark:bg-secondary-dark-bg   dark:text-white flex-1 p-4     shadow rounded-lg">
            <div className="flex-center-between">
              {" "}
              <h3 className="text-xl font-light">Revenue</h3>
              <DateDropdown />
            </div>
            <div className="">
              <SingleBarChart
                dataTitle="revenue"
                barColor="#4535C1"
                chartData={revenue}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-secondary-dark-bg   dark:text-white flex-1 p-4 shadow rounded-lg">
            <div className="flex-center-between">
              {" "}
              <h3 className="text-xl font-light"> Profit</h3>
              <DateDropdown />
            </div>
            <div className="">
              <SingleBarChart
                dataTitle="profit"
                barColor="#36C2CE"
                chartData={profit}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
