import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TitleComp from "../components/Title";
import "./Contact.scss";

function ContactForm() {
  return (
    <Container>
      <Container className="title-content" >
      <TitleComp title1="Contacto"/>
        Si has llegado hasta aquí es porque quieres contactarnos... ¡Pues no lo
        dudes! Habla ahora o calla para siempre. Puedes enviarnos un correo a
        través del siguiente formulario y nos pondremos en contacto contigo lo
        antes posible. Si quieres colaborar con nosotros y conocernos mejor, te
        recomendamos que antes te pases por nuestra sección sobre nosotros.
      </Container>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Text>Texto</Form.Text>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
