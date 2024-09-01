import React from "react";

import { GoIssueReopened } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { FiActivity, FiUsers } from "react-icons/fi";
import { TrendingDown, TrendingUp } from "lucide-react";

import { DateDropdown } from "@/components/DateDropdown/DateDropdown";
import { SingleBarChart } from "@/components/SingleBarChart/SingleBarChart";
import {
  profit,
  revenue,
  services,
  topServices,
  topTransactions,
} from "@/contants";
import { SingleAreaChart } from "@/components/SingleAreaChart/SingleAreaChart";
import { UserPieChart } from "@/components/Charts/UserPieChart";
import { formatNumber } from "@/helperFunctions";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const Overview = () => {
  const syncServices = (services, topServices) => {
    return services.map((service) => {
      const matchedService = topServices.find(
        (topService) =>
          topService.name.toLowerCase() === service.name.toLowerCase()
      );
      return matchedService ? { ...service, ...matchedService } : service;
    });
  };
  const syncedServices = syncServices(services, topServices);

  const chartConfig = {
    revenue: {
      label: "Profit",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="">
          <h1 className="md:text-3xl text-xl  ">Welcome, Wills</h1>
          <p className="text-sm text-gray-400 py-3">
            Check your performance and find tips on improvement.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap">
          <div className="bg-white dark:bg-secondary-dark-bg sm:min-w-[300px] min-w-full  dark:text-white flex-1 shadow p-4 rounded-lg">
            <h6 className="font-bold text-gray-400">Earnings</h6>
            <p className="text-xl font-light">₦20,000,000</p>
            <SingleAreaChart />
          </div>
          <div className="  sm:min-w-[300px] min-w-full  dark:text-white flex-1 flex flex-col gap-6">
            <div className="flex flex-col flex-1 gap-2 bg-white dark:bg-secondary-dark-bg shadow p-4 rounded-lg ">
              <div className="h-14 w-14 bg-yellow-100 text-yellow-400 text-xl flex-center justify-center rounded-full">
                <FiUsers />
              </div>
              <div className="">
                <h6 className="font-bold text-gray-400">New visitors</h6>
                <div className="flex-center-between">
                  <p className="text-xl font-light">50</p>{" "}
                  <span className="block text-xs text-green-400 flex-center gap-2">
                    <TrendingUp className="h-4 w-4" /> 20%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-2 bg-white dark:bg-secondary-dark-bg shadow p-4 rounded-lg ">
              <div className="h-14 w-14 bg-red-100 text-red-400 text-xl flex-center justify-center rounded-full">
                <FiActivity />
              </div>
              <div className="">
                <h6 className="font-bold text-gray-400">Activity</h6>

                <div className="flex-center-between">
                  <p className="text-xl font-light">83%</p>{" "}
                  <span className="block text-xs text-red-400 flex-center gap-2">
                    <TrendingDown className="h-4 w-4" /> -20%
                  </span>
                </div>
              </div>
            </div>
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
          <div className="bg-white dark:bg-secondary-dark-bg   flex-1 p-4     shadow rounded-lg">
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
                dataKey="revenue"
                chartConfig={chartConfig}
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
                dataKey={"revenue"}
                chartConfig={chartConfig}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6  flex-wrap">
          <div className="sm:min-w-[300px] min-w-full bg-white dark:bg-secondary-dark-bg    flex-1 p-4     shadow rounded-lg">
            <h4 className="sm:text-xl font-semibold text-gray-400 mb-6">
              Top 5 servies
            </h4>
            <div className="flex flex-col gap-4">
              {syncedServices.slice(0, 5).map((service, index) => (
                <div className="flex-center-between gap-4" key={index}>
                  <div className="flex-center gap-4">
                    <div
                      className={`h-11 w-11 rounded-lg flex-center justify-center text-2xl`}
                      style={{
                        backgroundColor: service.bgColor,
                        color: service.color,
                      }}
                    >
                      {service?.icon}
                    </div>
                    <p className="font-semibold capitalize">{service?.name}</p>
                  </div>
                  <p className="text-gray-400">
                    {formatNumber(service?.amount)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:min-w-[300px] min-w-full bg-white dark:bg-secondary-dark-bg    flex-1 p-4     shadow rounded-lg">
            <h4 className="sm:text-xl font-semibold text-gray-400 mb-6">
              Top 5 transactions
            </h4>
            <div className="flex flex-col gap-4">
              {topTransactions.slice(0, 5).map((transaction, index) => (
                <div className="flex-center-between gap-4" key={index}>
                  <div className="">
                    <p className="font-semibold capitalize">
                      {transaction?.firstName} {transaction?.lastName}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {transaction.service}
                    </p>
                  </div>
                  <p className="text-gray-400">
                    {formatNumber(transaction?.amount)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:min-w-[300px] min-w-full flex-1">
            {" "}
            <UserPieChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
