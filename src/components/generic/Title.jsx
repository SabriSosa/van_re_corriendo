import { Container } from "react-bootstrap";
import "./Title.scss";

const logo = require('../../images/van-logo.png');

function TitleComp({ title1 = "", title2 = "" }) {
  return (
    <Container className="title-component">
      <div className="title-content">
        <h2>
          {title1} <strong> {title2}</strong>
        </h2>

        <img
          alt="title-icon-img"
          className="title-icon"
          src={logo}
        />
      </div>
    </Container>
  );
}

export default TitleComp;
