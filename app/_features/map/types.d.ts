type NaverMap = naver.maps.Map;

type Coordinates = [Lat, Lng];

interface IMapProps {
  onLoad?: (map: NaverMap) => void;
}
