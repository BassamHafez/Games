import React from 'react';
import styles from './MainButtonWhite.module.css';
import arrow from '../../images/arrow left.svg';

const MainButtonWhite = ({text}) => {
  return (
    <button className={styles.white_button}>
      {text}
      <img src={arrow} alt='arrow left' className={styles.arrow_left}/>
      <img src={arrow} alt='arrow left' className={styles.arrow_right}/>
    </button>
  )
}

export default MainButtonWhite
