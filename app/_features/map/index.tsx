import { useLatLngStore } from "@/app/_stores/map";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useMemo, useRef } from "react";

export default function Map({ onLoad }: IMapProps) {
  const mapId = "map";
  const pathname = usePathname();

  const mapRef = useRef<NaverMap | null>(null);

  const setLatLng = useLatLngStore((state) => state.setLatLng);

  const query = useMemo(() => new URLSearchParams(pathname.slice(1)), []);

  const initializeMap = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = Number(query.get("lat")) || position.coords.latitude;
      const lng = Number(query.get("lng")) || position.coords.longitude;

      const mapOptions = {
        center: new window.naver.maps.LatLng(lat, lng),
        zoom: 15,
        minZoom: 9,
        scaleControl: true,
        mapDataControl: false,
        logoControlOptions: {
          position: naver.maps.Position.BOTTOM_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(mapId, mapOptions);

      setLatLng(lat, lng);

      const updateLatLng = () => {
        const latlng = map.getCenter();
        setLatLng(latlng.y, latlng.x);
      };

      naver.maps.Event.addListener(map, "dragend", updateLatLng);
      naver.maps.Event.addListener(map, "zoom_changed", updateLatLng);

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
