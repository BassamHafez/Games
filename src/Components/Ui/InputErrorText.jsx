import React from 'react';
import styles from './InputErrorText.module.css';
import { motion } from 'framer-motion';

const InputErrorText = (props) => {
  return (
    <>
    <motion.p initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} className={styles.error_paragraph}>
      {props.text?props.text:props.children}
    </motion.p>
    </>
  )
}

export default InputErrorText
//01070255419
//01001595077