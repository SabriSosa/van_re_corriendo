import React from "react";
import { Container } from "react-bootstrap";
import "./ProjectItem.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import ReadMore from "./generic/ReadMore";

function ProjectItem({ item }) {
  const {
    title = "",
    id = "",
    description = "",
    isVideo = false,
    images,
    reference,
  } = item;

  return (
    <Container key={id} id={reference} fluid className="container-project">
      <Container fluid className="item-project">
        <h3>{title}</h3>
        <ReadMore text={description} />
      </Container>
      <SimpleCarrousel
        id="project-carrousel"
        images={images}
        prefix="Camiontito/Building"
        isVideo={isVideo}
        transformation="w_800,ar_3:4,c_fill"
      />
    </Container>
  );
}

export default ProjectItem;
