import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { latlngState } from "../_atoms/map";
import { fetchAddressInfo } from "../_api/fetchAddressInfo";

export default function useAddressInfo() {
  const latlng = useRecoilValue(latlngState);

  return useQuery({
    queryKey: ["addressInfo", latlng],
    queryFn: () => fetchAddressInfo({ lat: latlng.lat, lon: latlng.lng }),
  });
}
