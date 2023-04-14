import DOMPurify from "dompurify";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { getCity, getDateString } from "./auxiliary";
import "./PostModal.scss";
import SimpleCarrousel from "./SimpleCarrousel";

export default function PostModal({ show, onHide, selectedPost }) {
  const [postCity, setPostCity] = useState();

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

  return (
    <Modal
      show={show}
      onHide={handleOnHide}
      className="post-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      key="test-modal"
      centered
    >
      <Modal.Header className="modal-header-post" closeButton>
        <Modal.Title
          className="modal-title-post"
          id="contained-modal-title-vcenter"
        >
          {selectedPost?.title}
          <h5 id="subtitle">
            {selectedPost && getDateString(selectedPost?.date)}
          </h5>
          <h6> {postCity} </h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid className="container-modal">
          <SimpleCarrousel
            prefix="Camiontito/Posts"
            images={selectedPost?.images}
          />
          <Container
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedPost?.description),
            }}
            className="description-modal"
          />
        </Container>
      </Modal.Body>
    </Modal>
  );
}
