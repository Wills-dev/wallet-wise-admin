import React from "react";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const DoubleInnerBarChart = ({
  title,
  subTitle,
  type,
  value1,
  value2,
  color1,
  color2,
  chartConfig,
  chartData,
}) => {
  return (
    <Card className="flex-1 w-full dark:bg-secondary-dark-bg rounded-lg shadow border-none">
      <CardHeader>
        <div className="flex-center-between flex-wrap gap-4">
          <CardTitle className="font-light max-sm:text-sm">{title}</CardTitle>
        </div>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
        >
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
              dataKey={type}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey={value1} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey={value1} layout="vertical" fill={color1} radius={4}>
              <LabelList
                dataKey={type}
                position="insideLeft"
                offset={8}
                className="fill-[#fff]"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey={value2} layout="vertical" fill={color2} radius={4}>
              <LabelList
                dataKey={type}
                position="insideLeft"
                offset={8}
                className="fill-[#fff]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DoubleInnerBarChart;
