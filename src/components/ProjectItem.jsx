import React from "react";
import "./ProjectItem.scss";
import { Container } from "react-bootstrap";
import SimpleCarrousel from "./SimpleCarrousel";

function ProjectItem({ item }) {
  const {
    count = 1,
    title = "",
    id = "",
    description = "",
    video = false,
  } = item;

  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`${id}${i}`);
  }

  return (
    <Container key = {id} fluid className="container-project">
      <Container fluid className="item-project">
        <h3 id={id}>{title}</h3>
        <p>{description}</p>
      </Container>
      <SimpleCarrousel
        id="project-carrousel"
        images={images}
        prefix="Construccion-Camiontito"
        video={video}
      />
    </Container>
  );
}

export default ProjectItem;
