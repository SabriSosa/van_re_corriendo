import { format } from "date-fns";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NewItemMap from "../components/NewItemMap";
import CustomModal from "../components/generic/CustomModal";
import * as FirestoreService from "../services/firestore";

import { useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { getAddress, getDateFormat } from "../components/auxiliary";
import CustomSpinner from "../components/generic/CustomSpinner";
import "./NewItem.scss";

function NewItem() {
  const [waiting, setWaiting] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [coord, setCoord] = useState();
  const [address, setAddress] = useState();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      const _id = await FirestoreService.getMaxId("post");
      setIdItem(_id);
    }
    fetchData();
  }, []);

  const uploadPhoto = (files, id, folder) => {
    const url = `https://api.Cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "van_re_corriendo");
      formData.append("folder", "Camiontito");
      formData.append("public_id", `/${folder}/${id}_${i + 1}`);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const str = JSON.stringify(JSON.parse(data), null, 4);
          console.log(str);
        })
        .catch((err) => console.log("Error: ", err));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWaiting(true);
    const {
      id,
      title,
      description,
      type,
      date,
      formFileMultiple,
      city,
      country,
      state,
    } = event.target;

    const img = type.value === 1 ? date.value : id.value;
    const folder = type.value === 1 ? "Posts" : "Routes";

    const images = [];
    const files = formFileMultiple.files;
    for (let i = 1; i <= files.length; i++) {
      images.push(`${img}_${i}.jpg`);
    }

    const _entryDate = getDateFormat(date.value);

    const values = {
      title: title.value,
      description: description.value,
      date: _entryDate,
      lat: coord?.lat,
      lon: coord?.lon,
      images: images,
      id: idItem,
    };

    if (files.length > 0) {
      uploadPhoto(formFileMultiple.files, img, folder);
    }

    type.value === 1
      ? await FirestoreService.createPost({ ...values })
      : await FirestoreService.createRoute({
          ...values,
          city: city?.value,
          state: state?.value,
          country: country?.value,
        });

    setWaiting(false);
    setCoord({});
    setAddress({});
    NotificationManager.success("Se ha dado de alta correctamente", "");
  };

  if (waiting) {
    return <CustomSpinner />;
  }

  const handleOnChange = async (evt) => {
    const { value } = evt.target;
    const item = value == 1 ? "post" : "route";
    const _id = await FirestoreService.getMaxId(item);
    setIdItem(_id);
  };

  const onSave = async () => {
    const _address = await getAddress(coord?.lat, coord?.lon);
    setModalShow(false);
    setAddress(_address);
  };

  const body = (
    <Container fluid className="mb-3">
      <NewItemMap setCoord={setCoord} />
      <div>
        Coordinates: {coord?.lat} {coord?.lon}
      </div>
      {coord && (
        <Button
          className="new-item-button mb-3"
          variant="primary"
          onClick={() => onSave()}
        >
          Save
        </Button>
      )}
    </Container>
  );

  const city =
    address?.city || address?.county || address?.village || address?.town;
  return (
    <Container>
      <NotificationContainer />

      <CustomModal
        id="new-item"
        show={modalShow}
        onHide={() => setModalShow(false)}
        body={body}
      />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="type" onChange={handleOnChange}>
          <Form.Label>Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Post</option>
            <option value="2">Route</option>
          </Form.Select>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control
              value={idItem || ""}
              type="text"
              name="idItem"
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              type="date"
              name="date"
              placeholder="Date"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter description"
          />
        </Form.Group>

        <Button
          className="new-item-button mb-3"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Location
        </Button>
        {coord && (
          <Row>
            <Form.Group as={Col} controlId="latitude">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="text"
                value={coord?.lat || ""}
                readOnly
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlId="longitude">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                value={coord?.lon || ""}
                readOnly
                disabled
              />
            </Form.Group>
          </Row>
        )}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              defaultValue={address?.country}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              defaultValue={city}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter state"
              defaultValue={address?.state}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Images</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Button variant="primary" type="submit" className="new-item-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default NewItem;
