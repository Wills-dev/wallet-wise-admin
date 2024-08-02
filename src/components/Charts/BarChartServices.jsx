import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { service: "data", revenue: 186, profit: 80 },
  { service: "airtime", revenue: 305, profit: 200 },
  { service: "electricity", revenue: 237, profit: 120 },
  { service: "book flight", revenue: 73, profit: 190 },
  { service: "cable", revenue: 209, profit: 130 },
  { service: "betting", revenue: 214, profit: 140 },
  { service: "gift cards", revenue: 305, profit: 200 },
  { service: "hotel reservations", revenue: 237, profit: 120 },
  { service: "virtual card", revenue: 73, profit: 190 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export function BarChartServices() {
  const [timeRange, setTimeRange] = React.useState("90");
  return (
    <Card className="flex-1 w-full dark:bg-secondary-dark-bg rounded-lg shadow border-none">
      <CardHeader>
        <div className="flex-center-between flex-wrap gap-4">
          <CardTitle className="font-light max-sm:text-sm">
            Services Revenue & Profit Summary
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
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey="service"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <XAxis dataKey="revenue" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="revenue" layout="vertical" fill="#402E7A" radius={4}>
              <LabelList
                dataKey="revenue"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              {/* <LabelList
                dataKey="revenue"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Bar>
            <Bar dataKey="profit" layout="vertical" fill="#9B86BD" radius={4}>
              <LabelList
                dataKey="profit"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              {/* <LabelList
                dataKey="profit"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this service <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
