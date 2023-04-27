import { t } from "@lingui/macro";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import NewItemMap from "../components/NewItemMap";
import {
  getAddress,
  getDateFormat,
  uploadPhoto,
} from "../components/auxiliary";
import CustomModal from "../components/generic/CustomModal";
import CustomSpinner from "../components/generic/CustomSpinner";
import * as FirestoreService from "../services/firestore";
import "./NewItem.scss";

function NewItem() {
  const [waiting, setWaiting] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [coord, setCoord] = useState();
  const [address, setAddress] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [formType, setFormType] = React.useState(1);
  const [isVideo, setIsVideo] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      const _id = await FirestoreService.getMaxId("post");
      setIdItem(_id);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWaiting(true);
    const {
      id,
      title,
      description,
      date,
      formFileMultiple,
      city,
      country,
      state,
      reference,
    } = event.target;

    const img =
      formType === 1 ? date.value : formType === 2 ? id.value : reference.value;
    const folder =
      formType === 1 ? "Posts" : formType === 2 ? "Routes" : "Building";

    const images = [];
    const files = formFileMultiple.files;
    for (let i = 1; i <= files.length; i++) {
      const extension = files[i - 1].type.split("/")[1];
      images.push(`${img}_${i}.${extension}`);
    }

    const _entryDate = getDateFormat(date.value);

    const genericValues = {
      title: title.value,
      description: description.value,
      id: idItem,
      images: images,
    };

    const values = {
      date: _entryDate,
      lat: coord?.lat,
      lon: coord?.lon,
      ...genericValues,
    };

    if (files.length > 0) {
      uploadPhoto(formFileMultiple.files, img, folder);
    }

    formType === 1
      ? await FirestoreService.createPost({ ...values })
      : formType === 2
      ? await FirestoreService.createRoute({
          ...values,
          city: city?.value,
          state: state?.value,
          country: country?.value,
        })
      : await FirestoreService.createProject({
          ...genericValues,
          reference: reference?.value,
          isVideo: isVideo,
        });

    setWaiting(false);
    setCoord();
    setAddress({});
    setFormType(1);
    setIsVideo(false);

    NotificationManager.success(
      t`new.item.success.title`,
      t`new.item.success.message`
    );
  };

  if (waiting) {
    return <CustomSpinner />;
  }

  const handleOnChange = async (evt) => {
    const { value } = evt.target;

    const item = value == 1 ? "post" : value == 2 ? "route" : "project";
    const _id = await FirestoreService.getMaxId(item);
    setFormType(value);
    setIdItem(_id);
    setIsVideo(false);
  };

  const onSave = async () => {
    const _address = await getAddress(coord?.lat, coord?.lon);
    setModalShow(false);
    setAddress(_address);
  };

  const body = (
    <Container fluid className="modal-body-new-item">
      <NewItemMap setCoord={setCoord} />
      <div>
        {t`new.item.coord`}: {coord?.lat} {coord?.lon}
      </div>
      {coord && (
        <Button
          className="new-item-button mb-3"
          variant="primary"
          onClick={() => onSave()}
        >
          {t`generic.save`}
        </Button>
      )}
    </Container>
  );

  const city =
    address?.city || address?.county || address?.village || address?.town;
  return (
    <Container fluid className="new-item-container">
      <NotificationContainer />

      <CustomModal
        id="new-item"
        show={modalShow}
        onHide={() => setModalShow(false)}
        body={body}
      />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="type" onChange={handleOnChange}>
          <Form.Label>{t`new.item.type`}</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">{t`new.item.post`}</option>
            <option value="2">{t`new.item.route`}</option>
            <option value="3">{t`new.item.project`}</option>
          </Form.Select>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="id">
            <Form.Label> {t`new.item.id`}</Form.Label>
            <Form.Control
              value={idItem || ""}
              type="text"
              name="idItem"
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} controlId="date" hidden={formType == 3}>
            <Form.Label> {t`new.item.date`}</Form.Label>
            <Form.Control
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              type="date"
              name="date"
              placeholder="Date"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label> {t`new.item.title`}</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="reference"
          hidden={formType != 3}
        >
          <Form.Label> {t`new.item.ref`}</Form.Label>
          <Form.Control type="text" placeholder="Reference" />
        </Form.Group>
        <Form.Group className="mb-3" hidden={formType != 3}>
          <Form.Check
            onChange={() => setIsVideo(!isVideo)}
            value={isVideo || false}
            type="checkbox"
            label={t`new.item.is.video`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label> {t`new.item.description`}</Form.Label>
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
          hidden={formType == 3}
        >
          {t`new.item.add.location`}
        </Button>
        <Row hidden={formType == 3 || !coord}>
          <Form.Group as={Col} controlId="latitude">
            <Form.Label> {t`new.item.latitude`}</Form.Label>
            <Form.Control
              type="text"
              value={coord?.lat || ""}
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} controlId="longitude">
            <Form.Label> {t`new.item.longitude`}</Form.Label>
            <Form.Control
              type="text"
              value={coord?.lon || ""}
              readOnly
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3" hidden={formType == 3 || !coord}>
          <Form.Group as={Col} controlId="country">
            <Form.Label>{t`new.item.country`}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              defaultValue={address?.country}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="city">
            <Form.Label>{t`new.item.city`}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              defaultValue={city}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="state">
            <Form.Label>{t`new.item.state`}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter state"
              defaultValue={address?.state}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>{t`new.item.images`}</Form.Label>
          <Form.Control type="file" multiple accept="image/*,video/*" />
        </Form.Group>

        <Button variant="primary" type="submit" className="new-item-button">
          {t`generic.submit`}
        </Button>
      </Form>
    </Container>
  );
}

export default NewItem;
