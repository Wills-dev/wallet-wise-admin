import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useStateContext } from "@/context/ContextProvider";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import CreateRoleModal from "@/components/Modals/CreateRoleModal";
import ViewRolePermission from "@/components/Modals/ViewRolePermission";

const Roles = () => {
  const { currentColor } = useStateContext();
  const [openModal, setOpenModal] = useState();
  const [openPermissionModal, setOpenPermissionModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenPermissionModal(false);
  };

  return (
    <DashboardLayout>
      <CreateRoleModal onClose={onClose} openModal={openModal} />
      <ViewRolePermission onCancel={onCancel} open={openPermissionModal} />
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <h2 className="text-2xl font-semibold dark:text-white">
          Roles & Permission
        </h2>
        <div className="flex gap-6 flex-wrap">
          <div className=" bg-white dark:bg-secondary-dark-bg dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 ">Total 4 users</h4>
            <h1 className="sm:text-xl text-lg font-semibold pt-5">
              Administrator
            </h1>
            <div className="flex items-center gap-3 justify-between mt-2">
              <button
                className="flex items-center gap-1"
                style={{ color: currentColor }}
                onClick={() => setOpenModal(true)}
              >
                <CiEdit /> Edit role
              </button>
              <button
                className="flex items-center gap-1 text-sm"
                style={{ color: currentColor }}
                onClick={() => setOpenPermissionModal(true)}
              >
                <FaRegEye />
                View permission
              </button>
            </div>
          </div>
          <div className=" bg-white dark:bg-secondary-dark-bg dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 ">Total 4 users</h4>
            <h1 className="sm:text-xl text-lg font-semibold pt-5">Manager</h1>
            <div className="flex items-center gap-3 justify-between mt-2">
              <button
                className="flex items-center gap-1"
                style={{ color: currentColor }}
                onClick={() => setOpenModal(true)}
              >
                <CiEdit /> Edit role
              </button>
              <button
                className="flex items-center gap-1 text-sm"
                style={{ color: currentColor }}
                onClick={() => setOpenPermissionModal(true)}
              >
                <FaRegEye />
                View permission
              </button>
            </div>
          </div>
          <div className=" bg-white dark:bg-secondary-dark-bg dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 ">Total 4 users</h4>
            <h1 className="sm:text-xl text-lg font-semibold pt-5">
              Support agent
            </h1>
            <div className="flex items-center gap-3 justify-between mt-2">
              <button
                className="flex items-center gap-1"
                style={{ color: currentColor }}
                onClick={() => setOpenModal(true)}
              >
                <CiEdit /> Edit role
              </button>
              <button
                className="flex items-center gap-1 text-sm"
                style={{ color: currentColor }}
                onClick={() => setOpenPermissionModal(true)}
              >
                <FaRegEye />
                View permission
              </button>
            </div>
          </div>
          <div className=" bg-white dark:bg-secondary-dark-bg dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]">
            <h4 className="text-gray-400 ">
              {" "}
              Add new role, <br />
              if it doesn't exist.
            </h4>

            <div className="flex items-center gap-3 justify-between mt-2">
              <button
                className="px-4 py-1 rounded hover:opacity-90 text-white text-sm transition-all"
                style={{ backgroundColor: currentColor }}
                onClick={() => setOpenModal(true)}
              >
                Add New Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
