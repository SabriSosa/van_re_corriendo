import emailjs from "@emailjs/browser";
import { t } from "@lingui/macro";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactGA from "react-ga4";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import TitleComp from "../components/generic/Title";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact" });
  }, []);
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

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
        NotificationManager.info(t`contact.info`);
      },
      (error) => {
        NotificationManager.error(t`contact.error`);
      }
    );

    resetForm();
  };

  return (
    <Container className="contact-container">
      <NotificationContainer />
      <TitleComp title1={t`contact.title`} />
      <p className="text-contact">{t`contact.intro`}</p>

      <Form className="form-contact" onSubmit={sendEmail} ref={form}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>{t`contact.name`}</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>{t`contact.email`}</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>{t`contact.message`}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          {t`generic.send`}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
