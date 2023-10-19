import React from "react";
import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import ContactsIcon from "../Ui/ContactsIcon";
import EmailField from "../Ui/EmailField";
import payment_cards from '../../images/payment_card.webp';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Row>
        <Col className={styles.footer_row} md={3}>
            <img src={logo} alt="logo my kid" className={styles.footer_logo} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              incidunt.
            </p>
            <div className=" mt-2">
              <h6 className=" text-center ms-3">ACTIVE <span className="special_main_color">WITH US </span></h6>
              <ContactsIcon type="two"/>
            </div>
        </Col>
        <Col className={styles.footer_row} md={3}>
            <h5>QUICK LINK</h5>
            <ul>
              <li>Gaming</li>
              <li>Product</li>
              <li>All NFTs</li>
              <li>Social Network</li>
              <li>Domain Names</li>
              <li>Collectibles</li>
            </ul>
        </Col>
        <Col className={styles.footer_row} md={3}>
            <h5>SUPPORTS</h5>
            <ul>
              <li>Setting & Privacy</li>
              <li>Help & Support</li>
              <li>Live Auctions</li>
              <li>Item Details</li>
              <li>24/7 Supports</li>
              <li>Our News</li>
            </ul>
        </Col>
        <Col className={styles.footer_row} md={3}>
            <h5>NEWSLETTER</h5>
            <ul>
              <li>Subscribe our newsletter to get our latest</li>
              <li>update & newsconsectetur</li>
            </ul>
            <EmailField/>
        </Col>
        <Col sm={12} className={styles.last_footer}>
          <h6>COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY <span className="special_main_color">MYKD</span></h6>
          <div>
            <img src={payment_cards} alt="payment_cards" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
