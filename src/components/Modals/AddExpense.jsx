import { useState } from "react";
import styles from "./AddExpense.module.css";
import Button from "../Buttons/Button";
import { useSnackbar } from "notistack";

const AddExpense = ({
  setIsOpen,
  balance,
  setBalance,
  expenseList,
  setExpenseList,
}) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const name = e.target.name;
    setExpenseData((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (balance < expenseData.price) {
      enqueueSnackbar("Price should be less than Wallet Balance", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }

    setBalance((prev) => prev - Number(expenseData.price));
    
    const lastInsertId = expenseList.length > 0 ? expenseList[0].id : 0;
    setExpenseList((prev)=>[{...expenseData, id: lastInsertId + 1},...prev]);

    setExpenseData({
        title: "",
        price: "",
        category: "",
        date: "",
    });

    setIsOpen(false);
  };

  return (
    <div>
      <header>
        <h2 style={{ marginTop: "0px" }}>Add Expense</h2>
      </header>
      <form className={styles.wrapper} onSubmit={handleAdd}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={styles.inputs}
            value={expenseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className={styles.inputs}
            value={expenseData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select
            className={styles.inputs}
            name="category"
            id="category"
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <div>
          <input
            type="date"
            name="date"
            required
            className={styles.inputs}
            value={expenseData.date}
            onChange={handleChange}
          />
        </div>
        <Button buttonText="Add Expense" buttonStyle="primary" shadow type="submit"/>
        <Button
          buttonText="Cancel"
          buttonStyle="secondary"
          handleClick={() => setIsOpen(false)}
          shadow
        />
      </form>
    </div>
  );
};
export default AddExpense;
