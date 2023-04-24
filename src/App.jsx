/* eslint-disable no-restricted-globals */
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React from "react";
import { Container } from "react-bootstrap";
import { isDesktop } from "react-device-detect";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";
import { messages } from "./locales/es/messages.js";
import Router from "./Router";

i18n.load("es", messages);
i18n.activate("es");

//const userLang = navigator.language || navigator.userLanguage;

function App() {
  const excludedRoutes = isDesktop ? [] : ["/route"];
  const location = useLocation();

  return (
    <I18nProvider i18n={i18n}>
      {!excludedRoutes.includes(location?.pathname) && <NavBarMenu />}
      <Container fluid className="main-container">
        <Router />
      </Container>
      {!excludedRoutes.includes(location?.pathname) && <Footer />}
    </I18nProvider>
  );
}

export default App;
