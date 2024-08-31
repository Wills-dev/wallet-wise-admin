import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import CableSummary from "@/components/CableSummary/CableSummary";
import CableHistory from "@/components/CableHistory/CableHistory";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import SummaryCard from "@/components/SummaryCard/SummaryCard";

import { dashboardLinks } from "@/contants";
import { useStateContext } from "@/context/ContextProvider";

const Cable = () => {
  const { currentColor } = useStateContext();
  const [currentLink, setCurrentLink] = useState(0);
  const generalAnalytics = [
    {
      title: "Total transactions",
      value: "₦500,000",
    },

    {
      title: "Completed transactions",
      value: "30",
    },
    {
      title: "Pending transactions",
      value: "1,000",
    },
    {
      title: "Cancelled transactions",
      value: "5",
    },
  ];

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="flex border-b-1 mb-5 w-full bg-white dark:bg-secondary-dark-bg z-50 overflow-x-auto">
            {dashboardLinks.map((link, index) => (
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
            {currentLink === 0 && <CableSummary />}
          </AnimatePresence>
          <AnimatePresence>
            {currentLink === 1 && <CableHistory />}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cable;
