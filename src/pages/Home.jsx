import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import TravelInfo from "../components/TravelInfo";
import "./Home.scss";
//import Destinations from "../components/Destinations";

const Destinations = React.lazy(() => import("../components/Destinations"));

function Home() {
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
