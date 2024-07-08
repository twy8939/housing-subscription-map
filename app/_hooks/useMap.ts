import { useMapStore } from "../_stores/map";

const useMap = () => {
  const setMap = useMapStore((state) => state.setMap);

  const initializeMap = (map: NaverMap) => {
    setMap(map);
  };

  return { initializeMap };
};

export default useMap;
