import React from "react";

import { motion } from "framer-motion";

import { SingleInnerBarChart } from "../Charts/SingleInnerBarChart";
import { columnsAssignee } from "./columnsAssignee";
import { DataTable } from "@/components/TableComponent/DataTable";
import { dataAssignee } from "@/contants";
import SummaryCard from "../SummaryCard/SummaryCard";
import DoubleInnerBarChart from "../Charts/DoubleInnerBarChart";

const AssigneeActivity = () => {
  const generalAnalytics = [
    {
      title: "Total Tickets Handled",
      value: "1000",
    },
    {
      title: "Resolution Rate",
      value: "88%",
    },
    {
      title: "Average Response Time",
      value: "10min",
    },
    {
      title: "Average Resolution Time",
      value: "2hrs",
    },
  ];

  const chartDataService = [
    { agent: "Ola", ticket: 186 },
    { agent: "Samuel", ticket: 305 },
    { agent: "Victor", ticket: 237 },
    { agent: "Mr Me", ticket: 73 },
    { agent: "Ugochi", ticket: 209 },
    { agent: "Sandra", ticket: 214 },
    { agent: "Gift", ticket: 305 },
  ];

  const chartConfigService = {
    agent: {
      label: "Agent",
      color: "#1F316F",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  const chartDataResolutionRate = [
    { agent: "Ola", ticket: 86 },
    { agent: "Samuel", ticket: 30 },
    { agent: "Victor", ticket: 23 },
    { agent: "Mr Me", ticket: 73 },
    { agent: "Ugochi", ticket: 20 },
    { agent: "Sandra", ticket: 14 },
    { agent: "Gift", ticket: 5 },
  ];

  const chartConfigResolutionRate = {
    agent: {
      label: "Agent",
      color: "#36C2CE",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  const chartDataResolutionRespond = [
    { agent: "Ola", averageResponseTime: 186, averageResolutionTime: 80 },
    { agent: "Samuel", averageResponseTime: 305, averageResolutionTime: 200 },
    { agent: "Victor", averageResponseTime: 237, averageResolutionTime: 120 },
    { agent: "Mr Me", averageResponseTime: 73, averageResolutionTime: 190 },
    { agent: "Ugochi", averageResponseTime: 209, averageResolutionTime: 130 },
    { agent: "Sandra", averageResponseTime: 214, averageResolutionTime: 140 },
    { agent: "Gift", averageResponseTime: 305, averageResolutionTime: 200 },
  ];

  const chartConfigResolutionRespond = {
    averageResponseTime: {
      label: "Average Response Time",
      color: "hsl(var(--chart-1))",
    },
    averageResolutionTime: {
      label: "Average Resolution Time",
      color: "hsl(var(--chart-2))",
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
      <div className="flex flex-col gap-6 pt-6">
        <SingleInnerBarChart
          chartData={chartDataService}
          chartConfig={chartConfigService}
          title="Total Tickets Handled"
          subTitle="The total number of tickets each agent has handled"
          type="agent"
          value="ticket"
          color="#1F316F"
        />
        <SingleInnerBarChart
          chartData={chartDataResolutionRate}
          chartConfig={chartConfigResolutionRate}
          title="Resolution Rate"
          subTitle="The percentage of tickets resolved by each agent out of the total number of tickets assigned"
          type="agent"
          value="ticket"
          color="#36C2CE"
        />
        <DoubleInnerBarChart
          title="Average Response Time  & Average Resolution Time"
          subTitle="The average time taken by each agent to respond & or resolved ticket after it has been assigned"
          type="agent"
          value1="averageResponseTime"
          value2="averageResolutionTime"
          color1="#1F316F"
          color2="#36C2CE"
          chartConfig={chartConfigResolutionRespond}
          chartData={chartDataResolutionRespond}
        />
        <div className="w-full py-10">
          <DataTable
            columns={columnsAssignee}
            data={dataAssignee}
            searchValue="agent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AssigneeActivity;
