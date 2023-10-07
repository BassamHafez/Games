import React from "react";
import Header from "../../Components/Header/Header";
import styles from './Home.module.css';
import { Container,Row } from "react-bootstrap";
import nft1 from '../../images/nft_img01.jpg';
import nft2 from '../../images/nft_img02.jpg';
import nft3 from '../../images/nft_img03.jpg';
import NftCards from "../../Components/Ui/NftCards";




const Home = () => {


  return (
    <>
      <Header/>
      <section className={`${styles.sec_one} my-5 py-5`}>
         <Container className="my-5">
          <Row className="justify-content-center">
            <NftCards  img={nft1} name='Alax Max' title='WOLF GAMING ART' price='1.002' />  
            <NftCards img={nft2} name='Alax Max' title='WOLF GAMING ART' price='1.002' />  
            <NftCards img={nft3} name='Alax Max' title='WOLF GAMING ART' price='1.002' />  
          </Row>
         </Container>
      </section>
    </>
  );
};

export default Home;
