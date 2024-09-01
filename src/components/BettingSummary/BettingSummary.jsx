import { motion } from "framer-motion";

import { SingleBarChart } from "../SingleBarChart/SingleBarChart";
import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";

const BettingSummary = () => {
  const airtimeSummary = [
    { month: "January", company: 16 },
    { month: "February", company: 35 },
    { month: "March", company: 97 },
    { month: "April", company: 73 },
    { month: "May", company: 129 },
    { month: "June", company: 24 },
    { month: "July", company: 64 },
    { month: "August", company: 54 },
    { month: "September", company: 74 },
    { month: "October", company: 25 },
    { month: "November", company: 84 },
    { month: "December", company: 20 },
  ];

  const chartDataService = [
    { company: "Sportybet", volume: 406 },
    { company: "Bet9ja", volume: 305 },
    { company: "Nairabet", volume: 237 },
    { company: "1xBet", volume: 73 },
    { company: "Bet360", volume: 209 },
    { company: "BetKING", volume: 29 },
  ];

  const chartConfigService = {
    company: {
      label: "Bet Company",
      color: "#1F316F",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  const chartConfig = {
    company: {
      label: "Transaction Volume",
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
      <div className="w-full pt-6">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Transaction by bet company"
          subTitle="Volume of transaction per bet company"
          type="company"
          value="volume"
          color="#1F316F"
        />
      </div>
      <div className="pt-6 w-full ">
        <SingleBarChart
          dataTitle="transaction volume on bets"
          barColor="#478CCF"
          chartData={airtimeSummary}
          dataKey={"company"}
          chartConfig={chartConfig}
        />
      </div>
    </motion.div>
  );
};

export default BettingSummary;
