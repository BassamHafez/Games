import React from "react";
import coins from "../../images/slider_shape02.png";
import styles from "./Coins.module.css";


const Coins = ({ type }) => {


  let classes;

  switch (type) {
    case "coin1":
      classes = styles.coin1;
      break;
    case "coin2":
      classes = styles.coin2;
      break;
    case "coin3":
      classes = styles.coin3;
      break;

    default:
      break;
  }

  return <img src={coins} alt="coins" className={classes} />;
};

export default Coins;
