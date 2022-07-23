import React from "react";
import styles from "./InputBar.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillCamera, AiFillPicture } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";

const InputBar = () => {
  return (
    <div className={styles.inputbar}>
      <div className={styles.upload}>
        <BsPlusCircleFill className={styles.plusicon} />
        <AiFillCamera className={styles.cameraicon} />
        <AiFillPicture className={styles.pictureicon} />
      </div>
      <div className={styles.messageinput}>
        <input className={styles.input} type="text" />
        <FaRegSmile className={styles.smileicon} />
      </div>
      <IoMdMic className={styles.micicon} />
    </div>
  );
};

export default InputBar;
