// react
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MapWrapper from "../components/MapWrapper";
import Sidebar from "../components/SideBar";
import TitleComp from "../components/Title";
import * as FirestoreService from "../services/firestore";
import "./TravelRoute.scss";

function TravelRoute() {
  const [coordinates, setCoordinates] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(1);

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
    <Container fluid className="travel-route">
      <Container  id="side_bar_pc">
      <TitleComp title1="Recorrido" title2="" />
      <Row>
        <Col xs={2} id="sidebar-wrapper" className="sidebar">
          <Sidebar
            routes={routes}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Col>
        <Col xs={10} id="page-content-wrapper" className="mapwrapper">
          <MapWrapper
            routes={routes}
            coordinates={coordinates}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Col>
      </Row>
      </Container>
      <Container  id="side_bar_mobile">
      <TitleComp title1="Recorrido" title2="" />
      <Container id="page-content-wrapper" className="mapwrapper">
          <MapWrapper
            routes={routes}
            coordinates={coordinates}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Container>
        <Container id="sidebar-wrapper" className="sidebar">
          <Sidebar
            routes={routes}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </Container>   
      </Container>
    </Container>
  );
}

export default TravelRoute;
