import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

import { CustomMap } from "./Map";

export default function MapProvider() {
  return (
    <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY as string}>
      <CustomMap />
    </APIProvider>
  );
}
