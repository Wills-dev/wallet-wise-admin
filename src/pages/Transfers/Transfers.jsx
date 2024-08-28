import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { useStateContext } from "@/context/ContextProvider";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import SummaryCard from "@/components/SummaryCard/SummaryCard";
import TransferSummary from "@/components/TransferComponents/TransferSummary";
import AllTransfers from "@/components/TransferComponents/AllTransfers";

const Transfers = () => {
  const { currentColor } = useStateContext();
  const [currentLink, setCurrentLink] = useState(0);

  const transferLinks = ["Transfer summary", "All transfers"];
  const generalAnalytics = [
    {
      title: "Total transactions",
      value: "₦500,000,000,000",
    },
    {
      title: "All transfers",
      value: "1,000",
    },
    {
      title: "Completed transfers",
      value: "30",
    },
    {
      title: "Cancelled transfers",
      value: "5",
    },
  ];
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="flex border-b-1 mb-5 w-full bg-white dark:bg-secondary-dark-bg z-50 overflow-x-auto">
            {transferLinks.map((link, index) => (
              <p
                key={index}
                className={`px-3 whitespace-nowrap py-2 cursor-pointer hover:text-[#696cff] text-sm transition-all text-gray-400 font-medium`}
                onClick={() => setCurrentLink(index)}
                style={{ color: currentLink === index && currentColor }}
              >
                {link}
              </p>
            ))}
          </div>
          <SummaryCard data={generalAnalytics} />
          <AnimatePresence>
            {currentLink === 0 && (
              <TransferSummary currentColor={currentColor} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {currentLink === 1 && <AllTransfers />}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transfers;
