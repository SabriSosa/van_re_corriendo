import { Container, Spinner } from "react-bootstrap";
import "./CustomSpinner.scss";

function CustomSpinner() {
  return (
    <Container fluid className="custom-spinner">
        <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
      </Container>
  );
}

export default CustomSpinner;
