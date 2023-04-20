import React from "react";

import { Container } from "react-bootstrap";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";

import { useEffect, useState } from "react";
import CustomSpinner from "../components/generic/CustomSpinner";
import HtmlContainer from "../components/generic/HtmlContainer";
import "./HelpUs.scss";

function HelpUs() {
  const [text, setText] = useState("");
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response;
      response = await FirestoreService.getText("help.us");
      setText(response.description);
      setWaiting(false);
    }
    fetchData();
  }, []);

  if (waiting) {
    return <CustomSpinner />;
  }

  return (
    <Container className="helpUs">
      <TitleComp title1="Ayudanos" />
      <HtmlContainer text={text} />
      <Container>
        <p>
          O escribirnos desde las redes sociales:
          <a
            target="_blank"
            class="social"
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
            class="social"
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
