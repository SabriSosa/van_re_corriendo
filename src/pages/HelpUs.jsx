import { t } from "@lingui/macro";
import React from "react";

import { Container } from "react-bootstrap";
import TitleComp from "../components/generic/Title";

import HtmlContainer from "../components/generic/HtmlContainer";
import "./HelpUs.scss";

function HelpUs() {
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
          >
            <img
              alt="fb-logo"
              src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,w_150/v1681856889/Camiontito/fb-logo.png"
            />
          </a>
          <a
            target="_blank"
            className="social"
            href="https://www.instagram.com/direct/t/340282366841710300949128174428524375496"
            rel="noreferrer"
          >
            <img
              alt="ig-logo"
              src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,w_150/v1681857600/Camiontito/ig-logo.png"
            />
          </a>
        </p>
      </Container>
    </Container>
  );
}

export default HelpUs;
