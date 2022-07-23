import React from "react";
import styles from "./Body.module.css";
import InputBar from "./InputBar";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.inputbar}>
        <InputBar />
      </div>
    </div>
  );
};

export default Body;
