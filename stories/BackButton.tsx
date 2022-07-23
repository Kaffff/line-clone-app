import React from "react";
import styles from "./BackButton.module.css";
import { FiChevronLeft } from "react-icons/fi";

const BackButton = () => {
  return (
    <button className={styles.button}>
      <FiChevronLeft className={styles.icon} />
    </button>
  );
};

export default BackButton;
