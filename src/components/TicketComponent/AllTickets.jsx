import React from "react";

import { motion } from "framer-motion";

import { DataTable } from "@/components/TableComponent/DataTable";
import { columns } from "@/pages/Tickets/columns";
import { data, generalAnalytics } from "@/contants";
import SummaryCard from "../SummaryCard/SummaryCard";

const AllTickets = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      }}
      className=""
    >
      <SummaryCard data={generalAnalytics} />
      <div className="w-full py-10">
        <DataTable columns={columns} data={data} searchValue="email" />
      </div>
    </motion.div>
  );
};

export default AllTickets;
