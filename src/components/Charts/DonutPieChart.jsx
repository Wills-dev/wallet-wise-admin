"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
  { status: "assigned", tickets: 275, fill: "#1F316F" },
  { status: "unassigned", tickets: 200, fill: "#36C2CE" },
  { status: "reassigned", tickets: 20, fill: "#9CDBA6" },
  { status: "inProgress", tickets: 120, fill: "#478CCF" },
];

const chartConfig = {
  tickets: {
    label: "No of tickets ",
  },
  assigned: {
    label: "Assigned tickets ",
  },
  unassigned: {
    label: "Unassigned tickets",
  },
  reassigned: {
    label: "Reassigned tickets",
  },
  inProgress: {
    label: "In Progress tickets",
  },
};

export function DonutPieChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tickets, 0);
  }, []);

  return (
    <Card className="flex flex-col max-w-[400px] min-w-[300px] w-full flex-1 dark:bg-secondary-dark-bg">
      <CardHeader className="items-center pb-0">
        <CardTitle>Ticket Assignment Status</CardTitle>
        <CardDescription>
          Breakdown of tickets by their assignment status
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tickets"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Tickets
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
