import React from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useStateContext } from "@/context/ContextProvider";

const FaqInfo = () => {
  const { currentColor } = useStateContext();
  const faq = {
    title: "How can I reset my password?",
    description:
      'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions. You will receive an email with a link to reset your password.',
    category: "Account",
  };
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 ">
        <div className="flex-center-between">
          <h2 className="text-2xl font-semibold dark:text-white">
            {" "}
            FAQ Details
          </h2>
          <Link
            to="/faq/edit/1"
            className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all"
            style={{ backgroundColor: currentColor }}
          >
            Edit FAQ
          </Link>
        </div>

        <div className="py-10">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-indigo-600">
                {faq.category}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-4">{faq.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {faq.description}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FaqInfo;
