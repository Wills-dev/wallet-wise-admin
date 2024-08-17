import React from "react";
import { Modal } from "antd";

const ViewRolePermission = ({ open, onCancel }) => {
  return (
    <Modal open={open} onCancel={onCancel} width={700} footer={null}>
      <div className=" w-full  p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Admin Role permissions</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex-center-between">
            <h6 className=""> User Management</h6>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-500 py-1 px-3 rounded-md">
                Read
              </button>
              <button className="bg-green-100 text-green-500 py-1 px-3 rounded-md">
                Write
              </button>
              <button className="bg-blue-100 text-blue-500 py-1 px-3 rounded-md">
                Create
              </button>
            </div>
          </div>
          <div className="flex-center-between">
            <h6 className=""> Admin Management Management</h6>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-500 py-1 px-3 rounded-md">
                Read
              </button>
              <button className="bg-blue-100 text-blue-500 py-1 px-3 rounded-md">
                Create
              </button>
            </div>
          </div>
          <div className="flex-center-between">
            <h6 className="">Admin Management</h6>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-500 py-1 px-3 rounded-md">
                Read
              </button>
              <button className="bg-green-100 text-green-500 py-1 px-3 rounded-md">
                Write
              </button>
              <button className="bg-blue-100 text-blue-500 py-1 px-3 rounded-md">
                Create
              </button>
            </div>
          </div>
          <div className="flex-center-between">
            <h6 className="">Ticket Management</h6>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-500 py-1 px-3 rounded-md">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewRolePermission;
