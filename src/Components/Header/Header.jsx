import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Header.module.css";
import MainButtonWhite from "../Ui/MainButtonWhite";
import header_img from "../../images/slider_img01.png";
import Coins from "../Ui/Coins";
import brand_logo from "../../images/brand_logo01.png";
import brand_logo2 from "../../images/brand_logo02.png";
import brand_logo3 from "../../images/brand_logo03.png";

const Header = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0,50,100], [0,-70,-120]);
  const opacityHeader = useTransform(
    scrollY,
    [0, 100, 200, 300, 600],
    [1, 1, 0.7, 0.5, .2]
  );
  return (
    <motion.header style={{ opacity: opacityHeader }} className={styles.header}>
      <Coins type="coin1" />
      <Coins type="coin2" />
      <Coins type="coin3" />
      <Container fluid className="mt-5 pt-5">
        <Row
          className={`${styles.row} justify-content-center align-items-center`}
        >
          <Col
            className={`${styles.header_caption} d-flex align-items-center justify-content-center pb-5`}
            md={6}
          >
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: yHero }}
              className={styles.caption}
            >
              <div className={styles.sub_title}>
                <h6>LIVE GAMING</h6>
              </div>

              <h1>STEAMING</h1>
              <p>VIDEO GAMES ONLINE</p>
              <MainButtonWhite text="CONTACT US" />
            </motion.div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            md={6}
          >
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ y: yHero }}
              className={styles.img_header}
            >
              <motion.img            
                src={header_img}
                alt="streaming girl"
                className="w-100 h-100"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="d-flex align-items-center my-5">
        <div className={styles.header_brands}>
          <img src={brand_logo} alt="Dark Zone" />
        </div>
        <div className={styles.header_brands}>
          <img src={brand_logo2} alt="Next Gen" />
        </div>
        <div className={styles.header_brands}>
          <img src={brand_logo3} alt="Tanupo" />
        </div>
      </div>
      <div className="d-flex justify-content-start w-100">
        <div className={styles.svg_styled_one}></div>
      </div>
    </motion.header>
  );
};

export default Header;
