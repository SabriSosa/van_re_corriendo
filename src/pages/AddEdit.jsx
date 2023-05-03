import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "@lingui/macro";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import * as FirestoreService from "../services/firestore";

import { format } from "date-fns";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewItemMap from "../components/NewItemMap";
import { getAddress } from "../components/auxiliary";
import CustomModal from "../components/generic/CustomModal";
import ImageUploadPreview from "../components/generic/ImageUploadPreview";
import { getPostById, selectPostById } from "../slices/postSlice";
import "./AddEdit.scss";
function AddEdit() {
  const { postId } = useParams();
  const [coord, setCoord] = useState();

  const [item, setItem] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  const selectedPost = useSelector((state) => selectPostById(state, postId));
  const isAddMode = !postId;

  // form validation rules
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    id: Yup.string().required("Id is required"),
    description: Yup.string().required("Description is required"),
    date: Yup.string().required("Date is required"),
  });
  const dispatch = useDispatch();

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    errors,
    formState,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    return isAddMode ? createItem(data) : updateItem(postId, data);
  }

  function createItem(data) {
    console.log("createData", data);
    // return userService
    //   .create(data)
    //   .then(() => {
    //     alertService.success("User added", { keepAfterRouteChange: true });
    //     history.push(".");
    //   })
    //   .catch(alertService.error);
  }

  function updateItem(id, data) {
    console.log("updateItem", data);
    console.log("id", id);
    // return userService
    //   .update(id, data)
    //   .then(() => {
    //     alertService.success("User updated", { keepAfterRouteChange: true });
    //     history.push("..");
    //   })
    //   .catch(alertService.error);
  }

  useEffect(() => {
    async function getFields() {
      if (!isAddMode) {
        if (selectedPost) {
          // get item and set form fields
          const fields = [
            "id",
            "date",
            "title",
            "description",
            "latitude",
            "longitude",
            "country",
            "state",
            "city",
            "images",
          ];

          const _images = selectedPost.images.map(
            (img) =>
              `https://res.cloudinary.com/djbmfd9y6/image/upload/ar_3:4,c_fill/Camiontito/Posts/${img}`
          );
          const _date = format(new Date(selectedPost.date), "yyyy-MM-dd");

          fields.forEach((field) => {
            setValue(
              field,
              field === "date"
                ? _date
                : field === "images"
                ? _images
                : selectedPost[field]
            );
          });
          setItem({ ...selectedPost, date: _date, images: _images });
        }
      } else {
        setValue("date", format(new Date(), "yyyy-MM-dd"));
        const id = await FirestoreService.getMaxId("post");
        setValue("id", id);
      }
    }
    getFields();
  }, [selectedPost]); // Or [] if effect doesn't need props or state

  useEffect(() => {
    if (postId && !selectedPost) {
      dispatch(getPostById(postId));
    }
  }, [postId]); // Or [] if effect doesn't need props or state

  const onSaveLocation = async () => {
    const _address = await getAddress(coord?.lat, coord?.lon);
    const city =
      _address?.city || _address?.village || _address?.town || _address?.county;
    setModalShow(false);
    setValue("city", city);
    setValue("country", _address.country);
    setValue("state", _address.state);
    setValue("latitude", coord?.lat);
    setValue("longitude", coord?.lon);
  };

  const coordinates =
    selectedPost && !coord
      ? { lat: selectedPost.latitude, lon: selectedPost.longitude }
      : coord;

  const body = (
    <Container fluid className="modal-body-add-edit">
      <NewItemMap setCoord={setCoord} coordinates={coordinates} />
      <div>
        {t`new.item.coord`}: {coord?.lat} {coord?.lon}
      </div>
      {coord && (
        <Button
          className="add-edit-button mb-3"
          variant="primary"
          onClick={() => onSaveLocation()}
        >
          {t`generic.save`}
        </Button>
      )}
    </Container>
  );
  return (
    <Container className="add-edit-container">
      <CustomModal
        id="add-edit-modal-location"
        show={modalShow}
        onHide={() => setModalShow(false)}
        body={body}
      />
      <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <h1>{isAddMode ? "Add Item" : "Edit Item"}</h1>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.id`}</Form.Label>
            <Form.Control
              name="id"
              type="text"
              {...register("id", {
                required: "Required",
              })}
              className={`form-control ${errors?.id ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.id?.message}</div>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.date`}</Form.Label>
            <Form.Control
              name="date"
              type="date"
              {...register("date", {
                required: "Required",
              })}
              className={`form-control ${errors?.date ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.date?.message}</div>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>{t`new.item.title`}</Form.Label>
          <Form.Control
            name="title"
            type="text"
            {...register("title", {
              required: "Required",
            })}
            className={`form-control ${errors?.title ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors?.title?.message}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t`new.item.description`}</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={4}
            {...register("description", {
              required: "Required",
            })}
            className={`form-control ${
              errors?.description ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors?.description?.message}</div>
        </Form.Group>
        <Button
          className="add-edit-button mb-3"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          {t`new.item.add.location`}
        </Button>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.latitude`}</Form.Label>
            <Form.Control
              name="latitude"
              type="text"
              {...register("latitude", {
                required: "Required",
              })}
              className={`form-control ${errors?.latitude ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.latitude?.message}</div>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.longitude`}</Form.Label>
            <Form.Control
              name="longitude"
              type="text"
              {...register("longitude", {
                required: "Required",
              })}
              className={`form-control ${
                errors?.longitude ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors?.longitude?.message}</div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.city`}</Form.Label>
            <Form.Control
              name="city"
              type="text"
              {...register("city", {
                required: "Required",
              })}
              className={`form-control ${errors?.city ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.city?.message}</div>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.state`}</Form.Label>
            <Form.Control
              name="state"
              type="text"
              {...register("state", {
                required: "Required",
              })}
              className={`form-control ${errors?.state ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.state?.message}</div>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{t`new.item.country`}</Form.Label>
            <Form.Control
              name="country"
              type="text"
              {...register("country", {
                required: "Required",
              })}
              className={`form-control ${errors?.country ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors?.country?.message}</div>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>{t`new.item.images`}</Form.Label>
          <Form.Control
            name="images"
            type="text"
            as={ImageUploadPreview}
            item={item}
            className={`form-control ${errors?.images ? "is-invalid" : ""}`}
          />

          <div className="invalid-feedback">{errors?.images?.message}</div>
        </Form.Group>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="add-edit-button"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            {t`generic.submit`}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export { AddEdit };
