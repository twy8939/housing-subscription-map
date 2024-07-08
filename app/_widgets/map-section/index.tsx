"use client";

import Map from "@/app/_features/map";
import Markers from "@/app/_features/markers";
import useMap from "@/app/_hooks/useMap";
import React from "react";

export default function MapSection() {
  const { initializeMap } = useMap();
  const onLoadMap = (map: naver.maps.Map) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
}
