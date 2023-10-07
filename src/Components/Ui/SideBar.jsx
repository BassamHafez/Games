import React from "react";
import styles from "./SideBar.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKhanda, faShare } from "@fortawesome/free-solid-svg-icons";
import ContactsIcon from "./ContactsIcon";

const SideBar = ({onClose,show}) => {
  const handleClose = () => {
   onClose();
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className={styles.side_bar}
    >
      <Offcanvas.Header className={styles.header} closeButton>
        <Offcanvas.Title>
          <img src={logo} className={styles.logo} alt="mykid logo" />
        </Offcanvas.Title>
        <button title="close" onClick={handleClose}><FontAwesomeIcon className={styles.close_icon} icon={faKhanda} /></button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h2 className={styles.title}>
          BEST SELLER OF MONTH IDEAS FOR{" "}
          <span className="special_main_color">NFT WALLET</span>
        </h2>
        <h6 className={styles.contact}>CONTACT US</h6>
        <ol className={styles.ordered_list}>
          <li>+9 333 222 5557</li>
          <li>info@webmail.com</li>
          <li>New Central Park W7 Street,New York</li>
        </ol>
        <h6 className={`special_main_color mt-5 ${styles.contact}`}>
          SUBSCRIBE
        </h6>
        <div className={`${styles.subscribe_container} form-control`}>
          <input type="text" placeholder="Get News & Updates" />
          <FontAwesomeIcon className={styles.send_icon} icon={faShare} />
        </div>
        <p className={styles.subscribe_text}>
          Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin
          augue.
        </p>
        <hr />
        <ContactsIcon type='one'/>

        <p className={`${styles.slide_footer} mt-5 text-center`}>
          COPYRIGHT © 2023 - BY <span className="special_main_color">MYKD</span>
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
