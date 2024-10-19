import React from "react";
import NoTransactionsCard from "../NoTransactionsCard/NoTransactionsCard";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#A000FF", "#FF9304", "#FDE006"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartComponent({ data }) {
  if (data.length > 0) {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend iconType="rect" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    );
  }
  return <NoTransactionsCard />;
}
