import react, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Modal from "../components/Modals/Modal";
import Card from "../components/Card/Card.jsx";
import PieChartComponent from "../components/PieChart/PieChart.jsx";
import AddExpense from "../components/Modals/AddExpense.jsx";
import AddBalance from "../components/Modals/AddBalance.jsx";
import Barchart from "../components/BarChart/BarChart.jsx";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions.jsx";

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

const calculateCategoryStatistics = (expenseList) => {
  return expenseList.reduce(
    (acc, item) => {
      acc.spends[item.category] =
        (acc.spends[item.category] || 0) + Number(item.price);
      acc.counts[item.category] = (acc.counts[item.category] || 0) + 1;
      return acc;
    },
    {
      spends: { food: 0, entertainment: 0, travel: 0 },
      counts: { food: 0, entertainment: 0, travel: 0 },
    }
  );
};

const Home = () => {
  const [balance, setBalance] = useLocalStorage("balance", 5000);
  const [expenseList, setExpenseList] = useLocalStorage("expenses", []);

  const [isIncomeOpen, setIsIncomeOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const { spends: categorySpends, counts: categoryCounts } =
    calculateCategoryStatistics(expenseList);

  const addIncome = () => {
    setIsIncomeOpen(true);
  };
  const addExpense = () => {
    setIsExpenseOpen(true);
  };
  const expense = expenseList.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  return (
    <div className={styles.wrapper}>
      <h2>Expense Tracker</h2>
      <section className={styles.heroWrapperMain}>
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

        <PieChartComponent
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Enterntainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ].filter((item) => item.value)}
        />
      </section>

      <section className={styles.secondaryWrapper}>
        <RecentTransactions
          transactions={expenseList}
          setTransactions={setExpenseList}
          setBalance={setBalance}
          setExpenseList = {setExpenseList}
        />
        <Barchart
          data={[
            { name: "Food", value: categoryCounts.food },
            { name: "Entertainment", value: categoryCounts.entertainment },
            { name: "Travel", value: categoryCounts.travel },
          ].filter((item) => item.value)}
        />
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
