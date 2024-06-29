import { useRecoilValue } from "recoil";
import { fetchAddressInfo } from "../_api/fetchAddressInfo";
import { useQuery } from "@tanstack/react-query";
import { latlngState } from "../_atoms/map";

export default function useAddressInfo() {
  const latlng = useRecoilValue(latlngState);

  return useQuery({
    queryKey: ["addressInfo", latlng],
    queryFn: () => fetchAddressInfo({ lat: latlng.lat, lon: latlng.lng }),
  });
}
