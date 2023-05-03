import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { selectLoading } from "../../slices/genericSlice";
import "./CustomModal.scss";
import CustomSpinner from "./CustomSpinner";

export default function CustomModal({
  id,
  show,
  onHide,
  body,
  title,
  size = "lg",
  className = "",
}) {
  const loading = useSelector(selectLoading);
  const style = show && loading ? { visibility: "hidden" } : {};

  return (
    <div>
      {show && loading && <CustomSpinner />}
      <Modal
        style={style}
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
    </div>
  );
}
