import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import TravelInfo from "../components/TravelInfo";
import "./Home.scss";

const Destinations = React.lazy(() => import("../components/Destinations"));

function Home() {
  useEffect(() => {
    ReactGA.pageview("/home");
  }, []);

  return (
    <Container fluid className="home-container">
      <Suspense fallback={<div></div>}>
        <Destinations />
      </Suspense>

      <TravelInfo />
    </Container>
  );
}

export default Home;
