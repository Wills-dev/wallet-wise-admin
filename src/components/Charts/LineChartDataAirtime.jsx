"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatDuration } from "@/helperFunctions";
const chartData = [
  { date: "2024-04-01", data: 222, airtime: 150 },
  { date: "2024-04-02", data: 97, airtime: 180 },
  { date: "2024-04-03", data: 167, airtime: 120 },
  { date: "2024-04-04", data: 242, airtime: 260 },
  { date: "2024-04-05", data: 373, airtime: 290 },
  { date: "2024-04-06", data: 301, airtime: 340 },
  { date: "2024-04-07", data: 245, airtime: 180 },
  { date: "2024-04-08", data: 409, airtime: 320 },
  { date: "2024-04-09", data: 59, airtime: 110 },
  { date: "2024-04-10", data: 261, airtime: 190 },
  { date: "2024-04-11", data: 327, airtime: 350 },
  { date: "2024-04-12", data: 292, airtime: 210 },
  { date: "2024-04-13", data: 342, airtime: 380 },
  { date: "2024-04-14", data: 137, airtime: 220 },
  { date: "2024-04-15", data: 120, airtime: 170 },
  { date: "2024-04-16", data: 138, airtime: 190 },
  { date: "2024-04-17", data: 446, airtime: 360 },
  { date: "2024-04-18", data: 364, airtime: 410 },
  { date: "2024-04-19", data: 243, airtime: 180 },
  { date: "2024-04-20", data: 89, airtime: 150 },
  { date: "2024-04-21", data: 137, airtime: 200 },
  { date: "2024-04-22", data: 224, airtime: 170 },
  { date: "2024-04-23", data: 138, airtime: 230 },
  { date: "2024-04-24", data: 387, airtime: 290 },
  { date: "2024-04-25", data: 215, airtime: 250 },
  { date: "2024-04-26", data: 75, airtime: 130 },
  { date: "2024-04-27", data: 383, airtime: 420 },
  { date: "2024-04-28", data: 122, airtime: 180 },
  { date: "2024-04-29", data: 315, airtime: 240 },
  { date: "2024-04-30", data: 454, airtime: 380 },
  { date: "2024-05-01", data: 165, airtime: 220 },
  { date: "2024-05-02", data: 293, airtime: 310 },
  { date: "2024-05-03", data: 247, airtime: 190 },
  { date: "2024-05-04", data: 385, airtime: 420 },
  { date: "2024-05-05", data: 481, airtime: 390 },
  { date: "2024-05-06", data: 498, airtime: 520 },
  { date: "2024-05-07", data: 388, airtime: 300 },
  { date: "2024-05-08", data: 149, airtime: 210 },
  { date: "2024-05-09", data: 227, airtime: 180 },
  { date: "2024-05-10", data: 293, airtime: 330 },
  { date: "2024-05-11", data: 335, airtime: 270 },
  { date: "2024-05-12", data: 197, airtime: 240 },
  { date: "2024-05-13", data: 197, airtime: 160 },
  { date: "2024-05-14", data: 448, airtime: 490 },
  { date: "2024-05-15", data: 473, airtime: 380 },
  { date: "2024-05-16", data: 338, airtime: 400 },
  { date: "2024-05-17", data: 499, airtime: 420 },
  { date: "2024-05-18", data: 315, airtime: 350 },
  { date: "2024-05-19", data: 235, airtime: 180 },
  { date: "2024-05-20", data: 177, airtime: 230 },
  { date: "2024-05-21", data: 82, airtime: 140 },
  { date: "2024-05-22", data: 81, airtime: 120 },
  { date: "2024-05-23", data: 252, airtime: 290 },
  { date: "2024-05-24", data: 294, airtime: 220 },
  { date: "2024-05-25", data: 201, airtime: 250 },
  { date: "2024-05-26", data: 213, airtime: 170 },
  { date: "2024-05-27", data: 420, airtime: 460 },
  { date: "2024-05-28", data: 233, airtime: 190 },
  { date: "2024-05-29", data: 78, airtime: 130 },
  { date: "2024-05-30", data: 340, airtime: 280 },
  { date: "2024-05-31", data: 178, airtime: 230 },
  { date: "2024-06-01", data: 178, airtime: 200 },
  { date: "2024-06-02", data: 470, airtime: 410 },
  { date: "2024-06-03", data: 103, airtime: 160 },
  { date: "2024-06-04", data: 439, airtime: 380 },
  { date: "2024-06-05", data: 88, airtime: 140 },
  { date: "2024-06-06", data: 294, airtime: 250 },
  { date: "2024-06-07", data: 323, airtime: 370 },
  { date: "2024-06-08", data: 385, airtime: 320 },
  { date: "2024-06-09", data: 438, airtime: 480 },
  { date: "2024-06-10", data: 155, airtime: 200 },
  { date: "2024-06-11", data: 92, airtime: 150 },
  { date: "2024-06-12", data: 492, airtime: 420 },
  { date: "2024-06-13", data: 81, airtime: 130 },
  { date: "2024-06-14", data: 426, airtime: 380 },
  { date: "2024-06-15", data: 307, airtime: 350 },
  { date: "2024-06-16", data: 371, airtime: 310 },
  { date: "2024-06-17", data: 475, airtime: 520 },
  { date: "2024-06-18", data: 107, airtime: 170 },
  { date: "2024-06-19", data: 341, airtime: 290 },
  { date: "2024-06-20", data: 408, airtime: 450 },
  { date: "2024-06-21", data: 169, airtime: 210 },
  { date: "2024-06-22", data: 317, airtime: 270 },
  { date: "2024-06-23", data: 480, airtime: 530 },
  { date: "2024-06-24", data: 132, airtime: 180 },
  { date: "2024-06-25", data: 141, airtime: 190 },
  { date: "2024-06-26", data: 434, airtime: 380 },
  { date: "2024-06-27", data: 448, airtime: 490 },
  { date: "2024-06-28", data: 149, airtime: 200 },
  { date: "2024-06-29", data: 103, airtime: 160 },
  { date: "2024-06-30", data: 446, airtime: 400 },
];

const chartConfig = {
  views: {
    label: "Revenue",
  },
  data: {
    label: "Data",
    color: "hsl(var(--chart-1))",
  },
  airtime: {
    label: "Airtime",
    color: "hsl(var(--chart-2))",
  },
};

export function LineChartDataAirtime() {
  const [activeChart, setActiveChart] = React.useState("airtime");
  const [timeRange, setTimeRange] = React.useState("90");

  const total = React.useMemo(
    () => ({
      data: chartData.reduce((acc, curr) => acc + curr.data, 0),
      airtime: chartData.reduce((acc, curr) => acc + curr.airtime, 0),
    }),
    []
  );

  return (
    <Card className=" w-full dark:bg-secondary-dark-bg rounded-lg shadow border-none">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-start gap-1 px-6 py-5 sm:py-6">
          <div className="flex-center-between flex-wrap gap-4">
            <CardTitle className="font-light max-sm:text-sm">
              Data & Airtime summary
            </CardTitle>
            <Select
              value={timeRange}
              onValueChange={setTimeRange}
              className="sm:ml-0"
            >
              <SelectTrigger
                className="w-[160px] rounded-lg sm:ml-auto"
                aria-label="Select a value"
              >
                <SelectValue placeholder="filter by" />
              </SelectTrigger>
              <SelectContent className="rounded-xl max-sm:text-sm">
                <SelectItem value="360" className="rounded-lg">
                  Last 1 year
                </SelectItem>
                <SelectItem value="180" className="rounded-lg">
                  Last 6 months
                </SelectItem>
                <SelectItem value="90" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7" className="rounded-lg">
                  Last 7 days
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CardDescription className=" max-sm:text-xs">
            Showing total revenue for {activeChart} the last{" "}
            {formatDuration(timeRange)}
          </CardDescription>
        </div>
        <div className="flex">
          {["data", "airtime"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
