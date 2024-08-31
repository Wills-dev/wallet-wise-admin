import { motion } from "framer-motion";

import { SingleBarChart } from "../SingleBarChart/SingleBarChart";
import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";
import { PieChartTickets } from "../Charts/PieChartTickets";

const DataSummary = () => {
  const dataSummary = [
    { month: "January", data: 16 },
    { month: "February", data: 35 },
    { month: "March", data: 97 },
    { month: "April", data: 73 },
    { month: "May", data: 129 },
    { month: "June", data: 24 },
    { month: "July", data: 64 },
    { month: "August", data: 54 },
    { month: "September", data: 74 },
    { month: "October", data: 25 },
    { month: "November", data: 84 },
    { month: "December", data: 20 },
  ];

  const chartDataService = [
    { service: "MTN", volume: 466 },
    { service: "GLO", volume: 305 },
    { service: "ETISALAT", volume: 237 },
    { service: "AIRTEL", volume: 73 },
    { service: "NGCOM", volume: 209 },
    { service: "SPECTRANET", volume: 89 },
    { service: "STARLINK", volume: 9 },
  ];

  const chartConfigService = {
    service: {
      label: "Service",
      color: "#1F316F",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  const chartDataTicketsPriority = [
    { status: "completed", data: 275, fill: "#1F316F" },
    { status: "pending", data: 187, fill: "#478CCF" },
    { status: "cancelled", data: 173, fill: "#36C2CE" },
  ];
  const chartConfigTicketsPriority = {
    data: {
      label: "Transaction status",
    },
    completed: {
      label: "Completed",
    },

    pending: {
      label: "Pending",
    },
    cancelled: {
      label: "Cancelled",
    },
  };

  const chartConfig = {
    data: {
      label: "Volume",
      color: "hsl(var(--chart-1))",
    },
  };

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
      <div className="flex gap-6 pt-6 w-full max-xl:flex-col">
        <SingleBarChart
          dataTitle="Data"
          barColor="#36C2CE"
          chartData={dataSummary}
          dataKey={"data"}
          chartConfig={chartConfig}
        />
        <PieChartTickets
          chartConfig={chartConfigTicketsPriority}
          chartData={chartDataTicketsPriority}
          nameKey1="data"
          nameKey2="status"
          dataKey="data"
          title="Airtime by status"
          subTitle="Distribution of data across status levels"
        />
      </div>
      <div className="w-full pt-6">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Transaction volume"
          subTitle="Volume of transaction per service"
          type="service"
          value="volume"
          color="#1F316F"
        />
      </div>
    </motion.div>
  );
};

export default DataSummary;
