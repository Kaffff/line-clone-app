import React from "react";
import BackButton from "./BackButton";
import { HiHome } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import styles from "./Header.module.css";
const Header = () => (
  <div className={styles.header}>
    <BackButton />
    <div>LIME</div>
    <div className={styles.menu}>
      <HiHome className={styles.homeicon} />
      <FiChevronDown className={styles.downicon} />
    </div>
  </div>
);

export default Header;
