import React from "react";
import { Modal } from "antd";
import { useStateContext } from "@/context/ContextProvider";

const CreateRoleModal = ({ openModal, onClose }) => {
  const { currentColor } = useStateContext();

  return (
    <Modal open={openModal} onCancel={onClose} width={700} footer={null}>
      {" "}
      <div className=" w-full  p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Role</h2>
        </div>

        <form>
          <div className="mb-4 ">
            <label className="block text-sm  text-gray-700">Role Name</label>
            <input
              type="text"
              placeholder="Enter a role name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg  text-gray-700 mb-5">
              Role Permissions
            </label>

            <div className="flex flex-col">
              <div className=" flex-center-between  py-4 border-t-1">
                <label
                  htmlFor="adminAccess"
                  className=" block text-sm text-gray-900"
                >
                  Administrator Access
                </label>
                <div className="flex-center gap-2">
                  <input
                    id="adminAccess"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="adminAccess"
                    className=" block text-sm text-gray-500"
                  >
                    Select all
                  </label>
                </div>
              </div>

              <div className="flex-center-between gap-4 py-4 border-t-1">
                <div>
                  <label className="block text-sm  text-gray-700">
                    User Management
                  </label>
                </div>
                <div className="flex-center-between sm:gap-12 gap-6">
                  <div className="flex items-center">
                    <input
                      id="userRead"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="userRead"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Read
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="userWrite"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="userWrite"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Write
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="userCreate"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="userCreate"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Create
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex-center-between gap-4 py-4 border-t-1">
                <div>
                  <label className="block text-sm  text-gray-700">
                    Admin Management
                  </label>
                </div>
                <div className="flex-center-between sm:gap-12 gap-6">
                  <div className="flex items-center">
                    <input
                      id="adminRead"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="adminRead"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Read
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="adminWrite"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="adminWrite"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Write
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="adminCreate"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="adminCreate"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Create
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-center-between gap-4 py-4 border-t-1">
                <div>
                  <label className="block text-sm  text-gray-700">
                    Ticket Management
                  </label>
                </div>
                <div className="flex-center-between sm:gap-12 gap-6">
                  <div className="flex items-center">
                    <input
                      id="ticketRead"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="ticketRead"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Read
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="ticketWrite"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="ticketWrite"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Write
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="ticketCreate"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="ticketCreate"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Create
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-center-between gap-4 py-4 border-t-1">
                <div>
                  <label className="block text-sm  text-gray-700">
                    Content Management
                  </label>
                </div>
                <div className="flex-center-between sm:gap-12 gap-6">
                  <div className="flex items-center">
                    <input
                      id="contentRead"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="contentRead"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Read
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="contentWrite"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="contentWrite"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Write
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="contentCreate"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="contentCreate"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Create
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all"
              style={{ backgroundColor: currentColor }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateRoleModal;
