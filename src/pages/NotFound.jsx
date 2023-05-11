import { t } from "@lingui/macro";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga4";
import "./NotFound.scss";

export default function NotFound() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/not-found",
      title: "Not Found",
    });
  }, []);

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
          <a aria-label="Home link" href="/home">
            <span className="circle logo"></span>
          </a>
        </div>
      </section>
    </Container>
  );
}
