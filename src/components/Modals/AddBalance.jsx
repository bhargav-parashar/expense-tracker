import styles from "./AddBalance.module.css";
import react, { useState } from "react";
import { useSnackbar } from "notistack";
import Button from "../Buttons/Button";

const AddBalance = ({ setIsOpen, setBalance }) => {
  const [income, setIncome] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(income) <= 0) {
      enqueueSnackbar("Income must be greater than 0", { variant: "warning" });
      setIsOpen(false);
    } else {
      setBalance((prev) => prev + Number(income));
      setIsOpen(false);
      enqueueSnackbar("Balance added", { variant: "success" });
    }
  };

  return (
    <div>
      <header>
        <h2 style={{ marginTop: "0px" }}>Add Balance</h2>
      </header>

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="number"
          name="income"
          value={income}
          onChange={handleChange}
          placeholder="Income Amount"
          className={styles.inputs}
        />
        <Button
          buttonText="Add Balance"
          buttonStyle="primary"
          type="submit"
          shadow
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
export default AddBalance;
