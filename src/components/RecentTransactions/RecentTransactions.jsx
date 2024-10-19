import React, { useState, useEffect } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import styles from "./RecentTransactions.module.css";
import Pagination from "../Pagination/Pagination";
import NoTransactionsCard from "../NoTransactionsCard/NoTransactionsCard";

const RecentTransactions = ({ transactions, setTransactions, setBalance, setExpenseList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const maxLineItems = 3;
  useEffect(() => {
    const startIndex = (currentPage - 1) * maxLineItems;
    const endIndex = Math.min(currentPage * maxLineItems, transactions.length);
    setCurrentTransactions(transactions.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(transactions.length / maxLineItems));
  }, [currentPage, transactions]);
  const handleDelete = (id)=>{
    /*Update wallet balance */
    const lineItem = transactions.find((item)=>item.id === id);
    setBalance((prev)=>prev + Number(lineItem.price));
    /*Update expense list*/
    setExpenseList((prev)=>prev.filter((item)=>item.id !== id));
  };
  const handleEdit = (id)=>{
    console.log(`Edit ${id}`);
  };
  return (
    <div className={styles.wrapper}>
      <h3>Recent Transactions</h3>

      {transactions.length > 0 ? (
        <div className={styles.listWrapper}>
          <div>
          {currentTransactions.map((item, idx) => (
            <TransactionItem key={item.id} item={item} handleEdit = {()=>handleEdit(item.id)} handleDelete = {()=>handleDelete(item.id)} />
          ))}
          </div>
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      ) : (
        <NoTransactionsCard/>
      )}
    </div>
  );
};
export default RecentTransactions;
