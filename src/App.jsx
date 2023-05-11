import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { es } from "make-plural/plurals";
import React from "react";
import { Container } from "react-bootstrap";
import { isDesktop } from "react-device-detect";
import { NotificationContainer } from "react-notifications";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Router from "./Router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TabsBar from "./components/TabsBar";
import { messages } from "./locales/es/messages.js";

i18n.load("es", messages);
i18n.loadLocaleData({
  es: { plurals: es },
});
i18n.activate("es");

function App() {
  let excludedRoutes = ["/not-found"];
  if (!isDesktop) {
    excludedRoutes.push("/route");
  }
  const location = useLocation();
  const menu = isDesktop ? <NavBar /> : <TabsBar />;
  return (
    <I18nProvider i18n={i18n}>
      {menu}
      <Container fluid className="main-container">
        <NotificationContainer />
        <Router />
      </Container>
      {!excludedRoutes.includes(location?.pathname) && <Footer />}
    </I18nProvider>
  );
}

export default App;
