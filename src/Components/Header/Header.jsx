import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Header.module.css";
import MainButtonWhite from "../Ui/MainButtonWhite";
import header_img from "../../images/slider_img01.png";
import Coins from "../Ui/Coins";

const Header = () => {
  return (
    <header className={styles.header}>
        <Coins type='coin1'/>
        <Coins type='coin2'/>
        <Coins type='coin3'/>
      <Container fluid className="mt-5">
        <Row className={`${styles.row} justify-content-center`}>
          <Col
            className={`${styles.header_caption} d-flex align-items-center justify-content-center pb-5`}
            md={6}
          >
            <div className={styles.caption}>
              <div className={styles.sub_title}>
                <h6>LIVE GAMING</h6>
              </div>

              <h1>STEAMING</h1>
              <p>VIDEO GAMES ONLINE</p>
              <MainButtonWhite text='CONTACT US'/>
            </div>
          </Col>
          <Col
            className={styles.img_header}
            md={6}
          >
            <div className={styles.img_header}>
              <img src={header_img} alt="streaming girl" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
