// react
import { FullScreen, Zoom } from "ol/control.js";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
// openlayers
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import "./MapWrapper.scss";

function MapWrapper({ setMap, className }) {
  const mapElement = useRef();
  const mapRef = useRef();

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
          zoom: 4,
          minZoom: 2,
          maxZoom: 19,
          enableRotation: false,
        }),

        controls: [new FullScreen()],
      });

      if (!isMobile) {
        initialMap.addControl(new Zoom());
      }

      initialMap.getTargetElement().classList.add("spinner");

      mapRef.current = initialMap;
      setMap(initialMap);
    }
  }, [mapElement, mapRef]);

  return (
    <Container
      fluid
      id="map-wrapper"
      ref={mapElement}
      className={`map ${className}`}
    ></Container>
  );
}

export default MapWrapper;
