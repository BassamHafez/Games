import React from "react";
import styles from './MainTitle.module.css';
const MainTitle = ({title}) => {
  return (
    <div className={styles.login_caption}>
      <h2>JOIN US</h2>
      <h4>{title}</h4>
    </div>
  );
};

export default MainTitle;
