import React from "react";
import Modal from "react-bootstrap/Modal";
import "./CustomModal.scss";

export default function CustomModal({
  id,
  show,
  onHide,
  body,
  title,
  size = "lg",
}) {
  return (
    <Modal
      size={size}
      show={show}
      onHide={onHide}
      className={`${id}-modal`}
      aria-labelledby="contained-modal-title-vcenter"
      key={`${id}-modal`}
      centered
    >
      {title && (
        <Modal.Header className={`modal-header-${id}`} closeButton>
          <Modal.Title
            className={`modal-title-${id}`}
            id="contained-modal-title-vcenter"
          >
            {title}
          </Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className={`modal-body-${id}`}>{body}</Modal.Body>
    </Modal>
  );
}
