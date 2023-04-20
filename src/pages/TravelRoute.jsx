// react
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Sidebar from "../components/SideBar";
import TravelMap from "../components/TravelMap";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";

import CustomSpinner from "../components/generic/CustomSpinner";
import "./TravelRoute.scss";

function TravelRoute() {
  const [coordinates, setCoordinates] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(1);

  const getRoutes = async () => {
    const routes = await FirestoreService.getRoutes();
    setCoordinates([]);
    setRoutes(routes);
    setCoordinates(routes.map((r) => [r.location._long, r.location._lat]));
  };

  useEffect(() => {
    getRoutes();
  }, []);

  if (routes.length < 1) {
    return <CustomSpinner />;
  }
  return (
    <Container fluid className="travel-route-container">
      {!isMobile && <TitleComp title1="Recorrido" title2="" />}
      <Container fluid className="travel-route">
        <Container id="sidebar-wrapper" className="sidebar">
          <Sidebar
            routes={routes}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Container>
        <Container id="page-content-wrapper" className="mapwrapper">
          <TravelMap
            routes={routes}
            coordinates={coordinates}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default TravelRoute;
