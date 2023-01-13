import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import SimpleCarousel from "../components/Carousel";
import BlogPost from "../components/Post";

import TravelInfo from "../components/TravelInfo";

function Home() {
  const difference = Math.round(
    (new Date() - new Date("10/08/2022")) / (1000 * 60 * 60 * 24)
  ).toFixed(0);
  const country = "URUGUAY";
  const kms = 9000;
  const countries = 3;

  return (
    <Container fluid className="main-container">
      <SimpleCarousel />
      <TravelInfo />
      <BlogPost />
    </Container>
  );
}

export default Home;
