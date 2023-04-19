// react
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import TravelMap from "../components/TravelMap";
import Sidebar from "../components/SideBar";
import TitleComp from "../components/generic/Title";
import * as FirestoreService from "../services/firestore";
import {isMobile} from 'react-device-detect';
import { useNavigate } from "react-router";


import "./TravelRoute.scss";

function TravelRoute() {
  const [coordinates, setCoordinates] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(1);

  let navigate = useNavigate();


  const getRoutes = async () => {
    const querySnapshot = await FirestoreService.getRoutes();
    // reset the todo items value
    setCoordinates([]);
    setRoutes([]);

    querySnapshot.forEach(async (doc) => {
      const data = doc.data();
      setRoutes((prev) => [
        ...prev,
        {
          ...data,
        },
      ]);
      setCoordinates((prev) => [
        ...prev,
        [data.location._long, data.location._lat],
      ]);
    });
  };

  useEffect(() => {
    getRoutes();
  }, []);

  if (routes.length < 1) {
    return (
      <Container className="text-center">
        <Spinner animation="border" style={{ width: "4rem", height: "4rem" }} />
      </Container>
    );
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
