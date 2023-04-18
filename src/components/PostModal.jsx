import DOMPurify from "dompurify";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { getCity, getDateString } from "./auxiliary";
import "./PostModal.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import CustomModal from "./generic/CustomModal";

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

  const title = (
    <div>
      {selectedPost?.title}
      <h5 id="subtitle">{selectedPost && getDateString(selectedPost?.date)}</h5>
      <h6> {postCity} </h6>
    </div>
  );

  const body = (
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
  );

  return (
    <CustomModal
      id="post"
      title={title}
      body={body}
      show={show}
      onHide={handleOnHide}
    />
  );
}
