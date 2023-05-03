import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import TravelInfo from "../components/TravelInfo";
import "./Home.scss";
//import Destinations from "../components/Destinations";

const Destinations = React.lazy(() => import("../components/Destinations"));

function Home() {
  return (
    <Container fluid className="home-container">
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

      <Suspense fallback={<div></div>}>
        <Destinations />
      </Suspense>

      <TravelInfo />
    </Container>
  );
}

export default Home;
