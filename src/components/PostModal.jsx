import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SimpleCarrousel from "./SimpleCarrousel";
import DOMPurify from "dompurify";

import "./PostModal.scss";

export default function PostModal({ show, onHide, selectedPost }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="post-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      key="test-modal"
      centered
    >
      <Modal.Header className="modal-header-post" closeButton>
        <Modal.Title className="modal-title-post" id="contained-modal-title-vcenter">
          {selectedPost?.title}
          <h6 id="subtitle">
          {`${new Date(1000 * selectedPost?.date.seconds).getDate()}/${
            new Date(1000 * selectedPost?.date.seconds).getMonth() + 1
          }/${new Date(1000 * selectedPost?.date.seconds).getFullYear()}`}
        </h6>
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
