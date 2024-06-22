import Script from "next/script";
import React, { useEffect, useRef } from "react";

export default function Map({ onLoad }: IMapProps) {
  const mapId = "map";

  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      minZoom: 10,
      scaleControl: true,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
    };

    const map = new window.naver.maps.Map("map", mapOptions);

    if (onLoad) onLoad(map);
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
