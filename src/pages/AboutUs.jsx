import React from "react";

import { Container, Image } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";

import { useEffect, useState } from "react";
import CustomSpinner from "../components/generic/CustomSpinner";
import HtmlContainer from "../components/generic/HtmlContainer";
import "./AboutUs.scss";

function AboutUs() {
  const [texts, setTexts] = useState([]);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const _texts = await FirestoreService.getTexts([
        "about.us",
        "about.us.sabri",
        "about.us.robert",
      ]);
      setTexts(_texts.map((elem) => elem.description));
      setWaiting(false);
    }
    fetchData();
  }, []);

  if (waiting) {
    return <CustomSpinner />;
  }

  const person = (title, img, _text) => {
    return (
      <div>
        <h2 className="title-about">
          {title}
          <MdPerson className="title-icon" />
        </h2>
        <div>
          <Image
            className="person"
            src={`https://res.cloudinary.com/djbmfd9y6/image/upload/w_200,c_fill,ar_1:1,g_auto,r_max/v1673907436/Camiontito/${img}.jpg`}
          />
          <HtmlContainer text={_text} className="about-us" />
        </div>
      </div>
    );
  };

  return (
    <Container className="aboutUs">
      <TitleComp title1="Quienes" title2="Somos" />
      <HtmlContainer text={texts[0]} className="about-us" />
      {person("SABRI", "IMG_20220929_173749_jwpzkt", texts[1])}
      {person("ROBERT", "robert-photo", texts[2])}
    </Container>
  );
}

export default AboutUs;
