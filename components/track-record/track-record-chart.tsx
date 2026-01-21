"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Data points for each company's growth trajectory
// Using 0.1 instead of 0 for log scale compatibility
const chartData = [
  { year: 0, companyA: 0.5, companyB: 0.5, companyC: 0.5, companyD: 0.5 },
  { year: 1, companyA: 62.5, companyB: 10, companyC: 2, companyD: 6.67 },
  { year: 1.5, companyA: 93.75, companyB: 15, companyC: 2, companyD: 10 },
  { year: 2, companyA: 125, companyB: 20, companyC: 2, companyD: 10 },
  { year: 3, companyA: 187.5, companyB: 20, companyC: 2, companyD: 10 },
  { year: 4, companyA: 250, companyB: 20, companyC: 2, companyD: 10 },
];

// Distinct colors for better differentiation
const COLORS = {
  companyA: "#a855f7", // purple - primary accent
  companyB: "#22d3ee", // cyan
  companyC: "#f472b6", // pink
  companyD: "#4ade80", // green
};

const chartConfig = {
  companyA: {
    label: "Company A",
    color: COLORS.companyA,
  },
  companyB: {
    label: "Company B",
    color: COLORS.companyB,
  },
  companyC: {
    label: "Company C",
    color: COLORS.companyC,
  },
  companyD: {
    label: "Company D",
    color: COLORS.companyD,
  },
} satisfies ChartConfig;

export function TrackRecordChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[280px] sm:h-[320px] w-full">
      <LineChart
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="hsl(var(--border) / 0.3)"
        />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `Year ${value}`}
          fontSize={11}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `$${value}M`}
          scale="log"
          domain={[1, 300]}
          ticks={[1, 5, 10, 25, 50, 100, 250]}
          fontSize={11}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelFormatter={(value) => `Year ${value}`}
              formatter={(value, name) => {
                const config = chartConfig[name as keyof typeof chartConfig];
                const displayValue = Number(value) < 1 ? 0 : value;
                return (
                  <div className="flex items-center justify-between gap-4 w-full">
                    <span className="text-muted-foreground">{config?.label}</span>
                    <span className="font-mono font-medium">${displayValue}M</span>
                  </div>
                );
              }}
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="monotone"
          dataKey="companyA"
          stroke={COLORS.companyA}
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 0, fill: COLORS.companyA }}
        />
        <Line
          type="monotone"
          dataKey="companyB"
          stroke={COLORS.companyB}
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 0, fill: COLORS.companyB }}
        />
        <Line
          type="monotone"
          dataKey="companyC"
          stroke={COLORS.companyC}
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 0, fill: COLORS.companyC }}
        />
        <Line
          type="monotone"
          dataKey="companyD"
          stroke={COLORS.companyD}
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 0, fill: COLORS.companyD }}
        />
      </LineChart>
    </ChartContainer>
  );
}
