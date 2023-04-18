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
import { Point } from "ol/geom";
import { Select } from "ol/interaction";
import MapWrapper from "./generic/MapWrapper";


function TravelMap({ routes, coordinates, selectedPlace, setSelectedPlace }) {
  const [map, setMap] = useState();
  const [vSource, setvSource] = useState();
  const [selectInteraction, setSelectInteraction] = useState();

  let selectStyle = function (feature) {
    setSelectedPlace(feature.get("id"));
    const img = feature.get("image").replace(/white/g, "dodgerblue");

    let styles = [
      new Style({
        image: new Icon({
          src: img,
          scale: 0.9,
        }),
        zIndex: 1,
      }),
    ];
    return styles;
  };

  useEffect(() => {
    if (selectedPlace && vSource) {
      const __feature = vSource?.getFeatureById(selectedPlace);
      var featuresCollection = selectInteraction.getFeatures();
      featuresCollection.pop();
      featuresCollection.push(__feature);
    }
  }, [selectedPlace, vSource]);

  useEffect(() => {
    if (map && coordinates) {
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

          let _vSource = new VectorSource({
            features: [routeFeature],
          });

          for (let i = 0; i < routes?.length; i++) {
            const route = routes[i];
            const coord = [route.location._long, route.location._lat];
            const _feature = new Feature({
              geometry: new Point(coord),
              id: route.id,
              image: `https://res.cloudinary.com/djbmfd9y6/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_white/Camiontito/Routes/${route.id}_1.png`,
            });

            const style = new Style({
              image: new Icon({
                scale: 0.4,
                src: `https://res.cloudinary.com/djbmfd9y6/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_white/Camiontito/Routes/${route.id}_1.png`,
              }),
            });

            _feature.setStyle(style);
            _feature.setId(route.id);

            _vSource.addFeatures([_feature]);
          }

          const vectorLayer = new VectorLayer({
            source: _vSource,
            style: function (feature) {
              return styles[feature.get("type")];
            },
          });

          setvSource(_vSource);

          map.addLayer(vectorLayer);
          // map.getView().fit(routeFeature.getGeometry());
        });
      });
    }
  }, [map, coordinates]);

  useEffect(() => {
    if (map) {
      const _selectInteraction = new Select({
        style: selectStyle,
      });

      setSelectInteraction(_selectInteraction);

      map.addInteraction(_selectInteraction);
    }
  }, [map]);

  return <MapWrapper map={map} setMap={setMap} />;
}

export default TravelMap;
