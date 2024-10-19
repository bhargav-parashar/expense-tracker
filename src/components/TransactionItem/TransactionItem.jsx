import React from "react";
import { PiPizza } from "react-icons/pi";
import { SlPencil } from "react-icons/sl";
import { LiaTimesCircle } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { CiRollingSuitcase } from "react-icons/ci";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ key,item, handleEdit, handleDelete }) => {

  return (
    <>
    <div className = {styles.wrapper}>
      <div className = {styles.detailsWrapper}>
        <div className={styles.iconWrapper}>
          {
            item.category === 'food'?<PiPizza />:
            item.category === 'entertainment'?<GoGift/>:
            item.category === 'travel'?<CiRollingSuitcase/>:<></>
          }
          
        </div>
        <div className={styles.details}>
          <p >{item.title}</p>
          <p className={styles.date}>{item.date}</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <p className={styles.price}>{`₹${item.price}`}</p>
        <button className={styles.edit} onClick={handleEdit}><SlPencil/></button>
        <button className={styles.delete} onClick={handleDelete}><LiaTimesCircle/></button>
      </div>
    </div>
    <hr/>
    </>
  );
};
export default TransactionItem;
