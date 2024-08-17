import React, { useState } from "react";

import ReactQuill from "react-quill";

import { useStateContext } from "@/context/ContextProvider";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const FaqEdit = () => {
  const { currentColor } = useStateContext();
  const [description, setDescription] = useState("");

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 ">
        <h2 className="text-2xl font-semibold dark:text-white">Edit FAQ</h2>
        <form
          action=""
          className="sm:p-6 px-3 py-4 gap-6 flex flex-col w-full bg-white dark:bg-secondary-dark-bg shadow rounded-lg"
        >
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="title"
              className="font-medium text-sm text-gray-500"
            >
              FAQ Title*
            </label>
            <input
              type="text"
              name=""
              id="title"
              className="w-full   h-11 outline-none px-2  focus:border-pri-color border-1"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="catgory"
              className="font-medium text-sm text-gray-500"
            >
              FAQ Categories*
            </label>

            <select
              id="category"
              className="w-full   h-11 outline-none px-2  focus:border-pri-color border-1"
            >
              <option defaultValue="">Select category</option>
              <option value="Arts & Design">Cable</option>
            </select>
            <p className="text-xs text-gray-500">
              The category help people use the search criteria to find your FAQ.
            </p>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="description"
              className="font-medium text-sm text-gray-500"
            >
              Description
            </label>
            <ReactQuill
              value={description}
              theme="snow"
              modules={{
                toolbar: [
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  [{ align: [] }],
                  ["clean"],
                ],
              }}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all w-fit"
              style={{ backgroundColor: currentColor }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default FaqEdit;
