type NaverMap = naver.maps.Map;

type Coordinates = [Lat, Lng];

interface IMapProps {
  initialZoom?: number;
  initialCenter: Coordinates;
  onLoad?: (map: NaverMap) => void;
}
