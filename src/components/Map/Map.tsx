import React from "react";
import { Map } from "@vis.gl/react-google-maps";

import { useGetBikes } from "@/react-queries/bikes/useGetMarkers";

import styles from "./Map.module.scss";

import { Markers } from "../Markers/Markers";

export const CustomMap = () => {
  const { data: bikesData } = useGetBikes();

  return (
    <div className={styles.container}>
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={{
          lat: 48.912511,
          lng: 24.692757
        }}
        gestureHandling={"greedy"}
        disableDefaultUI
        mapId={process.env.REACT_APP_MAP_ID_KEY as string}
      >
        {bikesData && <Markers data={bikesData} />}
      </Map>
    </div>
  );
};
