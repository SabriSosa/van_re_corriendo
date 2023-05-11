import { t } from "@lingui/macro";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { isMobile, useMobileOrientation } from "react-device-detect";
import ReactGA from "react-ga4";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import "./AboutUs.scss";

function AboutUs() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/about-us", title: "About us" });
  }, []);
  const { isPortrait } = useMobileOrientation();

  const sabri =
    isMobile && isPortrait
      ? require("../images/sabri_mobile.png")
      : require("../images/sabri_desktop.png");
  const robert =
    isMobile && isPortrait
      ? require("../images/robert_mobile.png")
      : require("../images/robert_desktop.png");

  const person = (title, img, _text) => {
    return (
      <Container className="person-container">
        <h2 className="title-about">
          {title}
          <MdPerson className="title-icon" />
        </h2>
        <div>
          <Image
            height={isMobile ? 150 : 200}
            width={isMobile ? 150 : 200}
            alt={`photo-person-${title}`}
            className="person"
            src={img}
          />
          <HtmlContainer text={_text} className="about-us-html" />
        </div>
      </Container>
    );
  };

  return (
    <Container className="about-us-container">
      <TitleComp title1={t`about.us.who`} title2={t`about.us.are`} />
      <HtmlContainer text={t`about.us`} className="about-us-html" />
      {person(t`about.us.sabri`, sabri, t`about.us.sabri.description`)}
      {person(t`about.us.robert`, robert, t`about.us.robert.description`)}
    </Container>
  );
}

export default AboutUs;
