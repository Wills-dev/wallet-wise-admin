import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function SingleBarChart({ dataTitle, barColor, chartData }) {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };
  const lastMonth = chartData.length - 1;

  return (
    <Card className="border-none shadow-none  dark:bg-secondary-dark-bg p-0">
      <CardHeader className="p-0 pb-2">
        <CardDescription>
          {chartData[0]?.month} - {chartData[lastMonth]?.month} 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 ">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill={barColor} radius={8}></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm px-0 pb-0">
        {/* <p className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </p> */}
        <div className="leading-none text-muted-foreground">
          Showing monthly {dataTitle} for the last {chartData.length} months
        </div>
      </CardFooter>
    </Card>
  );
}
