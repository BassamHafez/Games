import React from 'react';
import styles from './MainButtonPolygon.module.css';
import { motion } from 'framer-motion';

const MainButtonPolygon = ({text}) => {
  return (
    <motion.button whileHover={{x:10,backgroundColor:'#F2BD12'}} transition={{type:'spring'}} className={styles.poly_button}>
      {text}
    </motion.button>
  )
}

export default MainButtonPolygon
