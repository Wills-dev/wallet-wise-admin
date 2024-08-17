import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import SummaryCard from "@/components/SummaryCard/SummaryCard";
import CreateAdminModal from "@/components/Modals/CreateAdminModal";

import { AdminSummary, dataAdmin } from "@/contants";
import { useStateContext } from "@/context/ContextProvider";
import { useCreateAdmin } from "@/hooks/useCreateAdmin";
import { DataTable } from "@/components/TableComponent/DataTable";
import { adminColumns } from "./adminColumns";

const ManageAdmin = () => {
  const { currentColor } = useStateContext();
  const {
    handleChange,
    handleSubmit,
    onCancel,
    setOpenModal,
    openModal,
    loading,
    adminDetails,
  } = useCreateAdmin();
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <SummaryCard data={AdminSummary} />
        <div className="flex justify-end">
          <CreateAdminModal
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={onCancel}
            openModal={openModal}
            loading={loading}
            adminDetails={adminDetails}
            currentColor={currentColor}
          />
          <button
            className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all"
            style={{ backgroundColor: currentColor }}
            onClick={() => setOpenModal(true)}
          >
            Create new admin
          </button>
        </div>
        <div className="w-full ">
          <DataTable
            columns={adminColumns}
            data={dataAdmin}
            searchValue="email"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageAdmin;
