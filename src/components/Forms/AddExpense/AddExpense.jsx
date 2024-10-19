import { useState } from "react";
import styles from "./AddExpense.module.css";
import Button from "../../Buttons/Button";
import { useSnackbar } from "notistack";

const AddExpense = ({
  setIsOpen,
  balance,
  setBalance,
  expenseList,
  setExpenseList,
  editId,
}) => {
  const initialData = editId
    ? expenseList.find((item) => item.id === editId)
    : {
        title: "",
        price: "",
        category: "",
        date: "",
      };
  const [expenseData, setExpenseData] = useState(initialData);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const name = e.target.name;
    setExpenseData((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    /*Balance Validation */
    if (balance < expenseData.price) {
      enqueueSnackbar("Price should be less than the Wallet Balance", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }
    /*Update Wallet Balance */
    setBalance((prev) => prev - Number(expenseData.price));
    
    /*Create Transaction Id */
    const lastInsertId = expenseList.length > 0 ? expenseList[0].id : 0;
    setExpenseList((prev) => [
      { ...expenseData, id: lastInsertId + 1 },
      ...prev,
    ]);
    
    /*Refresh expense Data */
    setExpenseData({
      title: "",
      price: "",
      category: "",
      date: "",
    });

    /*Close Modal */
    setIsOpen(false);
  };

  const handleEdit = (e) =>{
    e.preventDefault();

    /*Update the item in main transaction list */
    const editedList = expenseList.map((item)=>{
      if(item.id === editId){
        const priceDiff = item.price - expenseData.price;

        /*Price Validation */
        if(priceDiff < 0 && Math.abs(priceDiff) > balance){

          enqueueSnackbar("Price should be less than the Wallet Balance", {
            variant: "warning",
          });
          /*Close Modal */
          setIsOpen(false);
          /*Return the same item as in main transaction list */
          return{...item};

        }
        
        /*Update Wallet Balance */
        setBalance((prev)=>prev + priceDiff);

        /*Return updated item along with edit id */
        return {...expenseData, id:editId};


      }else{
        return item;
      }
    })

    /*Set Updated Transaction list as main Transaction list */
    setExpenseList(editedList);

    /*Close Modal */
    setIsOpen(false);
  };
  return (
    <div>
      <header>
        <h2 style={{ marginTop: "0px" }}>{ editId?"Edit Expense" : "Add Expense"}</h2>
      </header>
      <form
        className={styles.wrapper}
        onSubmit={editId ? handleEdit : handleAdd}
      >
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
            value={expenseData.category}
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
        <Button
          buttonText="Add Expense"
          buttonStyle="primary"
          shadow
          type="submit"
        />
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
