import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./Router";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";
import { messages } from "./locales/es/messages.js";

i18n.load("es", messages);
i18n.activate("es");

//const userLang = navigator.language || navigator.userLanguage;

function App() {
  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <BrowserRouter>
          <NavBarMenu />
          <Container fluid className="main-container">
            <Router />
          </Container>
          <Footer />
        </BrowserRouter>
      </I18nProvider>
    </React.StrictMode>
  );
}

export default App;
