import React, { useEffect, useRef } from "react";
import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";
import { useMap } from "@vis.gl/react-google-maps";

import { IBike } from "@/types/bike/bike.type";

import { CustomAdvancedMarker } from "../AdvancedMarker/AdvancedMarker";

export const Markers = ({ data }: { data: IBike[] }) => {
  const map = useMap();
  const [markers, setMarkers] = React.useState<{ [key: string]: Marker }>({});
  const [activeMarker, setActiveMarker] = React.useState<number | null>(null);
  const clusterer = useRef<MarkerClusterer | null>(null);

  const handleActiveMarker = (key: number | null) => {
    if (activeMarker === key) {
      return setActiveMarker(null);
    }

    return setActiveMarker(key);
  };

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      }
      const newMarkers = { ...prev };
      delete newMarkers[key];

      return newMarkers;
    });
  };

  return (
    <>
      {data.map((bike) => {
        return (
          <CustomAdvancedMarker
            activeMarker={activeMarker}
            handleActiveMarker={handleActiveMarker}
            setMarkerRef={setMarkerRef}
            key={bike.id}
            bike={bike}
          />
        );
      })}
    </>
  );
};
