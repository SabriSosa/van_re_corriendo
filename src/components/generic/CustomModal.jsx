import React from "react";
import Modal from "react-bootstrap/Modal";
import "./CustomModal.scss";
import CustomSpinner from "./CustomSpinner";

export default function CustomModal({
  id,
  show,
  onHide,
  body,
  title,
  size = "lg",
  waiting = false,
  className = ""
}) {
  if (show && waiting) {
    <CustomSpinner />;
  }
  return (
    <Modal
      size={size}
      show={show}
      onHide={onHide}
      className={`${id}-modal ${className}`}
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
