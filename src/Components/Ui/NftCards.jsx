import React,{useEffect} from "react";
import { Col } from "react-bootstrap";
import styles from ".//NftCards.module.css";
import nftAvatar from "../../images/nft_avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NftCards = ({ img, title, name, price }) => {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <Col lg={6} className="mb-4"  data-aos="zoom-in" >
      <div  className={styles.sec1_div}>
        <div className={styles.sec1_main_img}>
          <img src={img} alt="nft" className="w-100" />
        </div>
        <div className={styles.sec1_caption}>
          <h5>{title}</h5>
          <div className={`${styles.info} d-flex align-items-center`}>
            <img src={nftAvatar} alt="nftAvatar" className="ms-2 me-3" />
            <h6 className={styles.name}>{name}</h6>
            <h6 className={styles.job}>
              <span className={styles.line}>|</span>CREATOR
            </h6>
          </div>
          <div
            className={`${styles.sec1_footer} d-flex justify-content-between align-items-center p-3 mt-4`}
          >
            <h6 className={styles.price}>
              {price}
              <span className='special_color'>ETH</span>
            </h6>
            <button className={styles.bid_btn}>
              Bid <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NftCards;
