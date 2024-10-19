import React, { PureComponent } from "react";
import NoTransactionsCard from "../NoTransactionsCard/NoTransactionsCard";

import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./BarChart.module.css";

const BarchartComp = ({ data }) => {
  if (data.length) {
    return (
      <div className={styles.expenseChart}>
        <h3>Top Expenses</h3>

        <div className={styles.wrapper}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data} layout="vertical">
              <XAxis type="number" axisLine={false} display="none" />
              <YAxis
                type="category"
                width={110}
                dataKey="name"
                axisLine={false}
              />
              <Bar
                dataKey="value"
                fill="#8884d8"
                barSize={25}
                radius={[0, 10, 10, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.expenseChart}>
        <h3>Top Expenses</h3>
        <NoTransactionsCard/>
      </div>
    );
  }
};

export default BarchartComp;
