// import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", value1: 40, value2: 20 },
  { day: "Tues", value1: 30, value2: 35 },
  { day: "Wed", value1: 50, value2: 25 },
  { day: "Thurs", value1: 20, value2: 40 },
  { day: "Fri", value1: 60, value2: 30 },
  { day: "Sat", value1: 45, value2: 25 },
  { day: "Sun", value1: 35, value2: 15 },
];

export default function ActivityChart() {
  return (
    <div className="p-4 bg-[#f8f9fd] rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-600">Activity</h3>
        <p className="text-xs text-gray-400">3 appointments this week</p>
      </div>

      <ResponsiveContainer width="100%" height={80}>
        <BarChart data={data} barGap={4}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value1"
            fill="#38bdf8"
            radius={[10, 10, 0, 0]}
            barSize={4}
          />
          <Bar
            dataKey="value2"
            fill="#6366f1"
            radius={[10, 10, 0, 0]}
            barSize={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
