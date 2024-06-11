import useSWR, { mutate } from "swr";

type Lat = number;
type Lng = number;
export type ICoordinates = [Lat, Lng];

export const INITIAL_CENTER: ICoordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 10;

export const MAP_KEY = "/map";

const useMap = () => {
  const { data: map } = useSWR(MAP_KEY);
  const initializeMap = (map: NaverMap) => {
    mutate(MAP_KEY, map);
  };

  const resetMapOptions = () => {
    if (map) {
      map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
    }
  };

  const getMapOptions = () => {
    if (map) {
      const mapCenter = map.getCenter();
      const center: ICoordinates = [mapCenter.lat(), mapCenter.lng()];
      const zoom = map.getZoom();

      return { center, zoom };
    }
    return { center: INITIAL_CENTER, zoom: INITIAL_ZOOM };
  };

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
  };
};

export default useMap;
