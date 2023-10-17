import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./MainModal.module.css";
import { Link } from "react-router-dom";

const MainModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.mod}
    >
      <Modal.Header className={styles.mod_header} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.content ? 'oops! '+ props.content : "oops! Faild to Login"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.mod_body}>
        <h5> If you don't have an account create one for free.</h5>
      </Modal.Body>
      <Modal.Footer className={styles.mod_footer}>
        <button className={styles.close_btn} onClick={props.onHide}>
          Close
        </button>
        <Link to='/register'><button className={styles.signup_btn}>Sign Up</button></Link>
      </Modal.Footer>
    </Modal>
  );
};

export default MainModal;
