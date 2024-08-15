import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function PieChartTickets({
  chartConfig,
  chartData,
  nameKey1,
  nameKey2,
  dataKey,
  title,
  subTitle,
}) {
  return (
    <Card className="flex flex-col max-w-[400px] min-w-[300px] w-full flex-1 dark:bg-secondary-dark-bg">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey={nameKey1} hideLabel />}
            />
            <Pie data={chartData} dataKey={dataKey} />
            <ChartLegend
              content={<ChartLegendContent nameKey={nameKey2} />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
