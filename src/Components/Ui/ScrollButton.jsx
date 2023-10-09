import React from 'react';
import styles from './ScrollButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { motion,useScroll,useTransform } from 'framer-motion';

const ScrollButton = () => {
    const {scrollY}=useScroll();
    const opacityBtn=useTransform(scrollY,[0,200],[0,1])
    const yBtn = useTransform(scrollY, [0, 200], [100, 0]);


    const scrollTop=()=>{
      window.scrollTo(0, 0);
    }

    return (
    <motion.button onClick={scrollTop} whileHover={{scale:1.07,x:-10}} style={{y:yBtn,opacity:opacityBtn}} className={styles.btn}>
        <FontAwesomeIcon icon={faAnglesUp} />
    </motion.button>
  )
}

export default ScrollButton
