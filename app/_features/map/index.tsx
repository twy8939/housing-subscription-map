import Script from "next/script";
import React, { useEffect, useRef } from "react";

export default function Map({ onLoad }: IMapProps) {
  const mapId = "map";

  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLocation = new naver.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      const mapOptions = {
        center: currentLocation,
        zoom: 16,
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
