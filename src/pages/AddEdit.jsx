import { yupResolver } from "@hookform/resolvers/yup";
import { t, Trans } from "@lingui/macro";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getAddress } from "../components/auxiliary";
import CustomModal from "../components/generic/CustomModal";
import CustomSpinner from "../components/generic/CustomSpinner";
import NewItemMap from "../components/NewItemMap";
import * as FirestoreService from "../services/FirestoreService";
import "./AddEdit.scss";
function AddEdit({
  validationSchema,
  selectedItem,
  status,
  fields,
  isAddMode,
  onSubmitItem,
  prefix,
}) {
  const [coord, setCoord] = useState();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    async function getFields() {
      if (!isAddMode) {
        fields.forEach((field) => {
          setValue(field.name, field.value);
        });
      } else {
        const id = await FirestoreService.getMaxId("post");
        setValue("date", format(new Date(), "yyyy-MM-dd"));
        setValue("id", id);
      }
    }
    getFields();
  }, [fields]);

  useEffect(() => {
    if (selectedItem && !coord) {
      setCoord({ lat: selectedItem.latitude, lon: selectedItem.longitude });
    }
  }, [selectedItem, coord]);

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    return onSubmitItem(data);
  }

  // Auxiliary Functions
  const createComponent = ({ name, label, key, ...rest }) => {
    let fieldsNames = fields.map(({ name }) => name);
    return (
      fieldsNames.includes(name) && (
        <Form.Group className="mb-3" as={Col} id={key} key={key}>
          <Form.Label>
            <Trans>{label}</Trans>
          </Form.Label>
          <Form.Control
            name
            {...rest}
            {...register(`${name}`, {
              required: "Required",
            })}
            disabled={true ? name === "id" : false}
            className={`form-control ${
              errors.hasOwnProperty(name) && errors[name] ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.hasOwnProperty(name) && errors[name].message}
          </div>
        </Form.Group>
      )
    );
  };

  const createRowComponent = ({ columns, key }) => {
    return (
      <Row className="mb-3" id={key} key={key}>
        {columns.map((col, idx) => {
          return createComponent({ ...col, key: idx });
        })}
      </Row>
    );
  };

  const fieldsComponents = [
    {
      component: createRowComponent({
        columns: [
          { name: "id", type: "number", label: t`new.item.id` },
          { name: "date", type: "date", label: t`new.item.date` },
        ],
        key: 1,
      }),
    },
    {
      component: createRowComponent({
        columns: [{ name: "title", type: "text", label: t`new.item.title` }],
        key: 2,
      }),
    },
    {
      component: createRowComponent({
        columns: [
          {
            name: "description",
            as: "textarea",
            rows: 4,
            label: t`new.item.description`,
          },
        ],
        key: 3,
      }),
    },
    {
      component: (
        <Button
          key="btn-location"
          className="add-edit-button mb-3"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          {t`new.item.add.location`}
        </Button>
      ),
    },
    {
      component: createRowComponent({
        columns: [
          { name: "latitude", type: "text", label: t`new.item.latitude` },
          { name: "longitude", type: "text", label: t`new.item.longitude` },
        ],
        key: 4,
      }),
    },
    {
      component: createRowComponent({
        columns: [
          { name: "city", type: "text", label: t`new.item.city` },
          { name: "state", type: "text", label: t`new.item.state` },
          { name: "country", type: "text", label: t`new.item.country` },
        ],
        key: 5,
      }),
    },
    // {
    //   component: createRowComponent({
    //     columns: [
    //       {
    //         name: "images",
    //         as: ImageUploadPreview,
    //         imgId: selectedItem?.date,
    //         idItem: getValues()?.id,
    //         errors: errors,
    //         isAddMode: isAddMode,
    //         images: fields.find(({ name }) => name === "images").value,
    //         setValue: setValue,
    //       },
    //     ],
    //     key: 6,
    //   }),
  ];

  //Location Modal

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

  const body = (
    <Container fluid className="modal-body-add-edit">
      <NewItemMap setCoord={setCoord} coordinates={coord} />
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

  if (status === "loading") {
    return <CustomSpinner />;
  }

  return (
    <Container className="add-edit-container">
      <CustomModal
        id="add-edit-modal-location"
        show={modalShow}
        onHide={() => setModalShow(false)}
        body={body}
      />

      <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <h1>
          <Trans>
            {isAddMode ? `add.${prefix}.title` : `edit.${prefix}.title`}
          </Trans>
        </h1>

        {fieldsComponents.map((field) => {
          const { component } = field;
          return component;
        })}

        <Form.Group>
          <Button
            key="btn-submit"
            variant="primary"
            type="submit"
            className="add-edit-button"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            {isAddMode ? t`generic.submit` : t`generic.edit`}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export { AddEdit };
