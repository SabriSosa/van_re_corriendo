import { t } from "@lingui/macro";
import { Container } from "react-bootstrap";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <Container fluid className="not-found-container">
      <section id="not-found">
        <div className="circles">
          <div id="title">{t`not.found`}</div>
          <p>
            {t`not.found.404`}
            <small>{t`not.found.error`}</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
          <a href="/home">
            <span className="circle logo"></span>
          </a>
        </div>
      </section>
    </Container>
  );
}
