import react, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import TopExpenses from "../components/TopExpenses/TopExpenses";
import Modal from "../components/Modals/Modal";
import Card from "../components/Card/Card.jsx";
import PieChartComponent from "../components/PieChart/PieChart.jsx";
import AddExpense from "../components/Modals/AddExpense.jsx";
import AddBalance from "../components/Modals/AddBalance.jsx";

const Home = () => {
  /*Custom hook*/
  const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  };

  const [balance, setBalance] = useLocalStorage("balance", 5000);
  const [expenseList, setExpenseList] = useLocalStorage("expenses", []);

  const [isIncomeOpen, setIsIncomeOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const addIncome = () => {
    setIsIncomeOpen(true);
  };
  const addExpense = () => {
    setIsExpenseOpen(true);
  };
  const expense = expenseList.reduce((acc,curr)=>acc + Number(curr.price),0);

  return (
    <div className={styles.wrapper}>
      <h2>Expense Tracker</h2>
      <section className={styles.heroWrapper}>
        <div className={styles.heroInnerWrapper}>
          <Card
            label="Wallet Balance"
            val={balance}
            buttonText="+ Add Income"
            buttonStyle="green"
            handleClick={addIncome}
          />

          <Card
            label="Expenses"
            val={expense}
            buttonText="+ Add Expense"
            buttonStyle="red"
            handleClick={addExpense}
          />
        </div>
        <div className={styles.chart}>
          <PieChartComponent />
        </div>
      </section>
      <Modal isOpen={isExpenseOpen} setIsOpen={setIsExpenseOpen}>
        <AddExpense
          setIsOpen={setIsExpenseOpen}
          balance={balance}
          setBalance={setBalance}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
      </Modal>
      <Modal isOpen={isIncomeOpen} setIsOpen={setIsIncomeOpen}>
        <AddBalance setIsOpen={setIsIncomeOpen} setBalance={setBalance} />
      </Modal>
    </div>
    //  <div className={styles.innerWrapper}>
    //     <RecentTransactions />
    //     <TopExpenses />
    //   </div>
  );
};
export default Home;
