import React from "react";
import { Container } from "react-bootstrap";
import { useMobileOrientation } from "react-device-detect";
import { useSelector } from "react-redux";
import { selectSelectedPost } from "../slices/postSlice";
import "./PostModal.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import { getDateString } from "./auxiliary";
import CustomModal from "./generic/CustomModal";
import HtmlContainer from "./generic/HtmlContainer";

export default function PostModal({ show, onHide }) {
  const selectedPost = useSelector(selectSelectedPost);

  const { isLandscape } = useMobileOrientation();

  function resize() {
    if (isLandscape) {
      /* set max-height by code */
      setTimeout(() => {
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
      }, 100);
    }
  }

  resize();
  window.onresize = resize;

  const handleOnHide = () => {
    onHide();
  };

  const title = (
    <div>
      {selectedPost?.title}
      <Container className="subtitle-post">
        <h6 className="subtitle" id="subtitle">
          {selectedPost && getDateString(selectedPost?.date)}
        </h6>
        -
        <h6 className="address">
          {`${selectedPost?.city}, ${selectedPost?.state}, ${selectedPost?.country} `}
        </h6>
      </Container>
    </div>
  );

  const body = (
    <Container fluid className="container-modal" id={selectedPost?.id}>
      <SimpleCarrousel
        images={selectedPost?.images}
        isVideo={selectedPost?.isVideo}
        prefix="Camiontito/Posts"
        id="post-carrousel"
        transformation="ar_3:4,c_fill"
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
