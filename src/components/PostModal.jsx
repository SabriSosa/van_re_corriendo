import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./PostModal.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import { getCity, getDateString } from "./auxiliary";
import CustomModal from "./generic/CustomModal";
import HtmlContainer from "./generic/HtmlContainer";

export default function PostModal({ show, onHide, selectedPost }) {
  const [postCity, setPostCity] = useState();

  function resize() {
    /* set max-height by code */
    const container = document.getElementById(selectedPost?.id);
    if (container) {
      var colHeight = container
        .querySelector(".post-carrousel")
        ?.getBoundingClientRect().height;
      const description = container.querySelector(".description-modal");
      if (description) {
        description.style.maxHeight = colHeight + "px";
        document
          .getElementsByClassName("post-modal")[0]
          .classList.remove("hidden-modal");
      }
    }
  }

  resize();
  window.onresize = resize;

  React.useEffect(() => {
    if (selectedPost)
      getCity(
        selectedPost?.location._lat,
        selectedPost?.location._long,
        setPostCity
      );
  }, [selectedPost]);

  const handleOnHide = () => {
    setPostCity(null);
    onHide();
  };

  const title = (
    <div>
      {selectedPost?.title}
      <Container className="subtitle-post">
        <h6 className="subtitle" id="subtitle">
          {selectedPost && getDateString(selectedPost?.date)}
        </h6>
        -<h6 className="address"> {postCity} </h6>
      </Container>
    </div>
  );

  const body = (
    <Container fluid className="container-modal" id={selectedPost?.id}>
      <SimpleCarrousel
        prefix="Camiontito/Posts"
        images={selectedPost?.images}
        id="post-carrousel"
      />
      <HtmlContainer
        text={selectedPost?.description}
        className="description-modal"
      />
    </Container>
  );

  return (
    <CustomModal
      id="post"
      title={title}
      body={body}
      show={show}
      className="hidden-modal"
      onHide={handleOnHide}
    />
  );
}
