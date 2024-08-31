import { motion } from "framer-motion";

import { DataTable } from "../TableComponent/DataTable";
import { cableColumn } from "@/pages/Cable/cableColumn";
import { allData } from "@/contants";

const CableHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      }}
    >
      <div className="w-full py-10">
        <DataTable columns={cableColumn} data={allData} searchValue="" />
      </div>
    </motion.div>
  );
};

export default CableHistory;
