import { motion } from "framer-motion";

import { SingleBarChart } from "../SingleBarChart/SingleBarChart";
import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";
import { PieChartTickets } from "../Charts/PieChartTickets";

const AirtimeSummary = () => {
  const airtimeSummary = [
    { month: "January", airtime: 16 },
    { month: "February", airtime: 35 },
    { month: "March", airtime: 97 },
    { month: "April", airtime: 73 },
    { month: "May", airtime: 129 },
    { month: "June", airtime: 24 },
    { month: "July", airtime: 64 },
    { month: "August", airtime: 54 },
    { month: "September", airtime: 74 },
    { month: "October", airtime: 25 },
    { month: "November", airtime: 84 },
    { month: "December", airtime: 20 },
  ];

  const chartDataService = [
    { service: "MTN", volume: 186 },
    { service: "GLO", volume: 305 },
    { service: "ETISALAT", volume: 237 },
    { service: "AIRTEL", volume: 73 },
    { service: "NGCOM", volume: 209 },
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
    { status: "completed", airtime: 275, fill: "#1F316F" },
    { status: "pending", airtime: 187, fill: "#478CCF" },
    { status: "cancelled", airtime: 173, fill: "#36C2CE" },
  ];
  const chartConfigTicketsPriority = {
    airtime: {
      label: "No of airtime",
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
    airtime: {
      label: "Airtime",
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
          dataTitle="Airtime"
          barColor="#36C2CE"
          chartData={airtimeSummary}
          dataKey={"airtime"}
          chartConfig={chartConfig}
        />
        <PieChartTickets
          chartConfig={chartConfigTicketsPriority}
          chartData={chartDataTicketsPriority}
          nameKey1="airtime"
          nameKey2="status"
          dataKey="airtime"
          title="Airtime by status"
          subTitle="Distribution of airtime across status levels"
        />
      </div>
      <div className="w-full pt-6">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Airtime by Services"
          subTitle="Volume of airtime per service"
          type="service"
          value="volume"
          color="#1F316F"
        />
      </div>
    </motion.div>
  );
};

export default AirtimeSummary;
