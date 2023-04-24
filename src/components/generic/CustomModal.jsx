import React from "react";
import Modal from "react-bootstrap/Modal";
import { isDesktop, isTablet } from "react-device-detect";
import "./CustomModal.scss";

export default function CustomModal({ id, show, onHide, body, title }) {
  const size = isDesktop ? "lg" : isTablet ? "md" : "sm";

  return (
    <Modal
      show={show}
      onHide={onHide}
      className={`${id}-modal`}
      size={size}
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
