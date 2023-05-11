import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga4";
import TravelInfo from "../components/TravelInfo";
import "./Home.scss";
import Destinations from "../components/Destinations";

function Home() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
  }, []);

  return (
    <Container fluid className="home-container">
      <Destinations />
      <TravelInfo />
    </Container>
  );
}

export default Home;
