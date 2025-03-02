"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { skill: "JavaScript", desktop: 99, },
  { skill: "Reactjs", desktop: 95, },
  { skill: "Nextjs", desktop: 94, },
  { skill: "TypeScript", desktop: 85, },
  { skill: "HTML", desktop: 99, },
  { skill: "CSS", desktop: 99, },
]

const chartConfig = {
  desktop: {
    label: "Skill",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export const Expertise = ({ id }: { id: string }) => {
  return (
    <div id={id} className="w-full">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center">Core Expertise</h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-10">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="skill"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
