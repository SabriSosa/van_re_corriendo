import { t } from "@lingui/macro";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga4";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import "./HelpUs.scss";

function HelpUs() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/help-us", title: "Help us" });
  }, []);
  const logofb = require("../images/fb-logo.png");
  const logoig = require("../images/ig-logo.png");

  return (
    <Container className="help-us-container">
      <TitleComp title1={t`help.us.title`} />
      <HtmlContainer text={t`help.us.intro`} />
      <Container fluid>
        <p>
          {t`help.us.social`}
          <a
            target="_blank"
            className="social"
            href="https://www.messenger.com/t/100085509656617"
            rel="noreferrer"
            aria-label="Facebook Messenger link"
          >
            <img alt="fb-logo" src={logofb} width={225} />
          </a>
          <a
            target="_blank"
            className="social"
            href="https://www.instagram.com/van_re_corriendo/"
            rel="noreferrer"
            aria-label="Intagram link"
          >
            <img alt="ig-logo" src={logoig} width={225} />
          </a>
        </p>
      </Container>
    </Container>
  );
}

export default HelpUs;
