// react
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga4";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import TravelMap from "../components/TravelMap";
import CustomSpinner from "../components/generic/CustomSpinner";
import TitleComp from "../components/generic/Title";
import {
  fetchRoutes,
  selectAllCoordinates,
  selectAllRoutes,
} from "../slices/routeSlice";
import "./TravelRoute.scss";

function TravelRoute() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/route",
      title: "Travel Route",
    });
  }, []);

  const dispatch = useDispatch();
  const routes = useSelector(selectAllRoutes);
  const coordinates = useSelector(selectAllCoordinates);
  const routeStatus = useSelector((state) => state.routes.status);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (routeStatus === "initial") {
      dispatch(fetchRoutes());
    }
  }, [routeStatus, dispatch]);

  if (routeStatus === "loading") {
    return <CustomSpinner />;
  }
  return (
    <Container fluid className="travel-route-container">
      {!isMobile && <TitleComp title1="Recorrido" title2="" />}
      <Container fluid className="sidebar-map">
        <Sidebar
          routes={routes}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <TravelMap
          routes={routes}
          coordinates={coordinates}
          setIsSelected={setIsSelected}
        />
      </Container>
    </Container>
  );
}

export default TravelRoute;
