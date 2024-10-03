import react, { useState, useEffect } from "react";
import styles from "./Container.module.css";
import Hero from "../Hero/Hero";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import TopExpenses from "../TopExpenses/TopExpenses";
const Container = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Expense Tracker</h2>
      <Hero />
      <div className={styles.innerWrapper}>
        <RecentTransactions />
        <TopExpenses/>
      </div>
    </div>
  );
};
export default Container;
