import React from "react";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

import { AreaChartProfileRevenue } from "@/components/Charts/AreaChartProfitRevenue";
import { LineChartDataAirtime } from "@/components/Charts/LineChartDataAirtime";
import { BarChartServices } from "@/components/Charts/BarChartServices";
import { FromToDatePicker } from "@/components/FromToDatePicker/FromToDatePicker";
import { useStateContext } from "@/context/ContextProvider";
import { BarChartUsers } from "@/components/Charts/BarChartUsers";
import { PieChartUsers } from "@/components/Charts/PieChartUsers";

const Analytics = () => {
  const { currentColor } = useStateContext();
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className="flex-center gap-3">
          <label htmlFor="" className="text-gray-400">
            Filter data
          </label>{" "}
          <FromToDatePicker />
          <button
            className="px-3 h-8 rounded-full text-white flex-center justify-center"
            style={{ background: currentColor }}
          >
            submit
          </button>
        </div>
        <AreaChartProfileRevenue />
        <LineChartDataAirtime />
        <div className="flex flex-wrap-gap-6 max-md:hidden">
          <BarChartServices />
        </div>
        <div className="flex gap-6 max-lg:flex-col">
          <div className="flex-1">
            <BarChartUsers />
          </div>
          <div className="flex-1">
            <PieChartUsers />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
