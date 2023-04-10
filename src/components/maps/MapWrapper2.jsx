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

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });
    if (mapElement.current && !mapRef.current) {
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
          center: [ -56.162582739424394,-34.913942242397226],
          zoom: 6,
          minZoom: 2,
          maxZoom: 19,
        }),
        controls: [],
      });
      mapRef.current = initialMap;
      setMap(initialMap);
    }
  }, [attributions, center, mapElement, mapRef]);

  useEffect(() => {
    if (mapRef.current && map) {
      const coordinates = [
        [-56.162582739424394, -34.913942242397226 ], //mvdeo
        [-57.633252961652396,-32.70281084131128 ], //young
        [ -58.147983409925814, -32.22477052889381], //colon
        [-60.697550204944925, -32.94940865527557], //rosario
      ];

      fetch(
        "https://router.project-osrm.org/route/v1/driving/" +
          coordinates.join(";") +
          "?overview=full&geometries=polyline6"
      ).then(function (response) {
        response.json().then(function (result) {

          const markers = [];

          coordinates.map((coord)=>
            markers.push( new Feature({
              type: 'icon',
              geometry: new Point(coord),
            }))

          )

        
          console.log("markers",markers);
        const polyline = result.routes[0].geometry;

        const route = new Polyline({
          factor: 1e6,
        }).readGeometry(polyline, {
          dataProjection: 'EPSG:4326',
          featureProjection: map.getView().getProjection(),
        });

        const routeFeature = new Feature({
          type: "route",
          geometry: route,
        });

        const startMarker = new Feature({
          type: "icon",
          geometry: new Point([-56.162634,-34.91398]),
        });

        console.log("startMarker",startMarker);
        console.log("route.getFirstCoordinate()",route.getFirstCoordinate());

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
              src: 'https://github.com/openlayers/openlayers/blob/v3.20.1/examples/resources/logo-70x70.png'
            }),
          }),
          geoMarker: new Style({
            image: new CircleStyle({
              radius: 7,
              fill: new Fill({ color: "black" }),
              stroke: new Stroke({
                color: "red",
                width: 2,
              }),
            }),
          }),
        };


        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [routeFeature,startMarker],
          }),
          style: function (feature) {
            return styles[feature.get("type")];
          },
        });

        vectorLayer.getSource().addFeatures(markers)

        console.log("VECTOR LAYER", vectorLayer)

        map.addLayer(vectorLayer);
        map.getView().fit(routeFeature.getGeometry());

      })});
    }
  }, [map]);

  // render component
  return (
    <div>
      <div ref={mapElement} className="map"></div>
    </div>
  );
}

export default MapWrapper;
