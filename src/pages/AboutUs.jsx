import { t } from "@lingui/macro";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import "./AboutUs.scss";

function AboutUs() {
  const sabri = isMobile
    ? require("../images/sabri_mobile.png")
    : require("../images/sabri_desktop.png");
  const robert = isMobile
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
          <Image alt={`photo-person-${title}`} className="person" src={img} />
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
