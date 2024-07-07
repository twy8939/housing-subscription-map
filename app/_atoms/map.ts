import { atom } from "recoil";

const latlngState = atom<{ lat: number; lng: number }>({
  key: "latlngState",
  default: { lat: 37.5262411, lng: 126.99289439 },
});

export { latlngState };
