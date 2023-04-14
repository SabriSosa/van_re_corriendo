import React from "react";

import { Container } from "react-bootstrap";
import SimpleCarousel from "../components/Carousel";
import Destinations from "../components/Destinations";

import TravelInfo from "../components/TravelInfo";

function Home() {
  return (
    <Container fluid className="main-container">
      <SimpleCarousel />
      <TravelInfo />
      <Destinations />
    </Container>
  );
}

export default Home;
