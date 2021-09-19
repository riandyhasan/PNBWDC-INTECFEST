import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map({ ...props }) {
  const [viewport, setViewport] = useState({
    width: "40vw",
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return <ReactMapGL {...viewport} onViewportChange={(nextViewport) => setViewport(nextViewport)} {...props} />;
}
