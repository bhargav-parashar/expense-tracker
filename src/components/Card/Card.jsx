import react from "react";
import styles from "./Card.module.css";
import Button from "../Buttons/Button";

const Card = ({ label, val, buttonText, buttonStyle, handleClick }) => {
 
  return (
    <section className={styles.wrapper}>
      <div className={styles.labelFont}>
        <span>{`${label}:`}</span>
        <span className={buttonStyle === "green" ? styles.valueGreen:styles.valueOrange}>{` ₹ ${val}`}</span>
      </div>
      <Button buttonText = {buttonText} buttonStyle= {buttonStyle} handleClick={handleClick} />
      
    </section>
  );
};
export default Card;
