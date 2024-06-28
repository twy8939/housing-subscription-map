import { atom } from "recoil";

const latlngState = atom<{ lat: number; lng: number }>({
  key: "latlngState",
  default: { lat: 0, lng: 0 },
});

export { latlngState };
