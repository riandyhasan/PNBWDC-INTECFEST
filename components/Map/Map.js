import React, { useState } from "react";
import { Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map({ ...props }) {
  const [isLg] = useMediaQuery("(min-width: 990px)");

  const [viewport, setViewport] = useState({
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 14,
  });

  return (
    <ReactMapGL
      {...viewport}
      width={isLg ? "40vw" : "70vw"}
      mapboxApiAccessToken="pk.eyJ1IjoicmlhbmR5aGFzYW4iLCJhIjoiY2t0cmNwdTFiMTUwbzJvbDRjdG4zcHliciJ9.kWgnsrMNfY_h1t2BAmwaUQ"
      mapStyle="mapbox://styles/riandyhasan/cktrdh2an04bf17qr9zx013qs"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      {...props}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <Flex direction="column" alignItems="center">
          <Image src="assets/svg/pin-merah.svg" width="1.4em" />
          <Heading color="brand.primary" fontSize="sm">
            Lokasimu
          </Heading>
        </Flex>
      </Marker>
    </ReactMapGL>
  );
}
