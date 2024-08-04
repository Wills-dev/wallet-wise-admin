import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

const Tickets = () => {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d442",
      amount: 125,
      status: "processing",
      email: "lyth@gmail.com",
    },
    {
      id: "4839e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "489e1d422",
      amount: 125,
      status: "processing",
      email: "exam@gmail.com",
    },
    {
      id: "48922d42",
      amount: 125,
      status: "processing",
      email: "fly@gmail.com",
    },
    {
      id: "48931d4234",
      amount: 125,
      status: "processing",
      email: "victor@gmail.com",
    },
    {
      id: "489e1d4244",
      amount: 125,
      status: "processing",
      email: "zagadate@gmail.com",
    },
    {
      id: "489e1d4774",
      amount: 125,
      status: "processing",
      email: "thole@gmail.com",
    },
    {
      id: "489e64244",
      amount: 125,
      status: "processing",
      email: "gol@gmail.com",
    },
    {
      id: "48944d4244",
      amount: 125,
      status: "processing",
      email: "sluu@gmail.com",
    },
    {
      id: "489443244",
      amount: 125,
      status: "processing",
      email: "judah@gmail.com",
    },
    {
      id: "48244",
      amount: 125,
      status: "processing",
      email: "kelechi@gmail.com",
    },
  ];
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
        <div className="w-full py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tickets;
