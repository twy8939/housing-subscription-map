import React, { useEffect, useState } from "react";

interface MarkerProps {
  map: naver.maps.Map;
  address: string;
}

const Marker: React.FC<MarkerProps> = ({ map, address }) => {
  const [position, setPosition] = useState<null | naver.maps.LatLng>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/example/map-geocode/v2/geocode?query=${encodeURIComponent(
            address
          )}`,
          {
            headers: {
              "X-NCP-APIGW-API-KEY-ID":
                process.env.NEXT_PUBLIC_NCP_CLIENT_ID || "",
              "X-NCP-APIGW-API-KEY":
                process.env.NEXT_PUBLIC_NCP_CLIENT_SECRET || "",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            const { x, y } = data.addresses[0];

            setPosition(new naver.maps.LatLng(y, x));
          }
        } else {
          console.error("Failed to fetch coordinates", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch coordinates", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  useEffect(() => {
    if (position && map) {
      new naver.maps.Marker({
        map,
        position,
      });
    }
  }, [position, map]);

  // useEffect(() => {
  //   let marker: naver.maps.Marker | null = null;

  //   if (map) {
  //     marker = new naver.maps.Marker({
  //       map,
  //       position: new naver.maps.LatLng(37.5390208, 127.05792),
  //     });
  //   }
  // }, [position]);

  return null;
};

export default Marker;
