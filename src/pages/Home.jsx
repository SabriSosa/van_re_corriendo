import React from "react";

import { Container } from "react-bootstrap";
import Destinations from "../components/Destinations";
import TravelInfo from "../components/TravelInfo";
import './Home.scss';

function Home() {
  return (
    <Container fluid className="home-container">
  
      <div id="container-e0e31f127aef04efe6b452d69aafaa84" className="advertisment"></div>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          minWidth: "100px",
          maxWidth: "100px",
          width: "100%",
          height: "90px",
        }}
        data-ad-client="ca-pub-1162077696260246"
        data-ad-slot="8375174617"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Destinations />
      <TravelInfo />
    </Container>
  );
}

export default Home;
