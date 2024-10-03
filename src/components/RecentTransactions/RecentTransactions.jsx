import react, { useState, useEffect } from "react";
import styles from "./RecentTransactions.module.css";
const RecentTransactions = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Recent Transactions</h3>
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
export default RecentTransactions;
