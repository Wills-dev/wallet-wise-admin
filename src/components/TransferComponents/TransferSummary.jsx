import { motion } from "framer-motion";
import { BarChartSingle } from "../Charts/BarChartSingle";
import { chartData3, chartData4 } from "@/contants";
import { AreaChartDouble } from "../Charts/AreaChartDouble";

const TransferSummary = ({ currentColor }) => {
  const chartConfig = {
    walletwiseAccount: {
      label: "Walletwise account",
      color: "#696cff",
    },
    localAccount: {
      label: "Local account",
      color: "#3FA2F6",
    },
  };

  const chartConfig2 = {
    averageTransfer: {
      label: "Average transfer",
      color: currentColor,
    },
  };

  const chartDataService = [
    { service: "data", ticket: 186 },
    { service: "airtime", ticket: 305 },
    { service: "electricity", ticket: 237 },
    { service: "book flight", ticket: 73 },
    { service: "cable", ticket: 209 },
    { service: "betting", ticket: 214 },
    { service: "gift cards", ticket: 305 },
    { service: "hotel reservations", ticket: 237 },
    { service: "virtual card", ticket: 73 },
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
        <BarChartSingle
          chartConfig={chartConfig2}
          chartData={chartData3}
          description=" Average transfers created by day of the week"
          color={currentColor}
          dataKey="averageTransfer"
        />
        <AreaChartDouble
          chartData={chartData4}
          chartConfig={chartConfig}
          firstDataKey="walletwiseAccount"
          firstDataColor="#696cff"
          secondDataKey="localAccount"
          secondDataColor="#3FA2F6"
        />
      </div>
    </motion.div>
  );
};

export default TransferSummary;
