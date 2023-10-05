import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import styles from "./MainButton.module.css";

const MainButton = () => {
  return (
    <button className={`${styles.sign_button} me-2`}>
      <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
      ~SIGN IN
    </button>
  );
};

export default MainButton;
