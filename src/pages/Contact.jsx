import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Form } from 'react-bootstrap';
import TitleComp from "../components/generic/Title";
import "./Contact.scss";

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  

  const resetForm = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

    //https://dashboard.emailjs.com/sign-in 
    //user: sabrina.sosa.nicolais@gmail.com
    //pass: Facil12.
    const SERVICE_ID = "service_0b9ffn4";
    const TEMPLATE_ID = "template_63cpmie";
    const PUBLIC_KEY = "z5_r2jXFX-GOxrRvR";
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID , form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      resetForm();
  };
    
  return (
    <Container>
      <TitleComp title1="Contacto" />      
      <p className='text-contact'>
      Ahora es el momento donde podés hacernos todas las preguntas que quieras y sacarte todas esas dudas que tienes en mente.
      Si quieres saber más sobre la construcción del motorhome, sobre los lugares que visitamos, si quieres saber nuestra opinión,
      o simplemente quieres conocernos un poco mas no dudes en escribirnos.
      </p>

      <Form className="form-contact" onSubmit={sendEmail} ref={form} >
        <Form.Group className="mb-3" controlId="name" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="user_name" value={name || ''} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email"  value={email || ''} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message"  >
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} name="message"  value={message || ''} onChange={(e) => setMessage(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
        Enviar
        </Button>
      </Form>
    </Container>
  );

};

export default ContactForm;