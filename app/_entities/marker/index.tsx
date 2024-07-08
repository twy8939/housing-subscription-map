import { useEffect } from "react";

const Marker = ({ map }: { map: naver.maps.Map }): undefined => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    console.log(marker);

    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(37.5390208, 127.05792),
      });
    }
  }, [map]);
};

export default Marker;
