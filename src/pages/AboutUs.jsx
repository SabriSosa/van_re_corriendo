import { t } from "@lingui/macro";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { MdPerson } from "react-icons/md";
import HtmlContainer from "../components/generic/HtmlContainer";
import TitleComp from "../components/generic/Title";
import "./AboutUs.scss";

function AboutUs() {
  const person = (title, img, _text) => {
    return (
      <Container className="person-container">
        <h2 className="title-about">
          {title}
          <MdPerson className="title-icon" />
        </h2>
        <div>
          <Image
            className="person"
            src={`https://res.cloudinary.com/djbmfd9y6/image/upload/w_${
              isMobile ? "150" : "200"
            },c_fill,ar_1:1,g_auto,r_max/v1673907436/Camiontito/${img}.jpg`}
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
      {person(
        t`about.us.sabri`,
        "IMG_20220929_173749_jwpzkt",
        t`about.us.sabri.description`
      )}
      {person(
        t`about.us.robert`,
        "robert-photo",
        t`about.us.robert.description`
      )}
    </Container>
  );
}

export default AboutUs;
