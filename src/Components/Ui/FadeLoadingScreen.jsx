import React from 'react';
import styles from './FadeLoadingScreen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const FadeLoadingScreen = () => {
  return (
    <div className={styles.main_loading_body}>
        <FontAwesomeIcon className='fa-spin' icon={faSync}/>
    </div>
  )
}

export default FadeLoadingScreen
