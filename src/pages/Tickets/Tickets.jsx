import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const Tickets = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="flex gap-6 flex-wrap">
          <div className=" bg-white dark:bg-secondary-dark-bg shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 sm:text-xl">Total tickets</h4>
            <h1 className="sm:text-2xl text-lg font-bold pt-5">50</h1>
          </div>
          <div className=" bg-white dark:bg-secondary-dark-bg shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 sm:text-xl">Total open tickets</h4>
            <h1 className="sm:text-2xl text-lg font-bold pt-5">20</h1>
          </div>
          <div className=" bg-white dark:bg-secondary-dark-bg shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 sm:text-xl">Total closed tickets</h4>
            <h1 className="sm:text-2xl text-lg font-bold pt-5">30</h1>
          </div>
        </div>
        <div className="w-full overflow-x-auto"></div>
      </div>
    </DashboardLayout>
  );
};

export default Tickets;
