import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { BarChart as BarChartIcon } from "lucide-react";

const data = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 30, color: "#8b5cf6" },
  { name: "Books", value: 15, color: "#10b981" },
  { name: "Other", value: 10, color: "#f59e0b" },
];

// ✅ custom tooltip
const CustomTooltip = ({ active, payload , DarkMode }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div className={`${DarkMode ? "bg-slate-800 border-slate-700" : "bg-white/95 border-slate-200"}  rounded-xl shadow-lg p-3`}>
        <p className={`text-sm font-semibold  ${DarkMode ? "text-white" : "text-slate-800"} `}>
          {item.name}: {item.value}%
        </p>
      </div>
    );
  }
  return null;
};

const SalesChart = ({DarkMode}) => {
  return (
    <div className={`${DarkMode ? "bg-slate-900 border-slate-700/50" : "bg-white border-slate-200/50"}  backdrop-blur-xl rounded-b-2xl p-6 border `}>
      <div className="mb-6">
        <h3 className={`text-lg font-bold ${DarkMode ?"text-white" :"text-slate-800"}`}>
          Sales By Category
        </h3>
        <p className={`text-sm ${DarkMode?"text-slate-400":"text-slate-500"}`}>
          Product Distribution
        </p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* ✅ use custom tooltip */}
            <Tooltip content={<CustomTooltip />} DarkMode={DarkMode} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        {data.map((item, index) => {
          return (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full" style={{background : item.color}} />
                  <span className={`text-sm ${DarkMode ?"text-slate-400" : "text-slate-600"}`}>{item.name}</span>
              </div>
              <div className={`text-sm font-semibold ${DarkMode ? "text-white" :" text-slate-800" }`}>{item.value}$</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SalesChart;
