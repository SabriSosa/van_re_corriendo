import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";

import { useEffect } from "react";
import "./Contact.scss";
import CustomSpinner from "../components/generic/CustomSpinner";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [text, setText] = useState("");
  const [waiting, setWaiting] = useState(true);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await FirestoreService.getText("contact");
      setText(response.description);
      setWaiting(false);
    }
    fetchData();
  }, []);

  //https://dashboard.emailjs.com/sign-in
  //user: sabrina.sosa.nicolais@gmail.com
  //pass: Facil12.
  const SERVICE_ID = "service_0b9ffn4";
  const TEMPLATE_ID = "template_63cpmie";
  const PUBLIC_KEY = "z5_r2jXFX-GOxrRvR";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        NotificationManager.info("Gracias por contactarnos!!");
      },
      (error) => {
        NotificationManager.error(
          "Ha ocurrido un error por favor intentelo mas tarde"
        );

        console.log(error.text);
      }
    );

    resetForm();
  };

  if (waiting) {
    return <CustomSpinner />;
  }

  return (
    <Container className="contact-container">
      <NotificationContainer />
      <TitleComp title1="Contacto" />
      <p className="text-contact">{text}</p>

      <Form className="form-contact" onSubmit={sendEmail} ref={form}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
