import { FaSearch } from 'react-icons/fa';
import styles from "./NoTransactionsCard.module.css";


const NoTransactionsCard = ()=>{
    return(
        <div className={styles.wrapper} >
            <FaSearch/>
            <p>No Transactions!</p>
        </div>
    )
}
export default NoTransactionsCard;