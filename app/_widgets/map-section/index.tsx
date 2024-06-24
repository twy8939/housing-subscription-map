"use client";

import Map from "@/app/_features/map";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
export default function MapSection() {
  const pathname = usePathname();
  const query = useMemo(() => new URLSearchParams(pathname.slice(1)), []);

  // const currentLocation = navigator.geolocation.getCurrentPosition(
  //   (position) => [position.coords.latitude, position.coords.longitude]
  // );

  const initialZoom = useMemo(
    () => (query.get("zoom") ? Number(query.get("zoom")) : 15),
    [query]
  );

  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get("lat") && query.get("lng")
        ? [Number(query.get("lat")), Number(query.get("lng"))]
        : [37, 127],
    [query]
  );

  return (
    <>
      <Map initialCenter={initialCenter} initialZoom={initialZoom} />
    </>
  );
}
