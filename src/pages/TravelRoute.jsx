// react
import React, { useState, useEffect } from 'react';

// openlayers
import GeoJSON from 'ol/format/GeoJSON'

import forestRoute from "./data";

import MapWrapper from "../components/maps/MapWrapper";

const containerStyle = {
  width: "1000px",
  height: "500px",
};

const { traveledRoute, actualLocation, test } = forestRoute;

const locations = [...traveledRoute, actualLocation];
const center = {
  lat: actualLocation.lat,
  lng: actualLocation.lng,
};

const path = [...traveledRoute, actualLocation];

function TravelRoute() {
  const [openInfoW, setOpenInfoW] = useState(false);
  // set intial state
  const [features, setFeatures] = useState([]);

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock
  //  GeoJson API (read from flat .json file in public directory)
 
  return <MapWrapper />;
}

export default React.memo(TravelRoute);
