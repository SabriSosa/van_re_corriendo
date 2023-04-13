// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import Feature from "ol/Feature";
import Polyline from "ol/format/Polyline";
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style";
import { MultiPoint, Point } from "ol/geom";
import { Overlay } from "ol";
import { Popover } from "bootstrap";
import { toLonLat } from "ol/proj";

import "./MapWrapper.scss";
import * as FirestoreService from "../../services/firestore";

import TitleComp from "../Title";
import { Container } from "react-bootstrap";
import { toStringHDMS } from "ol/coordinate";

function MapWrapper(props) {
  // set intial state
  const [map, setMap] = useState();
  const [coordinates, setCoordinates] = useState();
  const [routes, setRoutes] = useState();
  const [overlay, setOverlay] = useState();

  // pull refs
  const mapElement = useRef();
  const mapRef = useRef();
  const overLayElement = useRef();

  // initialize map on first render - logic formerly put into componentDidMount
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
          zoom: 6,
          minZoom: 2,
          maxZoom: 19,
        }),
        controls: [],
      });

      mapRef.current = initialMap;

      const _overlay = new Overlay({
        element: overLayElement.current,
        positioning: "bottom-center",
        stopEvent: false,
      });
      setOverlay(_overlay);

      initialMap.addOverlay(_overlay);

      // change mouse cursor when over marker
      initialMap.on("pointermove", function (e) {
        const pixel = initialMap.getEventPixel(e.originalEvent);
        const hit = initialMap.hasFeatureAtPixel(pixel);
        initialMap.getTarget().style.cursor = hit ? "pointer" : "";
      });

      setMap(initialMap);
    }
  }, [mapElement, mapRef]);

  useEffect(() => {
    if (mapRef.current && map && coordinates) {
      // const coordinates = [
      //   [-56.162582739424394, -34.913942242397226], //mvdeo
      //   [-57.633252961652396, -32.70281084131128], //young
      //   [-58.147983409925814, -32.22477052889381], //colon
      //   [-60.697550204944925, -32.94940865527557], //rosario
      // ];

      fetch(
        "https://router.project-osrm.org/route/v1/driving/" +
          coordinates.join(";") +
          "?overview=full&geometries=polyline6"
      ).then(function (response) {
        response.json().then(function (result) {
          const polyline = result.routes[0].geometry;

          const route = new Polyline({
            factor: 1e6,
          }).readGeometry(polyline, {
            dataProjection: "EPSG:4326",
            featureProjection: map.getView().getProjection(),
          });

          const routeFeature = new Feature({
            type: "route",
            geometry: route,
          });

          const styles = {
            route: new Style({
              stroke: new Stroke({
                width: 3,
                color: [255, 255, 255, 0.8],
              }),
            }),
            geoMarker: new Style({
              image: new CircleStyle({
                radius: 7,
                fill: new Fill({ color: "black" }),
                stroke: new Stroke({
                  color: [255, 255, 255, 1],
                  width: 1,
                }),
              }),
            }),
          };

          // var _features = new Feature({
          //   geometry: new MultiPoint(coordinates),
          //   type: "icon",
          // });

          let vSource = new VectorSource({
            features: [routeFeature],
          });

          for (let i = 0; i < routes?.length; i++) {

            const route = routes[i];
            console.log("route.images[0]",route.images[0])

            const coord = [route.location._long, route.location._lat];
            const _feature = new Feature({
              geometry: new Point(coord),
            });

            const style = new Style({
              image: new Icon({
                scale: 0.4,
                src: route.images[0],
              }),
            });

            _feature.setStyle(style);

            vSource.addFeatures([_feature]);
          }

          const vectorLayer = new VectorLayer({
            source: vSource,
            style: function (feature) {
              return styles[feature.get("type")];
            },
          });

          map.addLayer(vectorLayer);
          map.getView().fit(routeFeature.getGeometry());
        });
      });
    }
  }, [map, coordinates]);

  const getRoutes = async () => {
    const querySnapshot = await FirestoreService.getRoutes();

    // reset the todo items value
    setCoordinates([]);
    setRoutes([]);

    querySnapshot.forEach((doc) => {
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

  React.useEffect(() => {
    getRoutes();
  }, []);

  useEffect(() => {
    if (overlay && map) {
      map.on("click", handleMapClick);
    }
  }, [overlay, map]);

  useEffect(() => {
    if (overlay && map) {
      map.on("click", handleMapClick);
    }
  }, [overlay]);

  const handleMapClick = (event) => {
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const feature = mapRef.current.forEachFeatureAtPixel(
      event.pixel,
      (feature) => {
        return feature;
      }
    );

    let popover = Popover.getInstance(overLayElement.current);
    if (popover) {
      popover.dispose();
    }

    if (!feature) {
      return;
    }

    const coordinate = event.coordinate;
    const hdms = toStringHDMS(toLonLat(coordinate));

    overlay.setPosition(event.coordinate);

    popover = new Popover(overLayElement.current, {
      animation: false,
      container: overLayElement.current,
      content: "<p>The location you clicked was:</p><code>" + hdms + "</code>",
      html: true,
      placement: "top",
      title: "Place to show",
    });
    popover.show();
  };

  // render component
  return (
    <Container fluid>
      <TitleComp title1="Recorrido" title2="" />
      <div ref={mapElement} className="map">
        <div ref={overLayElement} className="overlay" />
      </div>
    </Container>
  );
}

export default MapWrapper;
