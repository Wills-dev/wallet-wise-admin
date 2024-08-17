import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import SummaryCard from "@/components/SummaryCard/SummaryCard";

import { userSummary, users } from "@/contants";
import { userColumns } from "./userColums";
import { DataTable } from "@/components/TableComponent/DataTable";

const ManageUsers = () => {
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <SummaryCard data={userSummary} />
        <div className="w-full ">
          <DataTable columns={userColumns} data={users} searchValue="email" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;
