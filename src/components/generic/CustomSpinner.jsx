import { Container, Spinner } from "react-bootstrap";
import "./CustomSpinner.scss";

function CustomSpinner() {
  return (
    <Container className="custom-spinner">
        <Spinner animation="border" style={{ width: "4rem", height: "4rem" }} />
      </Container>
  );
}

export default CustomSpinner;
