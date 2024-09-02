import { AnimatePresence, motion } from "framer-motion";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import SummaryCard from "@/components/SummaryCard/SummaryCard";

import { DataTable } from "@/components/TableComponent/DataTable";
import { kycColumn } from "./kycColumn";

const ManageKyc = () => {
  const generalAnalytics = [
    {
      title: "Total KYC",
      value: "1,000",
    },

    {
      title: "Pending KYC",
      value: "30",
    },
    {
      title: "Approved KYC",
      value: "900",
    },
    {
      title: "Declined KYC",
      value: "5",
    },
  ];

  const kycData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      status: "Pending",
      submissionDate: "2024-08-15",
      verificationDate: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+0987654321",
      status: "Approved",
      submissionDate: "2024-08-10",
      verificationDate: "2024-08-12",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      phone: "+1122334455",
      status: "Declined",
      submissionDate: "2024-08-11",
      verificationDate: "2024-08-13",
    },
  ];

  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <SummaryCard data={generalAnalytics} />

          <AnimatePresence>
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
                <DataTable columns={kycColumn} data={kycData} searchValue="" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageKyc;
