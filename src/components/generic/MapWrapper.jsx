// react
import React, { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import "./MapWrapper.scss";
import {
  FullScreen,
  defaults as defaultControls,
  Control,
  Zoom,
} from "ol/control.js";

import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function MapWrapper({ setMap }) {
  const mapElement = useRef();
  const mapRef = useRef();

  const navigate = useNavigate();

  const createBackButton = () => {
    let button = document.createElement("button");
    button.innerHTML = '<i class="fa fa-arrow-left"></i>';

    const handleBack = function (e) {
      navigate("/home");
    };

    button.addEventListener("click", handleBack, false);

    let element = document.createElement("div");
    element.className = "ol-control back-button";
    element.appendChild(button);

    const BackButton = new Control({
      element: element,
    });

    return BackButton;
  };
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });
    if (mapElement.current && !mapRef.current) {
      const key = "e2ONh3RbPsx6BD5M8720";
      const attributions =
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

      const initialMap = new Map({
        target: mapElement.current,
        layers: [
          // USGS Topo
          new TileLayer({
            source: new XYZ({
              attributions: attributions,
              url:
                "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=" +
                key,
              tileSize: 512,
            }),
          }),
          initalFeaturesLayer,
        ],

        view: new View({
          projection: "EPSG:4326",
          center: [-56.162582739424394, -34.913942242397226],
          zoom: 5,
          minZoom: 2,
          maxZoom: 19,
        }),

        controls: [new FullScreen()],
      });

      if (!isMobile) {
        initialMap.addControl(new Zoom());
      } else {
        initialMap.addControl(createBackButton());
      }

      initialMap.getTargetElement().classList.add('spinner');


      mapRef.current = initialMap;
      setMap(initialMap);
    }
  }, [mapElement, mapRef]);

  return (
    <Container fluid>
      <div ref={mapElement} className="map"></div>
    </Container>
  );
}

export default MapWrapper;
