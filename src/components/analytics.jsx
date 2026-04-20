import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GlassCard from "./glasscard";

// Your Learning Journey Data (2025 to April 2026)
const learningData = [
  { month: "Jan '25", progress: 10, milestone: "Started Web Dev (HTML/CSS)" },
  { month: "Apr '25", progress: 30, milestone: "Mastered JavaScript Basics" },
  { month: "Jul '25", progress: 50, milestone: "Built First React App" },
  { month: "Oct '25", progress: 70, milestone: "Tailwind CSS & Styling" },
  { month: "Jan '26", progress: 85, milestone: "Vite, Advanced React & APIs" },
  { month: "Apr '26", progress: 100, milestone: "Premium UI & Full Portfolio" },
];

// Custom Glassmorphism Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <p className="text-gray-300 font-semibold mb-1">{label}</p>
        <p className="text-pink-400 font-bold text-xl mb-1">
          Growth: {payload[0].value}%
        </p>
        <p className="text-cyan-300 text-sm font-medium">
          🚀 {payload[0].payload.milestone}
        </p>
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  return (
    <GlassCard className="h-96 w-full flex flex-col">
      <h3 className="text-2xl font-bold mb-6 text-gray-100">
        My Learning Journey Graph (2025 - Apr 2026)
      </h3>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={learningData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            {/* Theme Gradient */}
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6} /> {/* Purple-500 */}
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />  {/* Cyan-500 */}
              </linearGradient>
            </defs>

            {/* Axes styling */}
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af" 
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9ca3af" 
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />

            {/* Custom Tooltip Integration */}
            <Tooltip content={<CustomTooltip />} />

            {/* The Growth Area */}
            <Area
              type="monotone"
              dataKey="progress"
              stroke="#ec4899" // Pink-500 line
              strokeWidth={4} // Thicker line for better visibility
              fillOpacity={1}
              fill="url(#colorProgress)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};

export default Analytics;