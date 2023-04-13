// react
import React, { useState, useEffect } from "react";

import MapWrapper from "../components/MapWrapper";
import * as FirestoreService from "../services/firestore";

export default function TravelRoute() {
  const [coordinates, setCoordinates] = useState();
  const [routes, setRoutes] = useState();

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

  useEffect(() => {
    getRoutes();
  }, []);

  return <MapWrapper routes={routes} coordinates={coordinates} />;
}
