import React from "react";
import { Link } from "react-router-dom";

import { FaqSummary, dataFAQ } from "@/contants";
import { faqColumns } from "./faqColumns";
import { useStateContext } from "@/context/ContextProvider";

import SummaryCard from "@/components/SummaryCard/SummaryCard";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { DataTable } from "@/components/TableComponent/DataTable";

const Faq = () => {
  const { currentColor } = useStateContext();

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <SummaryCard data={FaqSummary} />
        <div className="flex justify-end">
          <Link
            to="/faq/create"
            className="px-4 py-2 rounded hover:opacity-90 text-white text-sm transition-all"
            style={{ backgroundColor: currentColor }}
          >
            Create new FAQ
          </Link>
        </div>
        <div className="w-full ">
          <DataTable columns={faqColumns} data={dataFAQ} searchValue="title" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Faq;
