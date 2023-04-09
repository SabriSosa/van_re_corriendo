import React from "react";
import {
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  LoadScript,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";

import forestRoute from "./data";

import { useState } from "react";

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

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: test,
  zIndex: 1,
};

const onLoad = (marker) => {
};
console.log("path", test);

function TravelRoute() {
  const [openInfoW, setOpenInfoW] = useState(false);

  console.log("openInfo", openInfoW)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAk6qAx5lRvzYGhKs-I8F8Yg3dVwVTRWfo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {locations.map(({ id, lat, lng, name, indicator }) => (
          <MarkerF
            key={id}
            onLoad={onLoad}
            position={{ lat: lat, lng: lng }}
            onClick={() => setOpenInfoW(true)}
          >
            {openInfoW && (
              <InfoWindowF
                key={`infowindow-${name}`}
                visible={true}
                position={{ lat: lat, lng: lng }}
              >
                <div>{indicator}</div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}

        <PolylineF onLoad={onLoad} path={path} options={options} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(TravelRoute);
