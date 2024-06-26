import { atom } from "recoil";

const latlngState = atom<{ lat: number; lng: number }>({
  key: "latlngState",
});

export { latlngState };
