import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useMemo, useRef } from "react";

export default function Map({ onLoad }: IMapProps) {
  const mapId = "map";
  const pathname = usePathname();

  const mapRef = useRef<NaverMap | null>(null);

  const query = useMemo(() => new URLSearchParams(pathname.slice(1)), []);

  const initializeMap = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLocation: Coordinates = [
        position.coords.latitude,
        position.coords.longitude,
      ];

      const center =
        query.get("lat") && query.get("lng")
          ? ([
              Number(query.get("lat")),
              Number(query.get("lng")),
            ] as Coordinates)
          : currentLocation;

      const mapOptions = {
        center: new window.naver.maps.LatLng(...center),
        zoom: 15,
        minZoom: 9,
        scaleControl: true,
        mapDataControl: false,
        logoControlOptions: {
          position: naver.maps.Position.BOTTOM_RIGHT,
        },
      };

      const map = new window.naver.maps.Map("map", mapOptions);

      if (onLoad) onLoad(map);
    });
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className="w-full h-full" />
    </>
  );
}
