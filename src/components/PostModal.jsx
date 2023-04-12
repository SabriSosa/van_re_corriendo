import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SimpleCarrousel from "./SimpleCarrousel";
import DOMPurify from "dompurify";
import "./PostModal.scss";
import React, { useState } from "react";

export default function PostModal({ show, onHide, selectedPost }) {

  const [postCity, setPostCity] = useState();

  React.useEffect(() => {
    if (selectedPost)
      getCity(selectedPost?.location._lat, selectedPost?.location._long);
  }, [selectedPost]);

  const handleOnHide=()=>{
    setPostCity(null);
    onHide();
  }

  function getCity(lat , lng) {
    let xhr = new XMLHttpRequest();  
    let key = "pk.463c606657acae1bc8f276a073302727"; //https://es.locationiq.com/ //sign in with Google Sabri    
    // Paste your LocationIQ token below.
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=" +
    key + "&lat=" +
    lat + "&lon=" + 
    lng + "&format=json", true);
  
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
  
    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          var ret = response.address.city + ", " + response.address.state + ", " + response.address.country;          
          setPostCity(ret);
          return ;
      }
    }
  }

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
        <Modal.Title className="modal-title-post" id="contained-modal-title-vcenter">
          {selectedPost?.title}
          <h5 id="subtitle">
          {`${new Date(1000 * selectedPost?.date.seconds).getDate()}/${
            new Date(1000 * selectedPost?.date.seconds).getMonth() + 1
          }/${new Date(1000 * selectedPost?.date.seconds).getFullYear()}`}
        </h5>
        <h6> { postCity } </h6>        
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
              __html:  DOMPurify.sanitize(selectedPost?.description),
            }}
            className="description-modal"
          />          
        </Container>
      </Modal.Body>
    </Modal>
  );
}
