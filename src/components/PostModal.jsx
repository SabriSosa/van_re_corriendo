import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectedPost } from "../slices/postSlice";
import "./PostModal.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import { getAddress, getAddressString, getDateString } from "./auxiliary";
import CustomModal from "./generic/CustomModal";
import HtmlContainer from "./generic/HtmlContainer";

export default function PostModal({ show, onHide }) {
  const [postCity, setPostCity] = useState();

  const _selectedPost = useSelector(selectedPost);

  useEffect(() => {
    if (_selectedPost) {
      getCity();
    }
  }, [_selectedPost]);

  if (!_selectedPost) return null;

  function resize() {
    /* set max-height by code */
    const container = document.getElementById(_selectedPost?.id);
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

  const getCity = async () => {
    const address = await getAddress(
      _selectedPost?.latitude,
      _selectedPost?.longitude
    );
    setPostCity(getAddressString(address));
  };

  const handleOnHide = () => {
    setPostCity(null);
    onHide();
  };

  const title = (
    <div>
      {_selectedPost?.title}
      <Container className="subtitle-post">
        <h6 className="subtitle" id="subtitle">
          {_selectedPost && getDateString(_selectedPost?.date)}
        </h6>
        -<h6 className="address"> {postCity} </h6>
      </Container>
    </div>
  );

  const body = (
    <Container fluid className="container-modal" id={_selectedPost?.id}>
      <SimpleCarrousel
        images={_selectedPost?.images}
        prefix="Camiontito/Posts"
        id="post-carrousel"
        transformation="w_800,ar_3:4,c_fill"
      />
      <HtmlContainer
        text={_selectedPost?.description}
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
