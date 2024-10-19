import React, { useState } from "react";
import styles from "./Pagination.module.css";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePagePrev = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };
  const handlePageNext = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttons} onClick={handlePagePrev}>
        <HiOutlineArrowLongLeft />
      </button>
      <div className={styles.currentPage}>{currentPage}</div>
      <button className={styles.buttons} onClick={handlePageNext}>
        <HiOutlineArrowLongRight />
      </button>
    </div>
  );
};
export default Pagination;
