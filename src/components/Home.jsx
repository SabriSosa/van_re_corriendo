import React from "react";

import { Container } from "react-bootstrap";
import SimpleCarousel from "./Carousel";
import BlogPost from "./Post";

function Home() {
  return (
    <Container fluid className="main-coint">
      <SimpleCarousel />
      <BlogPost />
    </Container>
  );
}

export default Home;
