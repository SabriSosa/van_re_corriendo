import React from "react";
import Modal from "react-bootstrap/Modal";

export default function CustomModal({ id, show, onHide, body, title }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className={`${id}-modal`}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      key={`${id}-modal`}
      centered
    >
      <Modal.Header className={`modal-header-${id}`} closeButton>
        <Modal.Title
          className={`modal-title-${id}`}
          id="contained-modal-title-vcenter"
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}
