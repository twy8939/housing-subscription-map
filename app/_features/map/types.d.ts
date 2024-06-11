type NaverMap = naver.maps.Map;

interface IMapProps {
  onLoad?: (map: NaverMap) => void;
}
