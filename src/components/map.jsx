import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
// import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 5.646;
  const lat = 52.101;
  const zoom = 6.5;
  const API_KEY = 'slGgf261j8f1Iw0bMTPA';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap relative size-full">
      <div ref={mapContainer} className="map absolute size-full" />
    </div>
  );
}