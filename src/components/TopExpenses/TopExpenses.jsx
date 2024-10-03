import react, { useState, useEffect } from "react";
import styles from "./TopExpenses.module.css";
const TopExpenses = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Top Expenses</h3>
      <section className={styles.innerWrapper}>
        <div>
            <div></div>
            <div></div>
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default TopExpenses;
