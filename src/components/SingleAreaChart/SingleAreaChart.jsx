import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "January", earnings: 186 },
  { month: "February", earnings: 305 },
  { month: "March", earnings: 237 },
  { month: "April", earnings: 73 },
  { month: "May", earnings: 209 },
  { month: "June", earnings: 214 },
];

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(var(--chart-1))",
  },
};

export function SingleAreaChart() {
  return (
    <Card className="border-none shadow-none dark:bg-secondary-dark-bg ">
      <CardContent className="p-0 mt-3">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="earnings"
              type="natural"
              fill="#9CDBA6"
              fillOpacity={0.4}
              stroke="#9CDBA6"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
