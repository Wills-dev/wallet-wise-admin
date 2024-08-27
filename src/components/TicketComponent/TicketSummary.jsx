import React from "react";

import { motion } from "framer-motion";

import {
  chartConfigTickets,
  chartConfigTicketsPriority,
  chartData,
  chartData2,
  chartDataTickets,
  chartDataTicketsPriority,
  generalAnalytics,
} from "@/contants";

import { BarChartSingle } from "../Charts/BarChartSingle";
import { AreaChartDouble } from "../Charts/AreaChartDouble";
import { PieChartTickets } from "../Charts/PieChartTickets";
import { DonutPieChart } from "../Charts/DonutPieChart";
import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";

import SummaryCard from "../SummaryCard/SummaryCard";

const TicketSummary = ({ currentColor }) => {
  const chartConfig = {
    createdTickets: {
      label: "Created  tickets",
      color: "#696cff",
    },
    solvedTickets: {
      label: "Solved tickets",
      color: "#3FA2F6",
    },
  };

  const chartConfig2 = {
    averageTickets: {
      label: "Average tickets",
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
      className=""
    >
      <SummaryCard data={generalAnalytics} />
      <div className="flex gap-6 pt-6 w-full max-xl:flex-col">
        <AreaChartDouble
          chartData={chartData}
          chartConfig={chartConfig}
          firstDataKey="createdTickets"
          firstDataColor="#696cff"
          secondDataKey="solvedTickets"
          secondDataColor="#3FA2F6"
        />
        <BarChartSingle
          chartConfig={chartConfig2}
          chartData={chartData2}
          description=" Average tickets created by day of the week"
          color={currentColor}
          dataKey="averageTickets"
        />
      </div>
      <div className="flex gap-6 w-full flex-wrap py-6">
        <PieChartTickets
          chartConfig={chartConfigTickets}
          chartData={chartDataTickets}
          nameKey1="tickets"
          nameKey2="status"
          dataKey="tickets"
          title="Tickets by Status"
          subTitle="Breakdown of tickets by their current status"
        />
        <PieChartTickets
          chartConfig={chartConfigTicketsPriority}
          chartData={chartDataTicketsPriority}
          nameKey1="tickets"
          nameKey2="priority"
          dataKey="tickets"
          title="Tickets by Priority"
          subTitle="Distribution of tickets across priority levels"
        />
        <DonutPieChart />
      </div>
      <div className="flex">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Tickets by Services"
          subTitle="Number of tickets per service"
          type="service"
          value="ticket"
          color="#1F316F"
        />
      </div>
    </motion.div>
  );
};

export default TicketSummary;
