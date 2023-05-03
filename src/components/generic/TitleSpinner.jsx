import { Container, Spinner } from "react-bootstrap";
import "./TitleSpinner.scss";
import TitleComp from "./Title";

function CustomSpinner({title}) {
  return (
    <Container fluid className="title-spinner">
      <TitleComp title1={`Cargando ${title}...`}/>
      <Spinner animation="border" style={{ width: "3rem", height: "3rem" }} />
    </Container>
  );
}

export default CustomSpinner;
