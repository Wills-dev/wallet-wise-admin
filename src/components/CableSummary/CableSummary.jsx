import { motion } from "framer-motion";

import { SingleBarChart } from "../SingleBarChart/SingleBarChart";
import { PieChartTickets } from "../Charts/PieChartTickets";
import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";

const CableSummary = () => {
  const cableSummary = [
    { month: "January", cable: 16 },
    { month: "February", cable: 35 },
    { month: "March", cable: 97 },
    { month: "April", cable: 73 },
    { month: "May", cable: 129 },
    { month: "June", cable: 24 },
    { month: "July", cable: 64 },
    { month: "August", cable: 54 },
    { month: "September", cable: 74 },
    { month: "October", cable: 25 },
    { month: "November", cable: 84 },
    { month: "December", cable: 20 },
  ];

  const chartDataService = [
    { service: "Netflix", volume: 186 },
    { service: "DSTV", volume: 305 },
    { service: "GOTV", volume: 237 },
    { service: "SHOWMAX", volume: 73 },
    { service: "Prime", volume: 209 },
    { service: "HULU", volume: 29 },
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
    { status: "completed", cable: 275, fill: "#1F316F" },
    { status: "pending", cable: 187, fill: "#478CCF" },
    { status: "cancelled", cable: 173, fill: "#36C2CE" },
  ];
  const chartConfigTicketsPriority = {
    cable: {
      label: "Volume",
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
    cable: {
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
          dataTitle="Cable"
          barColor="#1F316F"
          chartData={cableSummary}
          dataKey={"cable"}
          chartConfig={chartConfig}
        />
        <PieChartTickets
          chartConfig={chartConfigTicketsPriority}
          chartData={chartDataTicketsPriority}
          nameKey1="cable"
          nameKey2="status"
          dataKey="cable"
          title="Transaction by status"
          subTitle="Distribution of cable across status levels"
        />
      </div>
      <div className="w-full pt-6">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Cable by provider"
          subTitle="Volume of transaction per provider"
          type="service"
          value="volume"
          color="#478CCF"
        />
      </div>
    </motion.div>
  );
};

export default CableSummary;
