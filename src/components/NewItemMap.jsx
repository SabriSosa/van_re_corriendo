import React, { useState, useEffect, useRef } from "react";

// openlayers
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";
import { Point } from "ol/geom";

import MapWrapper from "./generic/MapWrapper";
import { toLonLat } from "ol/proj";

function NewItemMap({setCoord}) {
  const [map, setMap] = useState();

  let _vectorLayer;

  const setPinOnMap = function (evt) {
    if (_vectorLayer) {
      map.removeLayer(_vectorLayer);
    }

    const _coord = evt.coordinate;
    
    const iconGeometry = new Point(evt.coordinate);
    var lat = _coord[1];
    var lon = _coord[0];

    setCoord({lat: lat, lon: lon});

    

    var iconFeature = new Feature({
      geometry: iconGeometry,
      name: "New Point",
    });
    var iconStyle = new Style({
      image: new Icon({
        imgSize: [32, 48],
        src: "http://openlayers.org/en/v3.20.1/examples/data/icon.png",
        zIndex: "10",
      }),
    });

    iconFeature.setStyle(iconStyle);

    var vectorSource = new VectorSource({
      features: [iconFeature],
    });
    _vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(_vectorLayer);
  };

  useEffect(() => {
    if (map) {
      map.getTargetElement().classList.remove('spinner');
      map.on("singleclick", function (evt) {
        setPinOnMap(evt);
      });
    }
  }, [map]);

  return <MapWrapper setMap={setMap} />;
}

export default NewItemMap;
