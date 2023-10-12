import React from "react";
import styles from "./LoginForm.module.css";
import MainButtonPolygon from "../Ui/MainButtonPolygon";
import google from '../../images/google.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import MainTitle from "../Ui/MainTitle";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className=" w-75 m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
      <MainTitle title='Sign In'/>
      <form className={styles.form}>
        <div className={`${styles.input_filed} my-4`}>
          <input type="email" name="email" placeholder="Email *" />
        </div>
        <div className={`${styles.input_filed} my-4`}>
          <input type="password" name="password" placeholder="password *" />
        </div>
        <div className="w-100">
          <MainButtonPolygon text="Login Now" />
        </div>
        <span className={styles.or_span}>or</span>
        <motion.div whileHover={{x:10}} className={styles.login_ways}>
          <img src={google} alt="google icon"/>
          <p className={styles.login_ways_text}>Continue with Google</p>
        </motion.div>
        <motion.div whileHover={{x:10}} className={styles.login_ways}>
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}/>
          <p className={styles.login_ways_text}>Continue with Facebook</p>
        </motion.div>
        <div className="mt-3">
          <p className={styles.login_ways_text}>Don't have an account ? <Link to={'/register'} className="special_main_color">sign up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;