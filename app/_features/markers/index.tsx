import Marker from "@/app/_entities/marker";
import { useMapStore } from "@/app/_stores/map";
import React from "react";

export default function Markers() {
  const { map } = useMapStore();

  if (!map) return <></>;
  return <Marker map={map} />;
}
