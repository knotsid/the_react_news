//Importing-Hooks
import React, { useState, useEffect } from "react";

//Bootstrap-Bundle-JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//Bootstrap-npm-lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Importing-Components..
import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import NewsCard from "../components/News";
import FooterComp from "../components/Footer";

//Bootstrap-CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Custom-CSS
import "../css/custom.css";

let HomePage = () => {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col lg={12} className="no-col-nav">
          <div className="text-center">
            <NavBar />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} className="no-col-nav">
          <div className="main-heading-area">
            <h1 className="text-center">{<Header />}</h1>
          </div>
          <div className="date-area">
            <div className="text-center">
              <p className="date-display">{<DateTime />}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="news-container">
          <div className="news-area">
            <h1>News Feed</h1>
            <br></br>
            <NewsCard
              title="PayPal enables transfer of digital currencies to external wallets"
              link="/read-paypal"
              height="440px"
              author="NotSid"
              mini="The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform."
              image="https://i0.wp.com/regtechafrica.com/wp-content/uploads/2022/06/PayPal-enables-transfer-of-digital-currencies-to-external-wallets.jpg?resize=800%2C400&ssl=1"
            />
            <br></br>
            <br></br>
            <NewsCard
              title="Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget"
              link="/read-italy"
              height="460px"
              author="NotSid"
              mini="Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes."
              image="https://static1.bigstockphoto.com/8/2/2/large2/228177100.jpg"
            />
            <br></br>
            <br></br>
            <NewsCard
              title=" Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC"
              link="/read-crypto"
              height="480px"
              author="NotSid"
              mini="Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor."
              image="https://news.coincu.com/wp-content/uploads/2022/12/Anh-chup-Man-hinh-2022-12-28-luc-21.04.24-1140x554.png"
            />
            <br></br>
            <br></br>
            <NewsCard
              title="Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022"
              link="/read-miner"
              height="460px"
              author="NotSid"
              mini="2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners."
              image="https://news.coincu.com/wp-content/uploads/2022/09/image-845-1140x855.png"
            />
            <br></br>
            <br></br>
            <NewsCard
              title="Mango Markets Exploiter Eisenberg Arrested in Puerto Rico"
              link="/read-mango"
              height="460px"
              author="NotSid"
              mini="The investor drained $110 million in cryptocurrencies from the platform.
              "
              image="https://www.cryptonewsz.com/wp-content/uploads/2022/12/Mango-Markets-Exploiter-Arrested-In-Puerto-Rico.jpg"
            />
          </div>
        </Col>

      </Row>

      <Row>
        <Col className="footer-col">
          <FooterComp />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
