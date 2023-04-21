import React from "react";
import { Container } from "react-bootstrap";
import ReadMore from "./generic/ReadMore";
import "./ProjectItem.scss";
import SimpleCarrousel from "./SimpleCarrousel";

function ProjectItem({ item }) {
  const {
    title = "",
    id = "",
    description = "",
    isVideo = false,

    images,
  } = item;

  console.log("images", images);

  return (
    <Container key={id} id={id} fluid className="container-project">
      <Container fluid className="item-project">
        <h3>{title}</h3>
        <ReadMore text={description} />
      </Container>
      <SimpleCarrousel
        id="project-carrousel"
        images={images}
        prefix="Camiontito/Building"
        isVideo={isVideo}
      />
    </Container>
  );
}

export default ProjectItem;
