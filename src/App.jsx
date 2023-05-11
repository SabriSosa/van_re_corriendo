import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { es } from "make-plural/plurals";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { isDesktop } from "react-device-detect";
import ReactGA from "react-ga";
import { NotificationContainer } from "react-notifications";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import NavBarMenu from "./components/NavBar";
import TabsBarMenu from "./components/TabsBar";
import { messages } from "./locales/es/messages.js";
import Router from "./Router";

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
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   const mediaLibraryOptions = {
  //     cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  //     api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  //   };
  //   const handlers = {
  //     insertHandler: function (data) {
  //       data.assets.forEach((asset) => {
  //         console.log("Inserted asset:", JSON.stringify(asset, null, 2));
  //       });
  //     },
  //   };
  //   createMediaLibrary(mediaLibraryOptions, handlers);
  // }, []);

  // const TabsBar = lazy(() => import("./components/TabsBar"));

  // const NavBar = lazy(() => import("./components/NavBar"));

  const menu = isDesktop ? <NavBarMenu /> : <TabsBarMenu />;
  useEffect(() => {
    ReactGA.initialize("G-704PQ45RQ9");
  }, []);

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
