// react
// openlayers
import Feature from "ol/Feature";
import Polyline from "ol/format/Polyline";
import { Point } from "ol/geom";
import { Select } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedPlace, setSelectedPlace } from "../slices/routeSlice";
import MapWrapper from "./generic/MapWrapper";

function TravelMap({ routes, coordinates, setIsSelected }) {
  const [map, setMap] = useState();
  const [vSource, setvSource] = useState();
  const [selectInteraction, setSelectInteraction] = useState();
  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);

  const createCanvas = (img, borderColor) => {
    const image = new Image();
    image.src = img;
    const canvas = document.createElement("canvas");
    const circleCtx = canvas.getContext("2d");

    canvas.width = 100;
    canvas.height = 100;
    circleCtx.beginPath();

    circleCtx.arc(50, 50, 40, 0, 2 * Math.PI, true);
    circleCtx.fill();
    circleCtx.lineWidth = 8;

    circleCtx.strokeStyle = borderColor;

    circleCtx.stroke();
    circleCtx.clip();

    circleCtx.drawImage(image, 0, 0, 100, 100);
    circleCtx.restore();
    circleCtx.closePath();

    return canvas;
  };

  let selectStyle = function (feature) {
    dispatch(setSelectedPlace({ routeId: feature.get("id") }));
    const canvas = createCanvas(feature.get("image"), "dodgerblue");

    let styles = [
      new Style({
        image: new Icon({
          scale: 0.8,
          img: canvas,
          imgSize: canvas ? [canvas.width, canvas.height] : undefined,
        }),
        zIndex: 1,
      }),
    ];

    return styles;
  };

  useEffect(() => {
    if (selectedPlace && vSource) {
      map.getTargetElement().classList.add("spinner");
      const __feature = vSource?.getFeatureById(selectedPlace.id);
      var featuresCollection = selectInteraction.getFeatures();
      featuresCollection.pop();
      featuresCollection.push(__feature);

      const extent = __feature.getGeometry().getExtent();

      map.getView().fit(extent, {
        size: map.getSize(),
        maxZoom: 7,
      });

      setTimeout(() => {
        map.getTargetElement().classList.remove("spinner");
      }, 800);
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
          const polyline = result?.routes[0].geometry;

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
            const coord = [route.longitude, route.latitude];
            const _feature = new Feature({
              geometry: new Point(coord),
              id: route.id,
              image: route.imageRoute,
            });
            const canvas = createCanvas(route.imageRoute, "white");

            const style = new Style({
              image: new Icon({
                scale: 0.5,
                img: canvas,
                imgSize: canvas ? [canvas.width, canvas.height] : undefined,
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
          map.getTargetElement().classList.remove("spinner");
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

  return (
    <MapWrapper
      onClick={() => {
        setIsSelected(false);
      }}
      setMap={setMap}
      className="mapwrapper"
    />
  );
}

export default TravelMap;
