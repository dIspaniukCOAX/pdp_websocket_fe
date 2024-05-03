import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import styles from "./Map.module.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAP_API_KEY as string;

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(31.1656);
  const [lat, setLat] = useState(48.37);
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);
        setZoom(12);
      });
    }
  }, []);

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        center: [lng, lat],
        style: "mapbox://styles/mapbox/light-v11",
        zoom
      });
    } else if (map.current) {
      map.current.flyTo({ center: [lng, lat], zoom });
    }
  }, [map.current, lng, lat, zoom]);

  return <div ref={mapContainer} className={styles.container} />;
};
