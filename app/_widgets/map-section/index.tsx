"use client";

import Map from "@/app/_features/map";
import useMap from "@/app/_hooks/useMap";
import React from "react";

export default function MapSection() {
  const { initializeMap } = useMap();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
    </>
  );
}
