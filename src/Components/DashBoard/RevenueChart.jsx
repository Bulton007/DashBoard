// RevenueChart.jsx
import React from "react";
import { BarChart as BarChartIcon } from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useWindowSize from "../Hooks/UseWindowSize";

const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 38000 },
  { month: "Mar", revenue: 48000, expenses: 35000 },
  { month: "Apr", revenue: 61000, expenses: 42000 },
  { month: "May", revenue: 55000, expenses: 40000 },
  { month: "Jun", revenue: 67000, expenses: 45000 },
  { month: "Jul", revenue: 72000, expenses: 48000 },
  { month: "Aug", revenue: 69000, expenses: 46000 },
  { month: "Sep", revenue: 78000, expenses: 52000 },
  { month: "Oct", revenue: 74000, expenses: 50000 },
  { month: "Nov", revenue: 82000, expenses: 55000 },
  { month: "Dec", revenue: 89000, expenses: 58000 },
];

// ✅ Custom tooltip
const CustomTooltip = ({ active, payload, label, DarkMode}) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${DarkMode ? "bg-slate-800 border-slate-700 " : " bg-white/95 border border-slate-200"}  rounded-xl shadow-lg p-3`}>
        <p className={`font-semibold ${DarkMode ? "text-white" : "text-slate-800"}  mb-2`}>
          {label}
        </p>
        {payload.map((entry, i) => (
          <p
            key={i}
            className={` ${DarkMode ? "text-white" : ""} text-xs sm:text-sm`}
            style={{ color: entry.fill }}
          >
            {(entry.name === "revenue" ? "Revenue" : "Expenses")}: $
            {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueChart = ({DarkMode}) => {
  const { width } = useWindowSize();
  const isMobile = width < 640; // Tailwind sm breakpoint

  return (
    <div className={` ${DarkMode ? "bg-slate-900/80 border-slate-700/50 " : "bg-white/80 border-slate-200/50 "} backdrop-blur-xl rounded-b-2xl border p-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChartIcon className="w-5 h-5 text-slate-500" />
          <div>
            <h3 className={`text-xl font-bold ${DarkMode ? "text-white" : "text-slate-800"} `}>
              Revenue Chart
            </h3>
            <p className={`text-sm ${DarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Monthly Revenue and Expenses
            </p>
          </div>
        </div>
        {/* Legend */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className={`text-xs sm:text-sm ${DarkMode ? "text-slate-400" : "text-slatee-600"}`} >
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 bg-gradient-to-r  from-slate-400 to-slate-500 rounded-full`}></div>
            <span className={`text-xs sm:text-sm ${DarkMode ? "text-slate-400" : "text-slate-600"} `}>
              Expenses
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[360px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 40 : 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={isMobile ? 10 : 12}
              tickLine={false}
              axisLine={false}
              angle={isMobile ? -45 : 0}
              textAnchor={isMobile ? "end" : "middle"}
            />
            <YAxis
              stroke="#64748b"
              fontSize={isMobile ? 10 : 12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) =>
                isMobile ? `$${v / 1000}` : `$${v / 1000}k`
              }
            />
            <Tooltip content={<CustomTooltip />} DarkMode={DarkMode} />
            <Bar
              dataKey="revenue"
              name="revenue"
              fill="url(#revenueGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={isMobile ? 24 : 40} // 📌 Thicker bars on mobile
            />
            <Bar
              dataKey="expenses"
              name="expenses"
              fill="url(#expensesGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={isMobile ? 24 : 40}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
