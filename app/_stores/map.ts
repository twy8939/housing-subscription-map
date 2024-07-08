import create from "zustand";

interface LatLngState {
  lat: number;
  lng: number;
  setLatLng: (lat: number, lng: number) => void;
}

export const useLatLngStore = create<LatLngState>((set) => ({
  lat: 37.5262411,
  lng: 126.99289439,
  setLatLng: (lat, lng) => set({ lat, lng }),
}));

interface MapState {
  map: naver.maps.Map | null;
  setMap: (map: naver.maps.Map) => void;
}

export const useMapStore = create<MapState>((set) => ({
  map: null,
  setMap: (map) => set({ map }),
}));
