import { Container } from "react-bootstrap";
import "./Title.scss";

function TitleComp({ title1 = "", title2 = "" }) {
  return (
    <Container className="title-component">
      <div className="title-content">
        <h2>
          {title1} <strong> {title2}</strong>
        </h2>

        <img
          alt= "title-icon-img"
          className="title-icon"
          src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/null/external-van-transportation-vol1-microdots-premium-microdot-graphic.png"
        />
      </div>
    </Container>
  );
}

export default TitleComp;
