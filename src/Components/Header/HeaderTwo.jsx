import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const HeaderTwo = () => {
  return (
    <div className={styles.headerTwo_container}>
        <div className='text-center m-auto  text-white'>
            <h2>Sign In</h2>
            <Link className='special_main_color' to={'/'}>Home</Link>
        </div>
    </div>
  )
}

export default HeaderTwo
