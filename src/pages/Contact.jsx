import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TitleComp from "../components/Title";
import "./Contact.scss";

function ContactForm() {
  return (
    <Container>
      <TitleComp title1="Contacto" />
      Si has llegado hasta aquí es porque quieres contactarnos... ¡Pues no lo
      dudes! Habla ahora o calla para siempre. Puedes enviarnos un correo a
      través del siguiente formulario y nos pondremos en contacto contigo lo
      antes posible. Si quieres colaborar con nosotros y conocernos mejor, te
      recomendamos que antes te pases por nuestra sección sobre nosotros.
      <Form className="form-contact">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
