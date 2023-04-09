// react
import React, { useState, useEffect, useRef } from "react";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Polyline from "ol/format/Polyline";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { transform } from "ol/proj";
import { toStringXY } from "ol/coordinate";
import { getVectorContext } from "ol/render";

import data from "./example.json";

import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style";

import "./MapWrapper.scss";
function MapWrapper(props) {
  // set intial state
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [selectedCoord, setSelectedCoord] = useState();

  const key = "e2ONh3RbPsx6BD5M8720";
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const center = [-5639523.95, -3501274.52];

  // pull refs
  const mapElement = useRef();

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef();
  mapRef.current = map;

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    })
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        // USGS Topo
        new TileLayer({
          source: new XYZ({
            attributions: attributions,
            url:
              "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=" + key,
            tileSize: 512,
          }),
        }),
        initalFeaturesLayer
      ],
      view: new View({
        projection: "EPSG:3857",
        center: center,
        zoom: 10,
        minZoom: 2,
        maxZoom: 19,
      }),
      controls: [],
    });


    // save map and vector layer references to state
    setMap(initialMap);

    console.log("entro aca?")
  }, []);


  useEffect(() => {
    console.log("entro aca 2?",map)
    
    if (map){
    const polyline = data.routes[0].geometry;

    const route = new Polyline({
      factor: 1e6,
    }).readGeometry(polyline, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    });

    const routeFeature = new Feature({
      type: "route",
      geometry: route,
    });
    const startMarker = new Feature({
      type: "icon",
      geometry: new Point(route.getFirstCoordinate()),
    });

    const endMarker = new Feature({
      type: "icon",
      geometry: new Point(route.getLastCoordinate()),
    });
    const position = startMarker.getGeometry().clone();
    const geoMarker = new Feature({
      type: "geoMarker",
      geometry: position,
    });

    const styles = {
      route: new Style({
        stroke: new Stroke({
          width: 6,
          color: [237, 212, 0, 0.8],
        }),
      }),
      icon: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "data/icon.png",
        }),
      }),
      geoMarker: new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: "black" }),
          stroke: new Stroke({
            color: "white",
            width: 2,
          }),
        }),
      }),
    };

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [routeFeature, geoMarker, startMarker, endMarker],
      }),
      style: function (feature) {
        return styles[feature.get("type")];
      },
    });

    map.addLayer(vectorLayer);
  }
  }, [map]);



  // render component
  return (
    <div>
      <div ref={mapElement} className="map"></div>
    <div> PRUEBA </div>
      <div className="clicked-coord-label">
        <p>{selectedCoord ? toStringXY(selectedCoord, 5) : ""}</p>
      </div>
    </div>
  );
}

export default MapWrapper;
